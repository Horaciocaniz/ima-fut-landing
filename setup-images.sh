#!/bin/bash
# Script para copiar imágenes del proyecto React al sitio estático

echo "🖼️  COPIAR IMÁGENES DEL PROYECTO REACT"
echo "======================================"

# Crear carpeta si no existe
mkdir -p static-site/images

# Copiar archivos
echo "📁 Creando carpeta static-site/images..."

# Buscar y copiar archivos de imagen
if [ -d "src/assets" ]; then
    echo "✅ Encontrada carpeta src/assets/"
    cp -v src/assets/*.jpg static-site/images/ 2>/dev/null
    cp -v src/assets/*.png static-site/images/ 2>/dev/null
    cp -v src/assets/*.webp static-site/images/ 2>/dev/null
    echo "✅ Imágenes copiadas exitosamente"
else
    echo "⚠️  No se encontró src/assets/"
    echo "   Por favor, copia manualmente tus imágenes a static-site/images/"
fi

echo ""
echo "📋 Archivos esperados en static-site/images/:"
echo "   - hero-image.jpg"
echo "   - gallery-1.jpg"
echo "   - gallery-2.jpg"
echo "   - gallery-3.jpg"
echo "   - gallery-4.jpg"
echo "   - gallery-5.jpg"
echo "   - gallery-6.jpg"
echo "   - proxima-sede.jpg"

echo ""
echo "Verifica que todos los archivos estén presentes:"
ls -lh static-site/images/

echo ""
echo "✨ ¡Listo! Ahora puedes probar localmente:"
echo "   cd static-site"
echo "   python -m http.server 8000"
