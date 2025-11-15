# 🚀 INICIO RÁPIDO - Próximos 5 Pasos

## 1️⃣ Copiar Imágenes (2 minutos)

### Windows (PowerShell)
```powershell
# Abre PowerShell en la carpeta del proyecto
.\setup-images.ps1

# O manualmente:
# Copia tus imágenes a: static-site/images/
```

### macOS/Linux (Bash)
```bash
./setup-images.sh

# O manualmente:
# cp src/assets/* static-site/images/
```

### Archivos que necesitas en `static-site/images/`:
- `hero-image.jpg`
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`, `gallery-4.jpg`, `gallery-5.jpg`, `gallery-6.jpg`
- `proxima-sede.jpg`

---

## 2️⃣ Personalizar Contenido (5 minutos)

Edita `static-site/index.html`:

### Cambiar número de WhatsApp
```bash
# Busca: 1234567890
# Reemplaza con: tu número (ej: 5216131234567)
```

### Cambiar textos
- Busca el texto en `index.html`
- Edita directamente

### Cambiar colores
En `static-site/styles.css`:
```css
:root {
  --color-primary: 221, 83%, 15%;    /* Tu color aquí */
  --color-accent: 221, 83%, 53%;
}
```

---

## 3️⃣ Probar Localmente (2 minutos)

### Con Python (recomendado)
```bash
cd static-site
python -m http.server 8000

# Abre: http://localhost:8000
```

### Con VS Code
1. Instala extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"

---

## 4️⃣ Subir a GitHub (5 minutos)

```bash
# Confirmar cambios
git add static-site/
git add .github/
git commit -m "feat: agregar sitio estático para GitHub Pages"

# Subir
git push origin main
```

---

## 5️⃣ Activar GitHub Pages (1 minuto)

En tu repositorio GitHub:
1. **Settings** → **Pages**
2. **Source**: `main` branch, `/root` (o `/static-site`)
3. **Save**

✨ **¡Tu sitio estará en vivo en 1-5 minutos!**

URL: `https://tu-usuario.github.io/ima-fut-landing/`

---

## 📞 Cambiar Teléfono Rápidamente

```bash
# En Windows (PowerShell):
(Get-Content static-site/index.html) -replace '1234567890', 'TU_NUMERO' | Set-Content static-site/index.html

# En macOS/Linux:
sed -i 's/1234567890/TU_NUMERO/g' static-site/index.html

# En Windows (Git Bash):
sed -i 's/1234567890/TU_NUMERO/g' static-site/index.html

# Reemplaza TU_NUMERO con tu número (sin guiones)
# Ejemplo: 5216131234567
```

---

## 🎨 Cambiar Colores Rápidamente

En `static-site/styles.css`, cambia la sección `:root`:

```css
:root {
  /* Colores en formato HSL (Hue, Saturation, Lightness) */
  
  --color-primary: 221, 83%, 15%;      /* Azul oscuro - CAMBIAR */
  --color-secondary: 221, 83%, 53%;    /* Azul claro - CAMBIAR */
  --color-accent: 221, 83%, 53%;       /* Acento - CAMBIAR */
}
```

**Generador de colores HSL:** https://www.hsluv.org/

---

## 🐛 Solucionar Problemas

### "Las imágenes no cargan"
```bash
# Verifica que existan
ls static-site/images/

# Agrega a git
git add static-site/images/
git commit -m "Agregar imágenes"
git push
```

### "El sitio se ve en blanco"
1. Abre DevTools (F12)
2. Busca errores en Console
3. Verifica que `index.html`, `styles.css` y `script.js` existan

### "GitHub Pages no actualiza"
```bash
# Espera 1-5 minutos
# Limpia cache del navegador: Ctrl+Shift+R
# Verifica que el push se completó: git status
```

---

## 📊 Árbol de Archivos

```
ima-fut-landing/
├── static-site/
│   ├── index.html          ✅ Listo
│   ├── styles.css          ✅ Listo
│   ├── script.js           ✅ Listo
│   ├── images/
│   │   ├── hero-image.jpg          👈 AGREGAR
│   │   ├── gallery-*.jpg           👈 AGREGAR
│   │   └── proxima-sede.jpg        👈 AGREGAR
│   ├── README.md           ✅ Listo
│   └── MIGRACION.md        ✅ Listo
│
├── .github/
│   └── workflows/
│       └── deploy.yml      ✅ Configurado
│
├── GITHUB_PAGES_SETUP.md   📖 Lee esto
├── LOCAL_TESTING.md        📖 O esto
├── CONVERSION_COMPLETE.md  📖 O esto
├── setup-images.sh         🔧 Ejecuta esto
├── setup-images.ps1        🔧 O esto (Windows)
└── ...
```

---

## ⚡ Resumen de Comandos

```bash
# 1. Copiar imágenes (elegir uno)
./setup-images.sh                              # macOS/Linux
.\setup-images.ps1                             # Windows

# 2. Probar localmente
cd static-site && python -m http.server 8000

# 3. Subir a GitHub
git add . && git commit -m "Cambios" && git push

# 4. Verificar que está en vivo (después de esperar 1-5 min)
curl https://tu-usuario.github.io/ima-fut-landing/
```

---

## ✅ Verificación Final

Antes de decir que está listo:

- [ ] Imágenes en `static-site/images/` ✓
- [ ] HTML, CSS, JS en `static-site/` ✓
- [ ] Contenido personalizado (teléfono, colores) ✓
- [ ] Probado localmente sin errores ✓
- [ ] Push a GitHub completado ✓
- [ ] GitHub Pages activado ✓
- [ ] Sitio accesible en la URL ✓
- [ ] Se ve bien en mobile ✓

---

## 🎉 ¡Listo!

Tu sitio **IMAFUT** está 100% listo para GitHub Pages.

¿Preguntas? Revisa:
- `GITHUB_PAGES_SETUP.md` - Guía completa
- `LOCAL_TESTING.md` - Cómo probar
- `static-site/README.md` - Documentación del sitio

**¡Bienvenido a la web estática! 🚀**
