# -*- coding: utf-8 -*-
"""
Dossier complet en page web : le dossier Word publié (celui dont le PDF est en téléchargement) devient
le contenu de la page du pays — texte, tableaux, graphiques et photos.

    python scripts/dossiers/dossier_complet.py <dossier des .docx> [pays …]

Sortie, pour chaque pays :
  src/content/dossiers-complets/<pays>.html      fragment HTML lu par la page au moment du build
  public/images/dossiers/<pays>/complet/<n>.webp images du dossier

Ce qui est retiré du Word : la couverture (tout ce qui précède le premier titre), le sommaire (la page web
a le sien, avec des liens) et la quatrième de couverture (logo et adresses, déjà dans la page).
"""
import hashlib, html, io, os, re, sys
import docx, mammoth
from bs4 import BeautifulSoup
from PIL import Image

sys.stdout.reconfigure(encoding="utf-8")
RACINE = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Pays → (fichier Word, langue de la page). Le Word est celui dont le PDF est publié dans cette langue.
PAYS = {
    "djibouti": ("Green-Solutions_Dossier-Djibouti", "fr"),
    "espagne": ("Green-Solutions_Dossier-Espana", "es"),
    "ethiopie": ("Green-Solutions_Ethiopia-Dossier", "en"),
    "france": ("Green-Solutions_Dossier-France", "fr"),
    "gabon": ("Green-Solutions_Dossier-Gabon", "fr"),
    "liban": ("Green-Solutions_Dossier-Liban-FR", "fr"),
    "madagascar": ("Green-Solutions_Dossier-Madagascar", "fr"),
    "oman": ("Green-Solutions_Dossier-Oman-EN", "en"),
    "togo": ("Green-Solutions_Dossier-Togo", "fr"),
    "turquie": ("Green-Solutions_Turkiye-Dosyasi", "tr"),
    "usa": ("Green-Solutions_Dossier-USA", "en"),
}
SOMMAIRE = {"sommaire", "contents", "içindekiler", "índice", "indice", "المحتويات", "table des matières"}
TITRE_SOMMAIRE = {"fr": "Sommaire", "en": "Contents", "es": "Índice", "tr": "İçindekiler", "ar": "المحتويات"}
LEGENDE = re.compile(r"^(Figure|Figura|Şekil|Fig\.|الشكل)\s*\d+")

# Retouches propres à un pays : le PDF publié a été corrigé après coup, le Word non.
# Chaque entrée est un début de paragraphe à retirer (le paragraphe entier part).
RETRAITS = {
    "espagne": ["Datos a ", "Las hortalizas, la fruta y las aceitunas pesan más en valor",
                "8.5 Agua ahorrada y valor por cultivo", "Ahorro de agua y valor generado por cultivo",
                "Figura 17. Valor generado por hectárea"],
}


def texte(p):
    return "".join(t.text or "" for t in p.iter(docx.oxml.ns.qn("w:t")))


def a_image(el):
    return bool(el.xpath(".//pic:pic"))


def nettoyer_word(chemin, pays):
    """Retire couverture, sommaire et quatrième de couverture ; renvoie le .docx modifié en mémoire."""
    d = docx.Document(chemin)
    corps = d.element.body
    blocs = [el for el in corps if el.tag in (docx.oxml.ns.qn("w:p"), docx.oxml.ns.qn("w:tbl"))]
    style = lambda el: (el.pPr.pStyle.val if el.tag == docx.oxml.ns.qn("w:p") and el.pPr is not None and el.pPr.pStyle is not None else "")
    titre1 = lambda el: re.match(r"(Heading|Titre)1$", style(el) or "") is not None

    # 1. Couverture : tout ce qui précède le premier titre de niveau 1.
    debut = next(i for i, el in enumerate(blocs) if titre1(el))
    retirer = blocs[:debut]

    # 2. Sommaire : du titre « Sommaire » au titre de niveau 1 suivant.
    for i, el in enumerate(blocs):
        if el.tag == docx.oxml.ns.qn("w:p") and texte(el).strip().lower() in SOMMAIRE:
            j = i + 1
            while j < len(blocs) and not titre1(blocs[j]):
                j += 1
            retirer += blocs[i:j]
            break

    # 3. Quatrième de couverture : à partir du logo (dernière image suivie de « Green Solutions »).
    for i in range(len(blocs) - 1, debut, -1):
        if texte(blocs[i]).strip() == "Green Solutions":
            k = i - 1
            while k > debut and not texte(blocs[k]).strip() and not a_image(blocs[k]):
                k -= 1
            retirer += blocs[k if a_image(blocs[k]) else i:]
            break

    # 4. Retouches propres au pays (et l'image qui précède une légende retirée).
    for i, el in enumerate(blocs):
        t = texte(el).strip()
        if any(t.startswith(r) for r in RETRAITS.get(pays, [])):
            retirer.append(el)
            if LEGENDE.match(t) and i > 0 and a_image(blocs[i - 1]):
                retirer.append(blocs[i - 1])

    for el in set(retirer):
        corps.remove(el)

    # Largeur de chaque image dans le Word (en % de la largeur du texte, 17 cm), passée par le texte de remplacement :
    # la page web garde les proportions du dossier au lieu d'étirer chaque image sur toute la largeur.
    for dp in corps.iter(docx.oxml.ns.qn("wp:docPr")):
        ext = dp.getparent().find(docx.oxml.ns.qn("wp:extent"))
        if ext is not None:
            dp.set("descr", f"__w{min(100, round(int(ext.get('cx')) / 360000 / 17 * 100))}")
    tampon = io.BytesIO()
    d.save(tampon)
    tampon.seek(0)
    return tampon


def convertir(pays, dossier_word):
    nom, langue = PAYS[pays]
    sortie_img = os.path.join(RACINE, "public", "images", "dossiers", pays, "complet")
    os.makedirs(sortie_img, exist_ok=True)
    for f in os.listdir(sortie_img):
        os.remove(os.path.join(sortie_img, f))
    vues = {}

    def image(img):
        with img.open() as f:
            data = f.read()
        cle = hashlib.sha1(data).hexdigest()
        if cle not in vues:
            im = Image.open(io.BytesIO(data))
            photo = img.content_type in ("image/jpeg", "image/jpg")
            im = im.convert("RGB")
            if im.width > 1200:
                im = im.resize((1200, round(im.height * 1200 / im.width)), Image.LANCZOS)
            n = len(vues)
            im.save(os.path.join(sortie_img, f"{n}.webp"), "WEBP", quality=72 if photo else 85, method=6)
            vues[cle] = {"src": f"/images/dossiers/{pays}/complet/{n}.webp", "width": str(im.width), "height": str(im.height),
                         "class": "dc-photo" if photo else "dc-graphique", "loading": "lazy", "decoding": "async",
                         "alt": ""}
        attrs = dict(vues[cle])
        m = re.match(r"__w(\d+)", img.alt_text or "")
        if m:
            attrs["style"] = f"width:{m.group(1)}%"
        return attrs

    style_map = "\n".join([
        "p[style-name='Heading 1'] => h2:fresh", "p[style-name='Heading 2'] => h3:fresh", "p[style-name='Heading 3'] => h4:fresh",
        "p[style-name='Titre 1'] => h2:fresh", "p[style-name='Titre 2'] => h3:fresh", "p[style-name='Titre 3'] => h4:fresh",
        "p[style-name='Title'] => h2:fresh",
    ])
    res = mammoth.convert_to_html(nettoyer_word(os.path.join(dossier_word, nom + ".docx"), pays),
                                  style_map=style_map, convert_image=mammoth.images.img_element(image))
    soup = BeautifulSoup(res.value, "html.parser")

    # Paragraphes vides.
    for p in soup.find_all("p"):
        if not p.get_text(strip=True) and not p.find("img"):
            p.decompose()

    # Tableaux d'une seule cellule = encadrés ; les autres défilent horizontalement sur mobile.
    for t in soup.find_all("table"):
        cellules = t.find_all("td")
        if len(cellules) == 1:
            aside = soup.new_tag("aside", attrs={"class": "dc-encadre"})
            for enfant in list(cellules[0].children):
                aside.append(enfant.extract())
            t.replace_with(aside)
        else:
            enveloppe = soup.new_tag("div", attrs={"class": "dc-tableau"})
            t.wrap(enveloppe)
            premiere = t.find("tr")
            cases = premiere.find_all("td") if premiere else []
            if cases and any(re.match(r"^[\d+−-]", c.get_text(strip=True)) for c in cases):
                # Cartes de chiffres clés (« 85,9 M · Habitants… ») : une grille, pas un tableau à en-tête.
                t["class"] = "dc-chiffres"
                premiere = None
            if premiere:
                for td in premiere.find_all("td"):
                    td.name = "th"
                    td["scope"] = "col"

    # Image seule dans son paragraphe → figure ; la légende qui suit devient figcaption.
    for img in soup.find_all("img"):
        p = img.parent
        if p.name == "p" and not p.get_text(strip=True) and len(p.find_all("img")) == 1:
            fig = soup.new_tag("figure", attrs={"class": img["class"] if isinstance(img["class"], str) else " ".join(img["class"])})
            fig.append(img.extract())
            suivant = p.find_next_sibling()
            p.replace_with(fig)
            if suivant is not None and suivant.name == "p" and len(suivant.get_text(strip=True)) < 400 and (
                    LEGENDE.match(suivant.get_text(strip=True)) or (suivant.find("em") and suivant.get_text(strip=True) == suivant.find("em").get_text(strip=True))):
                cap = soup.new_tag("figcaption")
                for enfant in list(suivant.children):
                    cap.append(enfant.extract())
                suivant.decompose()
                fig.append(cap)

    # Légendes de tableau et sources en italique : discrètes.
    for p in soup.find_all("p"):
        t = p.get_text(strip=True)
        if re.match(r"^(Source|Sources|Fuente|Fuentes|Kaynak|المصدر)\s*:", t):
            p["class"] = "dc-source"

    # Ancres et sommaire cliquable.
    entrees = []
    for i, h in enumerate(soup.find_all("h2")):
        h["id"] = f"partie-{i + 1}"
        for a in h.find_all("a"):  # signets Word vides
            a.unwrap()
        entrees.append((h["id"], h.get_text(strip=True)))
    for h in soup.find_all(["h3", "h4"]):
        for a in h.find_all("a"):
            a.unwrap()
    for a in soup.find_all("a"):
        if not a.get("href"):
            a.unwrap()
    nav = (f'<nav class="dc-sommaire" aria-label="{html.escape(TITRE_SOMMAIRE[langue])}"><p class="dc-sommaire-titre">{html.escape(TITRE_SOMMAIRE[langue])}</p><ol>'
           + "".join(f'<li><a href="#{i}">{html.escape(t)}</a></li>' for i, t in entrees) + "</ol></nav>")

    dest = os.path.join(RACINE, "src", "content", "dossiers-complets")
    os.makedirs(dest, exist_ok=True)
    with open(os.path.join(dest, pays + ".html"), "w", encoding="utf-8", newline="\n") as f:
        f.write(nav + "\n" + str(soup))
    poids = sum(os.path.getsize(os.path.join(sortie_img, x)) for x in os.listdir(sortie_img)) // 1024
    print(f"{pays:11s} {langue}  {len(entrees):2d} parties  {len(soup.find_all('table'))+len(soup.select('.dc-encadre')):3d} tableaux/encadrés  "
          f"{len(vues):2d} images ({poids} Ko)  {len(str(soup))//1024} Ko de HTML  messages Word : {len(res.messages)}")


if __name__ == "__main__":
    dossier_word = sys.argv[1]
    for pays in (sys.argv[2:] or PAYS):
        convertir(pays, dossier_word)
