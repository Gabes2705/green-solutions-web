import shutil
import os

SRC = r"C:\Users\Utilisateur\OneDrive\Desktop\demo claude\Evergreen\Tests et rapports"
DST = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "documents", "field-tests")

MAPPING = {
    "palmiers-emirats-uae-icba-2021.pdf": "2021-11-29 ICBA - Evergreen final palm UAE Report_compressed.pdf",
    "pasteques-mexique-2023.pdf": "Essai sur culture de pastèques au Mexique (2023) EVER GREEN.pdf",
    "hydrogel-floride-klein-university.pdf": "EVER GREEN - Hydrogel Pilot Test - Klein University of Florida.pdf",
    "afrikelp-rapport-externe.pdf": "External AfriKelp EVER GREEN.pdf",
    "hydrogel-oregon-2025.pdf": "Hydrogel_2025 test OREGON USA.pdf",
    "hydrogel-golfe-persique-2026.pdf": "Hydrogel_Arabian golf Strategic_Briefing_2026.pdf",
    "mais-turquie-tigem.pdf": "Rapport  Maïs Turquie DIS Green Solutions.pdf",
    "canne-a-sucre-java-indonesie-2024.pdf": "Test canne à sucre Java Indonésie 2024 EVER GREEN.pdf",
    "soja-super-absorbant.pdf": "SUPER ABSORBENT EVERGREEN TEST  final 1 (Soybean - Soja).pdf",
    "pomme-de-terre-afrique-du-sud-2025.pdf": "Test pommes de terre Evergreen - Afrique du Sud..pdf",
    "coton-stress-hydrique-turquie.pdf": "Water stress trial on cotton crops in Turkey by Green Solutions.pdf",
}

os.makedirs(DST, exist_ok=True)

for slug, filename in MAPPING.items():
    src_path = os.path.join(SRC, filename)
    dst_path = os.path.join(DST, slug)
    shutil.copyfile(src_path, dst_path)
    print(f"{filename} -> {slug}")

print("done,", len(MAPPING), "files copied to", DST)
