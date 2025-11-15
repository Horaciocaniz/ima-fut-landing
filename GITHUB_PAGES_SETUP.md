# 📋 Guía Completa: Desplegar en GitHub Pages

## ✅ Tu sitio ha sido convertido exitosamente

Tu proyecto está 100% listo para GitHub Pages. Aquí está todo lo que necesitas hacer:

## 🚀 Paso 1: Preparar tu repositorio

### Opción A: Usar directamente (recomendado)

```bash
# 1. Entra al directorio de tu proyecto
cd /path/to/ima-fut-landing

# 2. Copia los archivos estáticos a la raíz
cp -r static-site/* .

# 3. O si prefieres una carpeta docs/:
mkdir -p docs
cp -r static-site/* docs/
```

### Opción B: Mantener separado (también funciona)

```bash
# Simplemente mantén los archivos en static-site/
# Actualizaremos la configuración de GitHub Pages para que use esa carpeta
```

## 📤 Paso 2: Subir a GitHub

```bash
# Si aún no tienes git inicializado
git init
git add .
git commit -m "feat: convertir a sitio estático para GitHub Pages"
git remote add origin https://github.com/tu-usuario/ima-fut-landing.git
git branch -M main
git push -u origin main
```

Si ya tenías repositorio:
```bash
git add .
git commit -m "feat: convertir a sitio estático para GitHub Pages"
git push origin main
```

## ⚙️ Paso 3: Configurar GitHub Pages

### Opción A: Usar archivos en la raíz

1. Ve a tu repositorio en GitHub
2. Abre **Settings** → **Pages**
3. En **Source**, selecciona:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Haz clic en **Save**

Tu sitio estará en: `https://tu-usuario.github.io/ima-fut-landing/`

### Opción B: Usar carpeta `/docs`

1. Ve a tu repositorio en GitHub
2. Abre **Settings** → **Pages**
3. En **Source**, selecciona:
   - **Branch:** `main`
   - **Folder:** `/docs`
4. Haz clic en **Save**

Tu sitio estará en: `https://tu-usuario.github.io/ima-fut-landing/`

### Opción C: Usar rama `gh-pages` (automático con workflow)

El archivo `.github/workflows/deploy.yml` ya está configurado. Solo asegúrate de que el workflow se ejecute:

1. Ve a **Actions** en tu repositorio
2. Verifica que el workflow `Deploy to GitHub Pages` se ejecutó
3. Espera 1-2 minutos
4. Tu sitio estará en: `https://tu-usuario.github.io/ima-fut-landing/`

## ✨ Paso 4: Verificar que funciona

Una vez configurado (espera 1-5 minutos):

```bash
# Verifica que tu sitio esté en vivo
curl https://tu-usuario.github.io/ima-fut-landing/
```

O simplemente abre el navegador y ve a tu URL.

## 📝 Estructura de archivos esperada

```
ima-fut-landing/
├── static-site/               # Tu carpeta de sitio estático
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── images/
│   │   ├── hero-image.jpg
│   │   ├── gallery-1.jpg
│   │   ├── ...
│   │   └── proxima-sede.jpg
│   ├── README.md
│   ├── MIGRACION.md
│   └── .gitkeep (si la carpeta está vacía)
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── .gitignore
├── README.md
└── ... (otros archivos del proyecto)
```

## 🎨 Personalizar tu sitio

### 1. Cambiar números (jugadores, años, etc.)

Edita `static-site/index.html`:

```html
<!-- Busca esto -->
<div class="stat-number">500+</div>

<!-- Y cámbialo a -->
<div class="stat-number">1000+</div>
```

### 2. Cambiar número de WhatsApp

En `static-site/index.html`, reemplaza todos los:
```html
https://wa.me/1234567890
```

Con tu número (ej: `https://wa.me/5216131234567`):

```bash
# En terminal (macOS/Linux):
sed -i 's/1234567890/5216131234567/g' static-site/index.html

# O edita manualmente en el editor
```

### 3. Cambiar colores de marca

En `static-site/styles.css`:

```css
:root {
  --color-primary: 221, 83%, 15%;      /* Azul oscuro - CAMBIAR AQUÍ */
  --color-secondary: 221, 83%, 53%;    /* Azul claro - CAMBIAR AQUÍ */
  --color-accent: 221, 83%, 53%;       /* Acento - CAMBIAR AQUÍ */
}
```

Usa valores HSL (Hue, Saturation, Lightness):
- Hue: 0-360
- Saturation: 0-100%
- Lightness: 0-100%

Generador: https://www.hsluv.org/

### 4. Cambiar imágenes

```bash
# 1. Descarga tus imágenes
# 2. Colócalas en static-site/images/
# 3. Edita las referencias en index.html

<!-- Busca estas líneas y actualiza -->
<img src="./images/hero-image.jpg" alt="..." />
<img src="./images/gallery-1.jpg" alt="..." />
```

## 🔄 Actualizar contenido

Cada vez que hagas cambios:

```bash
# 1. Edita los archivos en static-site/
# 2. Confirma los cambios
git add .
git commit -m "Actualizar contenido"
git push origin main

# 3. Tu sitio se actualizará en 1-2 minutos
```

## 📱 Verificar que se ve bien en mobile

```bash
# En terminal:
cd static-site

# Con Python:
python -m http.server 8000

# Con PHP:
php -S localhost:8000

# Luego abre en el navegador:
http://localhost:8000
```

Abre desde tu teléfono: `http://[tu-ip]:8000` (reemplaza con tu IP local)

## 🐛 Solucionar problemas

### Las imágenes no cargan en GitHub Pages

**Problema:** `404 - Imágenes no encontradas`

**Solución:**
```bash
# Verifica que las imágenes estén incluidas en git
git add static-site/images/*
git commit -m "Agregar imágenes"
git push origin main
```

### El sitio está en blank/blanco

**Problema:** La página no carga contenido

**Solución:**
1. Abre DevTools (F12)
2. Verifica que no haya errores en Console
3. Comprueba que `index.html`, `styles.css` y `script.js` existan
4. Verifica los paths de las imágenes

### HTTPS no funciona

**Problema:** "Esta conexión no es segura"

**Solución:**
GitHub Pages siempre es HTTPS automáticamente. Si ves advertencia:
- Limpia el cache: Ctrl+Shift+R
- Espera 5 minutos (puede tardar)

### El sitio funciona local pero no en GitHub Pages

**Problema:** Rutas relativas no funcionan

**Solución:**
En `index.html`, asegúrate de usar rutas relativas:
```html
<!-- ✅ Correcto -->
<link rel="stylesheet" href="styles.css" />
<script src="script.js"></script>
<img src="./images/hero-image.jpg" />

<!-- ❌ Incorrecto -->
<link rel="stylesheet" href="/styles.css" />
<script src="/script.js"></script>
```

## 📊 Agregar Analytics (opcional)

### Google Analytics

```html
<!-- Agrega esto en el <head> de index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
```

Reemplaza `G-XXXXXXXX` con tu ID de Google Analytics.

## 🔐 Dominio personalizado (opcional)

Si quieres `imafut.com` en lugar de `usuario.github.io/ima-fut-landing/`:

1. Compra un dominio (Namecheap, GoDaddy, etc.)
2. En GitHub: **Settings** → **Pages** → **Custom domain**
3. Ingresa: `imafut.com`
4. En tu registrador DNS, configura:
   ```
   CNAME imafut.com -> tu-usuario.github.io
   ```

## ✅ Checklist Final

- [ ] Archivos en `static-site/` o copiados a raíz
- [ ] Imágenes en la carpeta `images/`
- [ ] GitHub Pages configurado (Settings → Pages)
- [ ] Push a `main` branch completado
- [ ] Workflow `.github/workflows/deploy.yml` ejecutándose
- [ ] Sitio accesible en `https://usuario.github.io/ima-fut-landing/`
- [ ] Contenido personalizado (números, teléfono, colores)
- [ ] Imágenes cargan correctamente
- [ ] Se ve bien en mobile (probado)

## 🚀 ¡Listo!

Tu sitio estático está completamente funcional en GitHub Pages.

### Diferencias clave de esta versión:

| Antes | Ahora |
|-------|-------|
| React + TypeScript | HTML puro |
| Vite build process | Sin build (arquivos estáticos) |
| ~50KB+ (con deps) | ~15KB total |
| Require Node.js para local dev | No requiere nada (abrir HTML) |
| Complejo en GitHub Pages | Funcionando directamente |

### Ventajas:
✅ Más rápido
✅ Más simple
✅ Fácil de mantener
✅ Perfecto para landing page
✅ 100% compatible GitHub Pages

¿Preguntas? Revisa los archivos en `static-site/`:
- `README.md` - Documentación general
- `MIGRACION.md` - Detalles técnicos de conversión
- `index.html` - Edita contenido aquí
- `styles.css` - Edita estilos aquí
- `script.js` - Edita interactividad aquí

¡Bienvenido a la simplicidad! 🎉
