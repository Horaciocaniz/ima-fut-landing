# 🎯 EMPEZAR AQUÍ - Primer Archivo a Leer

¡Hola! Tu proyecto **IMAFUT** ha sido convertido a un sitio estático completamente funcional para GitHub Pages.

---

## 🚀 En 25 Minutos Tendrás Tu Sitio en Vivo

### ¿Cómo?

Sigue estos **5 pasos simples**:

---

## Paso 1: Agregar Imágenes (2 minutos)

### Opción A: Automático (Recomendado)

**Windows (PowerShell):**
```powershell
.\setup-images.ps1
```

**macOS/Linux (Terminal):**
```bash
./setup-images.sh
```

### Opción B: Manual

1. Ve a `static-site/images/`
2. Copia tus imágenes desde `src/assets/` (o donde tengas tus archivos)
3. Los archivos que necesitas:
   - hero-image.jpg
   - gallery-1.jpg, gallery-2.jpg, gallery-3.jpg, gallery-4.jpg, gallery-5.jpg, gallery-6.jpg
   - proxima-sede.jpg

---

## Paso 2: Personalizar Contenido (5 minutos)

### Cambiar número de WhatsApp

1. Abre: `static-site/index.html`
2. Busca: `1234567890`
3. Reemplaza con: Tu número (ejemplo: `5216131234567`)

### Cambiar otros textos

En el mismo archivo, busca y cambia lo que necesites:
- Números (500+, 15, etc.)
- Nombres
- Descripciones
- URLs

### Cambiar colores (Opcional)

Si quieres cambiar los colores de marca:

1. Abre: `static-site/styles.css`
2. Busca: `:root {` (al inicio)
3. Cambia estos valores:
```css
--color-primary: 221, 83%, 15%;      /* Tu color azul → aquí */
--color-accent: 221, 83%, 53%;       /* Tu color acento → aquí */
```

**Generador de colores:** https://www.hsluv.org/

---

## Paso 3: Probar Localmente (2 minutos)

### Con Python (Lo más fácil)

```bash
cd static-site
python -m http.server 8000
```

Luego abre en tu navegador: **http://localhost:8000**

### Con VS Code (Aún más fácil)

1. Instala extensión "Live Server" (busca en extensions)
2. Click derecho en `static-site/index.html` → "Open with Live Server"
3. Se abre automáticamente

---

## Paso 4: Subir a GitHub (3 minutos)

```bash
git add .
git commit -m "feat: convertir a sitio estático para GitHub Pages"
git push origin main
```

---

## Paso 5: Activar GitHub Pages (1 minuto)

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings**
3. Busca **Pages** en el menú izquierdo
4. En **Source**, selecciona:
   - **Branch:** `main`
   - **Folder:** `/` (raíz) o `/static-site`
5. Haz clic en **Save**

✨ **¡Listo! Tu sitio estará en vivo en 1-5 minutos en:**
```
https://tu-usuario.github.io/ima-fut-landing/
```

---

## ⏱️ Resumen de Tiempo

| Paso | Tarea | Tiempo |
|------|-------|--------|
| 1 | Agregar imágenes | 2 min |
| 2 | Personalizar contenido | 5 min |
| 3 | Probar localmente | 2 min |
| 4 | Subir a GitHub | 3 min |
| 5 | Activar GitHub Pages | 1 min |
| | **TOTAL** | **~15 min** |
| | + esperar a que se publique | 1-5 min |

---

## 📊 ¿Qué Se Creo?

Tu proyecto convertido está en la carpeta **`static-site/`** con:

- ✅ **index.html** - Página completa (392 líneas)
- ✅ **styles.css** - Estilos responsivos (1200+ líneas)
- ✅ **script.js** - Interactividad (150+ líneas)
- ✅ **images/** - Tu carpeta de imágenes
- ✅ Documentación completa

**Total sin imágenes:** ~80 KB (súper rápido)

---

## 📚 Más Documentación

Si necesitas más detalles después:

- **[QUICK_START.md](./QUICK_START.md)** - Version expandida (con más detalles)
- **[GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)** - Guía completa del deployment
- **[LOCAL_TESTING.md](./LOCAL_TESTING.md)** - Formas de probar localmente
- **[INDEX.md](./INDEX.md)** - Índice maestro de toda la documentación

---

## 🎨 Características Que Ya Tiene

✅ Navbar responsivo con menú mobile
✅ Hero section bonito
✅ Sección "Sobre Nosotros"
✅ Galería de fotos
✅ Programas de entrenamiento
✅ Sección próxima sede
✅ Botón WhatsApp flotante
✅ Footer con contacto
✅ Animaciones suaves
✅ 100% responsive (móvil, tablet, desktop)

---

## ✅ Verificación Rápida

¿Todo está en su lugar?

```bash
# Ver estructura
ls static-site/
# Deberías ver: index.html, styles.css, script.js, images/, README.md, MIGRACION.md

# Verificar completo
node verify-setup.js
```

---

## 🆘 Si algo falla

### "Las imágenes no cargan"
→ Verifica que existan en `static-site/images/`
→ Comprueba los nombres sean exactos

### "El sitio se ve en blanco"
→ Abre DevTools (F12)
→ Ve a Console y busca errores rojos

### "GitHub Pages no actualiza"
→ Espera 1-5 minutos
→ Limpia cache: Ctrl+Shift+R (Windows) o Cmd+Shift+R (Mac)

---

## 🎉 ¡Eso es!

**En 25 minutos tienes tu sitio en GitHub Pages.**

### Ahora simplemente:
1. ✅ Sigue los 5 pasos
2. ✅ Espera 1-5 minutos
3. ✅ ¡Compartir URL con el mundo! 🚀

---

## 🔗 Tu URL será:

```
https://tu-usuario.github.io/ima-fut-landing/
```

(Reemplaza `tu-usuario` con tu usuario de GitHub)

---

## 📞 Cambios Futuros

Cada vez que cambies algo:

```bash
# 1. Edita los archivos en static-site/
# 2. Confirma cambios
git add .
git commit -m "Actualizar contenido"
git push origin main

# 3. Tu sitio se actualiza en 1-2 minutos automáticamente
```

---

## ✨ Ventajas de Esta Solución

- ✅ 100% Compatible GitHub Pages
- ✅ Sin dependencias (ni npm, ni Node.js)
- ✅ Súper rápido
- ✅ Fácil de mantener
- ✅ SEO optimizado
- ✅ Responsive en todas las pantallas

---

## ¿Listo?

**Comienza con el Paso 1: Agregar tus imágenes** 📸

¿Dudas? Lee **[QUICK_START.md](./QUICK_START.md)** para versión expandida.

---

**¡Bienvenido a la web estática! 🚀**

Tu sitio IMAFUT estará en vivo en menos de 30 minutos.
