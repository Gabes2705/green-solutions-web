import os
from PIL import Image

SRC = r"C:\Users\Utilisateur\OneDrive\Desktop\logos_partenaires_standardises"
DST = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "images", "partners")
WIDTH = 600

# slug -> (source filename, display name)
MAPPING = [
    ("ecole-maraichage-urbain", "01_ecole_maraichage_urbain.png", "École de Maraîchage Urbain"),
    ("afrinest-moringa-farm", "02_afrinest_moringa_farm.png", "AfriNest Moringa Farm"),
    ("kortasgreen", "03_kortasgreen.png", "KortasGreen"),
    ("adnp", "04_adnp.png", "ADNP"),
    ("campari-group", "05_campari_group.png", "Campari Group"),
    ("axe-capital-forest", "06_axe_capital.png", "AXE Capital Forest"),
    ("dual-axis", "07_dual_axis.png", "Dual Axis"),
    ("institut-international-cafeologie", "08_institut_international_cafeologie.png", "Institut International de Caféologie"),
    ("up2green", "09_up2green.png", "Up2Green"),
    ("ziha-fresh", "10_ziha_fresh.png", "Ziha Fresh"),
    ("eterna", "11_eterna.png", "Eterna"),
    ("ems-services", "12_ems_services.png", "EMS Services"),
    ("cehpape", "13_cehpape.png", "CEHPAPE"),
    ("university-florida-ifas", "14_university_florida_ifas.png", "University of Florida IFAS"),
    ("saic-industries", "15_saic_industries.png", "SAIC Industries"),
    ("oregon-state-university", "16_oregon_state_university.png", "Oregon State University"),
    ("been-agro-business", "17_been_agro_business.png", "Been Agro Business"),
    ("racine", "18_racine.png", "Racine"),
    ("gfa-greenfield-advisors", "19_gfa_greenfield_advisors.png", "GFA Greenfield Advisors"),
    ("green-legacy", "20_green_legacy.png", "Green Legacy"),
    ("alma-green", "21_alma_green.png", "Alma Green"),
    ("intograss", "22_intograss.png", "Intograss"),
    ("bluecells-synergy", "23_bluecells_synergy.png", "BlueCells Synergy"),
    ("fondation-adrienne-souindele", "24_fondation_adrienne_souindele.png", "Fondation Adrienne Souindélé"),
    ("aquajet", "25_aquajet.png", "AquaJet"),
    ("lenoda", "26_lenoda.png", "Lenoda"),
    ("natur-ethique", "27_natur_ethique.png", "Natur'Éthique"),
    ("wasser-arame", "28_wasser_arame.png", "Wasser Arame"),
    ("mcfi", "29_mcfi.png", "MCFI"),
    ("ete-europeenne-traitement-eaux", "30_ete_europeenne_traitement_eaux.png", "ETE - Européenne de Traitement des Eaux"),
    ("green-dream", "31_green_dream.png", "Green Dream"),
    ("green-solutions", "32_green_solutions.png", "Green Solutions"),
    ("globe-sdg-emblem", "33_globe_sdg_emblem.png", "Objectifs de développement durable"),
]

os.makedirs(DST, exist_ok=True)

manifest = []
for slug, filename, name in MAPPING:
    src_path = os.path.join(SRC, filename)
    im = Image.open(src_path).convert("RGB")
    w, h = im.size
    height = round(WIDTH * h / w)
    im = im.resize((WIDTH, height), Image.LANCZOS)
    out_path = os.path.join(DST, f"{slug}.jpg")
    im.save(out_path, "JPEG", quality=88)
    manifest.append((slug, name))
    print(f"{filename} -> {slug}.jpg ({name})")

print("done,", len(MAPPING), "logos written to", DST)
