$pptx = "C:\Users\Utilisateur\dev\green-solutions-web\scripts\usa-dossier\usa_dossier.pptx"
$pdf = "C:\Users\Utilisateur\dev\green-solutions-web\public\documents\countries\usa.pdf"

$objPPT = New-Object -ComObject PowerPoint.Application
$objPPT.Visible = $True

try {
    $objPresentation = $objPPT.Presentations.Open($pptx, 1, 1, 1)

    # 32 is the enum for PDF format
    $objPresentation.SaveAs($pdf, 32)

    Write-Host "PDF conversion completed successfully!"
    Write-Host "Output file: $pdf"

    $fileSize = (Get-Item $pdf).Length
    Write-Host "File size: $([math]::Round($fileSize/1MB, 2)) MB"

    $objPresentation.Close()
}
catch {
    Write-Host "Error during conversion: $_"
    exit 1
}
finally {
    $objPPT.Quit()
}
