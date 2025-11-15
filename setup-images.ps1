# Script PowerShell para copiar imágenes del proyecto React al sitio estático
# Uso: .\setup-images.ps1

Write-Host "🖼️  COPIAR IMÁGENES DEL PROYECTO REACT" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Crear carpeta si no existe
if (!(Test-Path "static-site/images")) {
    Write-Host "📁 Creando carpeta static-site/images..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path "static-site/images" -Force | Out-Null
    Write-Host "✅ Carpeta creada" -ForegroundColor Green
} else {
    Write-Host "✅ Carpeta static-site/images ya existe" -ForegroundColor Green
}

Write-Host ""

# Copiar archivos si src/assets existe
if (Test-Path "src/assets") {
    Write-Host "✅ Encontrada carpeta src/assets/" -ForegroundColor Green
    Write-Host "📋 Copiando imágenes..." -ForegroundColor Yellow
    
    $imageTypes = @("*.jpg", "*.jpeg", "*.png", "*.webp", "*.gif")
    $copied = 0
    
    foreach ($pattern in $imageTypes) {
        $files = Get-ChildItem "src/assets/$pattern" -ErrorAction SilentlyContinue
        foreach ($file in $files) {
            Copy-Item $file.FullName "static-site/images/" -Force
            Write-Host "  ✓ Copiado: $($file.Name)" -ForegroundColor Green
            $copied++
        }
    }
    
    if ($copied -gt 0) {
        Write-Host ""
        Write-Host "✅ $copied imagen(es) copiada(s) exitosamente" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "⚠️  No se encontraron imágenes en src/assets/" -ForegroundColor Yellow
    }
} else {
    Write-Host "⚠️  No se encontró carpeta src/assets/" -ForegroundColor Yellow
    Write-Host "   Por favor, copia manualmente tus imágenes a static-site/images/" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📋 Archivos esperados en static-site/images/:" -ForegroundColor Cyan
Write-Host "   - hero-image.jpg"
Write-Host "   - gallery-1.jpg"
Write-Host "   - gallery-2.jpg"
Write-Host "   - gallery-3.jpg"
Write-Host "   - gallery-4.jpg"
Write-Host "   - gallery-5.jpg"
Write-Host "   - gallery-6.jpg"
Write-Host "   - proxima-sede.jpg"

Write-Host ""
Write-Host "📂 Archivos actuales en static-site/images/:" -ForegroundColor Cyan

$files = Get-ChildItem "static-site/images" -ErrorAction SilentlyContinue
if ($files) {
    foreach ($file in $files) {
        $size = "{0:N2} MB" -f ($file.Length / 1MB)
        Write-Host "   ✓ $($file.Name) ($size)" -ForegroundColor Green
    }
} else {
    Write-Host "   (carpeta vacía - agrega imágenes)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "✨ ¡Listo! Ahora puedes probar localmente:" -ForegroundColor Cyan
Write-Host "   cd static-site"
Write-Host "   python -m http.server 8000"
Write-Host ""
Write-Host "   Luego abre en el navegador: http://localhost:8000"
