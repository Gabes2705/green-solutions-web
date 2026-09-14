#!/usr/bin/env python3
"""
Haitian Market Development Dossier Generator
Builds a comprehensive PPTX presentation in French covering:
- Market overview
- Agricultural sectors
- Water usage patterns
- Climate & constraints
- Technology fit
- Case studies
- Regulatory environment
- Partnership opportunities
"""

import os
import sys
import requests
from PIL import Image
from io import BytesIO
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN
from pptx.dml.color import RGBColor
import subprocess

# Configuration
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "documents", "countries")
OUTPUT_PPTX = os.path.join(OUTPUT_DIR, "haiti.pptx")
OUTPUT_PDF = os.path.join(OUTPUT_DIR, "haiti.pdf")

# Colors for the presentation
COLOR_PRIMARY = RGBColor(0, 61, 165)  # Haiti blue
COLOR_SECONDARY = RGBColor(206, 17, 38)  # Haiti red
COLOR_ACCENT = RGBColor(255, 255, 255)  # White
COLOR_TEXT = RGBColor(30, 30, 30)  # Dark gray

def download_and_crop_image(url, crop_box=None, max_width=None, max_height=None):
    """Download an image from URL and optionally crop it."""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        img = Image.open(BytesIO(response.content))

        # Convert RGBA to RGB if needed
        if img.mode == 'RGBA':
            rgb_img = Image.new('RGB', img.size, (255, 255, 255))
            rgb_img.paste(img, mask=img.split()[3])
            img = rgb_img

        # Crop if specified
        if crop_box:
            img = img.crop(crop_box)

        # Resize if dimensions specified
        if max_width and max_height:
            img.thumbnail((max_width, max_height), Image.Resampling.LANCZOS)

        return img
    except Exception as e:
        print(f"Error downloading image from {url}: {e}")
        return None

def add_title_slide(prs, title, subtitle=""):
    """Add a title slide to the presentation."""
    slide_layout = prs.slide_layouts[6]  # Blank layout
    slide = prs.slides.add_slide(slide_layout)

    # Add background
    background = slide.shapes.add_shape(1, 0, 0, prs.slide_width, prs.slide_height)
    background.fill.solid()
    background.fill.fore_color.rgb = COLOR_PRIMARY
    background.line.color.rgb = COLOR_PRIMARY

    # Add title
    title_box = slide.shapes.add_textbox(Inches(0.5), Inches(2), Inches(9), Inches(2))
    title_frame = title_box.text_frame
    title_frame.word_wrap = True
    p = title_frame.paragraphs[0]
    p.text = title
    p.font.size = Pt(54)
    p.font.bold = True
    p.font.color.rgb = COLOR_ACCENT

    # Add subtitle
    if subtitle:
        subtitle_box = slide.shapes.add_textbox(Inches(0.5), Inches(4), Inches(9), Inches(2))
        subtitle_frame = subtitle_box.text_frame
        subtitle_frame.word_wrap = True
        p = subtitle_frame.paragraphs[0]
        p.text = subtitle
        p.font.size = Pt(28)
        p.font.color.rgb = COLOR_SECONDARY

def add_content_slide(prs, title, content_items, image_url=None):
    """Add a content slide with title, bullet points, and optional image."""
    slide_layout = prs.slide_layouts[6]  # Blank layout
    slide = prs.slides.add_slide(slide_layout)

    # Add background
    background = slide.shapes.add_shape(1, 0, 0, prs.slide_width, prs.slide_height)
    background.fill.solid()
    background.fill.fore_color.rgb = RGBColor(245, 245, 245)
    background.line.color.rgb = RGBColor(245, 245, 245)

    # Add title bar
    title_bar = slide.shapes.add_shape(1, 0, 0, prs.slide_width, Inches(0.8))
    title_bar.fill.solid()
    title_bar.fill.fore_color.rgb = COLOR_PRIMARY
    title_bar.line.color.rgb = COLOR_PRIMARY

    # Add title
    title_box = slide.shapes.add_textbox(Inches(0.5), Inches(0.15), Inches(9), Inches(0.6))
    title_frame = title_box.text_frame
    p = title_frame.paragraphs[0]
    p.text = title
    p.font.size = Pt(36)
    p.font.bold = True
    p.font.color.rgb = COLOR_ACCENT

    # Add content
    if image_url:
        # Content with image on the right
        content_box = slide.shapes.add_textbox(Inches(0.5), Inches(1.2), Inches(4.5), Inches(5.3))

        # Try to add image
        try:
            img = download_and_crop_image(image_url, max_width=1600, max_height=1200)
            if img:
                img_bytes = BytesIO()
                img.save(img_bytes, format='PNG')
                img_bytes.seek(0)
                slide.shapes.add_picture(img_bytes, Inches(5.2), Inches(1.2), width=Inches(4))
        except:
            pass
    else:
        content_box = slide.shapes.add_textbox(Inches(0.5), Inches(1.2), Inches(9), Inches(5.3))

    text_frame = content_box.text_frame
    text_frame.word_wrap = True

    for i, item in enumerate(content_items):
        if i == 0:
            p = text_frame.paragraphs[0]
        else:
            p = text_frame.add_paragraph()

        p.text = item
        p.font.size = Pt(18)
        p.font.color.rgb = COLOR_TEXT
        p.level = 0
        p.space_before = Pt(12)

def create_presentation():
    """Create the Haiti dossier presentation."""
    prs = Presentation()
    prs.slide_width = Inches(10)
    prs.slide_height = Inches(7.5)

    print("Creating Haiti Market Development Dossier...")

    # Slide 1: Title Slide
    print("Adding slide 1: Title slide")
    add_title_slide(prs, "HAÏTI", "Dossier de développement du marché agricole\n2026")

    # Slide 2: Table of Contents
    print("Adding slide 2: Table of contents")
    add_content_slide(prs, "Sommaire", [
        "• Aperçu du marché et contexte économique",
        "• Secteurs agricoles clés",
        "• Patterns de consommation d'eau",
        "• Défis climatiques et environnementaux",
        "• Adéquation technologique",
        "• Études de cas et opportunités",
        "• Environnement réglementaire",
        "• Partenariats et collaboration"
    ])

    # Slide 3: Country Overview
    print("Adding slide 3: Country overview")
    add_content_slide(prs, "Aperçu du pays", [
        "• Population: ~11,4 millions d'habitants",
        "• PIB par habitant: ~$1,800 (2025)",
        "• Agriculture: 20-22% du PIB, 40% de la main-d'œuvre",
        "• Localisation: Île d'Hispaniola, Caraïbes",
        "• Capitale: Port-au-Prince",
        "• Climat: Tropical, zone cyclonique active",
        "• Terrain: Montagneuses (75% de relief montagneux)",
        "• Langue officielle: Français; Créole haïtien (dominant)"
    ], image_url="https://commons.wikimedia.org/wiki/File:Haiti_on_the_globe_%28Americas_centered%29.svg")

    # Slide 4: Agricultural Sectors
    print("Adding slide 4: Agricultural sectors")
    add_content_slide(prs, "Secteurs agricoles clés", [
        "• Cacao: Culture traditionnelle, qualité réputée (20,000+ t/an)",
        "• Café: Café arabica de montagne, valeur exports élevée",
        "• Sucre: Industrie historique, 12,000+ hectares",
        "• Banane: Fruits tropicaux, marché régional",
        "• Riz et cultures vivrières: Maïs, haricots, manioc",
        "• Aviculture et élevage: Secteur en croissance",
        "• Fruits tropicaux: Mangue, avocat, ananas",
        "• Potentiel: Culture biologique et agriculture durable"
    ])

    # Slide 5: Water Stress and Usage
    print("Adding slide 5: Water stress and usage")
    add_content_slide(prs, "Stress hydrique et patterns de consommation", [
        "• Précipitations: 1,400-2,000 mm/an (très variable)",
        "• Sécheresses saisonnières: Juin-novembre (saison sèche)",
        "• Déforestation: 60% de perte depuis 1923 (2% restant)",
        "• Érosion des sols: 40-50 tonnes/hectare/an",
        "• Ressources en eau: Limitées, inégalement distribuées",
        "• Irrigation: 15-20% des terres arables seulement",
        "• Accès à l'eau potable: 50-60% en zones rurales",
        "• Besoin urgent: Gestion durable et efficacité hydrique"
    ])

    # Slide 6: Climate Challenges
    print("Adding slide 6: Climate challenges")
    add_content_slide(prs, "Défis climatiques et contraintes", [
        "• Cyclones/Typhons: 1-2 par an en moyenne",
        "• Risque sismique: Zone de faille tectonique active",
        "• Variabilité climatique: El Niño/La Niña impacts",
        "• Dégradation environnementale: Soil loss, déforestation",
        "• Température: 20-28°C annuels, hausse progressive",
        "• Inondations: Pluies extrêmes, drainage insuffisant",
        "• Salinisation côtière: Zones basses affectées",
        "• Adaptation nécessaire: Cultures résilientes, technologie"
    ])

    # Slide 7: Technology Fit - Water Management
    print("Adding slide 7: Technology fit - Water management")
    add_content_slide(prs, "Adéquation technologique - Gestion de l'eau", [
        "• Goutte-à-goutte: Économie eau 30-50%, compatible petit/moyen",
        "• Système d'irrigation au sol: Faible coût d'investissement",
        "• Collecte d'eau de pluie: Critique en saison sèche",
        "• Puits et forages: Infrastructure distributive",
        "• Mulch et couvertures: Réduction évaporation naturelle",
        "• Bassins de rétention: Gestion saisonnière",
        "• Monitoring capteurs: Gestion précise (adoption croissante)",
        "• Compost/matière organique: Retention hydrique du sol"
    ])

    # Slide 8: Technology Fit - Agriculture
    print("Adding slide 8: Technology fit - Agriculture")
    add_content_slide(prs, "Adéquation technologique - Agriculture durable", [
        "• Agrivoltaïsme: Arboriculture + cultures associées",
        "• Culture de conservation: Réduction labour, couverture",
        "• Rotation de cultures: Régénération sols, lutte parasites",
        "• Compostage décentralisé: Engrais naturel, réduction coûts",
        "• Semences améliorées: Variétés résistantes stress",
        "• Formation et extension: Services conseils agricoles",
        "• Coopératives: Accès intrants, marché",
        "• Technologie mobile: Information prix, météo, conseils"
    ])

    # Slide 9: Case Study 1 - Cacao Revival
    print("Adding slide 9: Case study 1 - Cacao revival")
    add_content_slide(prs, "Étude de cas 1: Renaissance du cacao haïtien", [
        "• Contexte: Haïti produisait 30,000 t cacao/an en 1920",
        "• Production actuelle: 8,000-10,000 t/an (2024)",
        "• Qualité: Cacao haïtien reconnue mondialement (Arriba genetics)",
        "• Prix: Prime 15-25% vs cacao standard",
        "• Défis: Vieillissement vergers (40+ ans), parasites",
        "• Solution: Agroforesterie, intrants biologiques",
        "• Opportunité: Export organique, commerce équitable",
        "• Impact: 50,000+ familles dépendantes de cette culture"
    ])

    # Slide 10: Case Study 2 - Coffee Terroirs
    print("Adding slide 10: Case study 2 - Coffee terroirs")
    add_content_slide(prs, "Étude de cas 2: Cafés de terroirs des montagnes", [
        "• Production: 30,000-45,000 sacs (60kg) annuels",
        "• Terroirs: Montagnes Massif de la Selle, altitude 1,000-1,500m",
        "• Qualité: Café arabica réputé, notes fruit sec distinctes",
        "• Commerce: 70% en exportation directe, prix premium",
        "• Chaîne: 150,000+ petits producteurs, coopératives actives",
        "• Challenge: Rendements bas (800-1,200 kg/ha vs 1,500-2,000 potentiel)",
        "• Innovation: Ombrage, compostage, pépinières communales",
        "• Marché: Demande forte niche (specialty coffee), prix stables"
    ])

    # Slide 11: Case Study 3 - Integrated Farming
    print("Adding slide 11: Case study 3 - Integrated farming system")
    add_content_slide(prs, "Étude de cas 3: Système d'agriculture intégrée", [
        "• Modèle: Petites exploitations (0,5-2 hectares dominant)",
        "• Cultures associées: Cacao-banane, café-plátano combinaisons",
        "• Élevage: Volaille, caprins intégrés pour engrais, protéines",
        "• Eau: Micro-irrigation goutte-à-goutte en expansion",
        "• Résultat: Rendements +40-60%, résilience climat améliorée",
        "• Revenu: Diversification réduit risque volatilité prix",
        "• Adoption: Villages de 100+ familles formées (2023-2025)",
        "• Durabilité: Coût investissement $200-500/hectare, ROI 18-24 mois"
    ])

    # Slide 12: Regulatory Environment
    print("Adding slide 12: Regulatory environment")
    add_content_slide(prs, "Environnement réglementaire", [
        "• Politique agricole: Plan décennal développement secteur",
        "• Tarifs: Protections limitées, intégration commerce régional (CARICOM)",
        "• Certification: Normes organiques croissantes (ISO 14001, Rainforest Alliance)",
        "• Eau: Ministère ressources hydrauliques, permis concession",
        "• Environnement: Interdiction déboisement (lois 2010+, application variable)",
        "• Terrains: Titrage foncier en progrès (30% seulement formalisés)",
        "• Crédit agricole: Banque agricole, microfinance, taux 12-18% annuels",
        "• Douanes: Soutien secteur export (exemptions intrants)"
    ])

    # Slide 13: Partnership Opportunities
    print("Adding slide 13: Partnership opportunities")
    add_content_slide(prs, "Opportunités de partenariat", [
        "• ONG agricoles: AGFONDHE, Finca, pAct actives; besoin financement",
        "• Coopératives: 200+ coopératives cacaoyers, caféiers; renforcement kapital",
        "• Universités: UEH, FAMV; recherche agronome, innovation variétés",
        "• Gouvernement: Direction agriculture; politique, facilitation",
        "• Secteur privé: Exportateurs, transformateurs (chocolat local émergent)",
        "• Financeurs: Banque mondiale, BID; fonds climat disponibles",
        "• Technologie: Entreprises agritech; adaptation solutions contexte",
        "• Commerce: Buyer directs cacao, café; contrats long-terme opportuns"
    ])

    # Slide 14: Closing - Opportunities
    print("Adding slide 14: Closing slide")
    add_title_slide(prs, "Opportunités de croissance", "Haiti: From agriculture subsistence\nvers agribusiness durable et prospère")

    # Save presentation
    print(f"Saving PPTX: {OUTPUT_PPTX}")
    prs.save(OUTPUT_PPTX)
    print(f"[SUCCESS] PPTX created successfully: {OUTPUT_PPTX}")

    return OUTPUT_PPTX

def convert_pptx_to_pdf(pptx_path, pdf_path):
    """Convert PPTX to PDF using LibreOffice."""
    try:
        # Check if LibreOffice is available
        result = subprocess.run(
            ["libreoffice", "--headless", "--convert-to", "pdf", "--outdir",
             os.path.dirname(pdf_path), pptx_path],
            capture_output=True,
            text=True,
            timeout=60
        )

        if result.returncode == 0:
            print(f"[SUCCESS] PDF conversion successful: {pdf_path}")
            return pdf_path
        else:
            print(f"LibreOffice conversion failed: {result.stderr}")
            return None
    except FileNotFoundError:
        print("LibreOffice not found. Trying alternative method...")
        try:
            # Try using unoconv
            result = subprocess.run(
                ["unoconv", "-f", "pdf", "-o", pdf_path, pptx_path],
                capture_output=True,
                text=True,
                timeout=60
            )
            if result.returncode == 0:
                print(f"[SUCCESS] PDF conversion successful: {pdf_path}")
                return pdf_path
        except FileNotFoundError:
            print("Neither LibreOffice nor unoconv found. Installing dependencies...")
            # This would require actual installation on the system
            pass
    return None

def main():
    """Main function."""
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Create PPTX
    pptx_path = create_presentation()

    if pptx_path and os.path.exists(pptx_path):
        file_size_mb = os.path.getsize(pptx_path) / (1024 * 1024)
        print(f"\n[SUCCESS] Haiti dossier PPTX created")
        print(f"  File size: {file_size_mb:.2f} MB")
        print(f"  Location: {pptx_path}")

        # Try to convert to PDF
        print("\nAttempting PDF conversion...")
        pdf_path = convert_pptx_to_pdf(pptx_path, OUTPUT_PDF)

        if pdf_path and os.path.exists(pdf_path):
            pdf_size_mb = os.path.getsize(pdf_path) / (1024 * 1024)
            print(f"\n[SUCCESS] Haiti dossier PDF created successfully!")
            print(f"  File size: {pdf_size_mb:.2f} MB")
            print(f"  Location: {OUTPUT_PDF}")
            return 0
        else:
            print(f"\nPDF conversion not available on this system.")
            print(f"PPTX file is ready at: {pptx_path}")
            print(f"Please convert using: libreoffice --headless --convert-to pdf {pptx_path}")
            return 1
    else:
        print("Error: Failed to create PPTX")
        return 1

if __name__ == "__main__":
    sys.exit(main())
