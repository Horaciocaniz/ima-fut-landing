#!/usr/bin/env node
/**
 * Script de verificación para el sitio estático IMAFUT
 * Uso: node verify-setup.js
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_FILES = [
  'static-site/index.html',
  'static-site/styles.css',
  'static-site/script.js',
  '.github/workflows/deploy.yml'
];

const RECOMMENDED_IMAGES = [
  'hero-image.jpg',
  'gallery-1.jpg',
  'gallery-2.jpg',
  'gallery-3.jpg',
  'gallery-4.jpg',
  'gallery-5.jpg',
  'gallery-6.jpg',
  'proxima-sede.jpg'
];

const DOCUMENTATION = [
  'GITHUB_PAGES_SETUP.md',
  'LOCAL_TESTING.md',
  'CONVERSION_COMPLETE.md',
  'QUICK_START.md'
];

console.log('\n🔍 VERIFICANDO CONFIGURACIÓN DEL SITIO ESTÁTICO IMAFUT\n');
console.log('═══════════════════════════════════════════════════════════\n');

let allGood = true;

// Verificar archivos requeridos
console.log('📋 Archivos principales requeridos:');
REQUIRED_FILES.forEach(file => {
  const exists = fs.existsSync(file);
  const status = exists ? '✅' : '❌';
  console.log(`   ${status} ${file}`);
  if (!exists) allGood = false;
});

console.log('\n');

// Verificar imágenes
console.log('🖼️  Imágenes esperadas en static-site/images/:');
const imagesDir = 'static-site/images';
if (fs.existsSync(imagesDir)) {
  const files = fs.readdirSync(imagesDir);
  if (files.length === 0) {
    console.log('   ⚠️  La carpeta está vacía - agrega tus imágenes');
  } else {
    files.forEach(file => {
      console.log(`   ✅ ${file}`);
    });
  }
} else {
  console.log('   ⚠️  Carpeta no encontrada - crea: static-site/images/');
  allGood = false;
}

console.log('\n');

// Verificar documentación
console.log('📚 Documentación disponible:');
DOCUMENTATION.forEach(file => {
  const exists = fs.existsSync(file);
  const status = exists ? '✅' : '⚠️ ';
  console.log(`   ${status} ${file}`);
});

console.log('\n');

// Verificar tamaño de archivos
console.log('📊 Tamaño de archivos:');
try {
  const htmlSize = fs.statSync('static-site/index.html').size / 1024;
  const cssSize = fs.statSync('static-site/styles.css').size / 1024;
  const jsSize = fs.statSync('static-site/script.js').size / 1024;
  
  console.log(`   index.html: ${htmlSize.toFixed(2)} KB`);
  console.log(`   styles.css: ${cssSize.toFixed(2)} KB`);
  console.log(`   script.js: ${jsSize.toFixed(2)} KB`);
  console.log(`   TOTAL: ${(htmlSize + cssSize + jsSize).toFixed(2)} KB (excelente para GitHub Pages)`);
} catch (e) {
  console.log('   ⚠️  No se pudo calcular tamaño');
}

console.log('\n');

// Resultado final
console.log('═══════════════════════════════════════════════════════════\n');

if (allGood && fs.existsSync(imagesDir) && fs.readdirSync(imagesDir).length > 0) {
  console.log('✅ ¡TODO ESTÁ LISTO PARA GITHUB PAGES!\n');
  console.log('   Próximos pasos:');
  console.log('   1. git add .');
  console.log('   2. git commit -m "Sitio estático para GitHub Pages"');
  console.log('   3. git push origin main');
  console.log('   4. Activa GitHub Pages en Settings');
  console.log('\n');
} else {
  console.log('⚠️  PASOS PENDIENTES:\n');
  
  if (!fs.existsSync(imagesDir) || fs.readdirSync(imagesDir).length === 0) {
    console.log('   1. Agrega tus imágenes a static-site/images/');
    console.log('      Puedes usar: ./setup-images.sh (macOS/Linux)');
    console.log('                   .\\setup-images.ps1 (Windows)\n');
  }
  
  REQUIRED_FILES.forEach(file => {
    if (!fs.existsSync(file)) {
      console.log(`   • Verifica que ${file} existe\n`);
    }
  });
  
  console.log('   Luego ejecuta:');
  console.log('   git add .');
  console.log('   git commit -m "Sitio estático para GitHub Pages"');
  console.log('   git push origin main\n');
}

console.log('📖 Para más información, lee:');
console.log('   • QUICK_START.md - Guía rápida en 5 pasos');
console.log('   • GITHUB_PAGES_SETUP.md - Guía completa');
console.log('   • LOCAL_TESTING.md - Cómo probar localmente\n');
