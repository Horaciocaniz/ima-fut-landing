# IMAFUT - Landing Page Estática

Este es un sitio web estático (HTML, CSS, JavaScript vanilla) completamente compatible con GitHub Pages.

## Estructura del Proyecto

```
static-site/
├── index.html          # Página principal (HTML)
├── styles.css          # Estilos CSS (sin Tailwind)
├── script.js           # JavaScript vanilla
└── images/             # Carpeta de imágenes
    ├── hero-image.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    ├── gallery-5.jpg
    ├── gallery-6.jpg
    └── proxima-sede.jpg
```

## Características

✅ **Totalmente Estático** - Sin React, TypeScript o dependencias de Node.js
✅ **Compatible GitHub Pages** - Solo HTML, CSS y JavaScript vanilla
✅ **Responsive Design** - Adapta a desktop, tablet y mobile
✅ **Sin Build Process** - Sirve archivos estáticos directamente
✅ **Animaciones CSS** - Efectos fade-in y slide-up
✅ **Menu Mobile** - Funcional y interactivo
✅ **Scroll Suave** - Navegación entre secciones

## Secciones

1. **Navbar** - Menú fijo con logo y navegación
2. **Hero** - Sección principal con imagen de fondo
3. **About** - Información sobre IMAFUT
4. **Gallery** - Galería de imágenes responsiva
5. **Programs** - Programas de entrenamiento
6. **Próxima Sede** - Información de nueva ubicación
7. **Footer** - Información de contacto

## Deploying en GitHub Pages

### 1. Copia los archivos a tu repositorio

```bash
# Si es primera vez:
git clone https://github.com/tu-usuario/ima-fut-landing.git
cd ima-fut-landing

# Copia los archivos static-site/ a la raíz o a una carpeta `docs/`
cp -r static-site/* .
# O si prefieres en una carpeta docs/:
mkdir -p docs
cp -r static-site/* docs/
```

### 2. Sube a GitHub

```bash
git add .
git commit -m "Convertir a sitio estático"
git push origin main
```

### 3. Habilita GitHub Pages

1. Ve a **Settings** de tu repositorio
2. Busca **Pages**
3. En **Source**, selecciona:
   - `main` branch y `/root` (si copiaste a la raíz)
   - O `main` branch y `/docs` (si creaste carpeta docs)
4. Guarda

¡Tu sitio estará en: `https://tu-usuario.github.io/ima-fut-landing`

## Editar Contenido

### Cambiar números/textos en HTML

Abre `index.html` y busca el contenido que quieres cambiar:

```html
<!-- Ejemplo: Cambiar número de jugadores -->
<div class="stat-number">500+</div>
<p class="stat-label">JUGADORES</p>
```

### Cambiar teléfono de WhatsApp

Busca todos los `https://wa.me/1234567890` y reemplázalos:

```html
<!-- Antes -->
<a href="https://wa.me/1234567890">

<!-- Después (con tu número) -->
<a href="https://wa.me/5216131234567">
```

### Cambiar colores

En `styles.css`, modifica las variables CSS:

```css
:root {
  --color-primary: 221, 83%, 15%;      /* Azul -->tu color */
  --color-accent: 221, 83%, 53%;       /* Azul claro -->tu color */
  --fg-primary: 0, 0%, 0%;             /* Negro -->tu color */
}
```

### Agregar/Cambiar imágenes

1. Coloca las imágenes en la carpeta `images/`
2. Actualiza las referencias en `index.html`:

```html
<!-- Antes -->
<img src="./images/gallery-1.jpg" alt="Entrenamiento IMAFUT" />

<!-- Después -->
<img src="./images/tu-imagen.jpg" alt="Tu descripción" />
```

## Personalización Avanzada

### Agregar nuevas secciones

```html
<!-- En index.html, dentro del <body> -->
<section id="nueva-seccion" class="nueva-seccion">
  <div class="container">
    <!-- Tu contenido -->
  </div>
</section>
```

### Agregar estilos para nueva sección

```css
/* En styles.css */
.nueva-seccion {
  padding: 5rem 0;
  background-color: white;
}

@media (min-width: 768px) {
  .nueva-seccion {
    padding: 8rem 0;
  }
}
```

## Datos de Contacto

Para cambiar la información de contacto, edita en `index.html`:

```html
<!-- Footer -->
<p class="footer-text">info@imafut.com</p>
<p class="footer-text">+34 123 456 789</p>

<!-- O en la sección ubicación -->
<p class="footer-text">
  Campo de Fútbol<br />
  Ciudad, País
</p>
```

## Performance

- ✅ Sin dependencias externas pesadas
- ✅ Carga rápida (solo 3 archivos principales)
- ✅ Optimizado para mobile
- ✅ SEO friendly (HTML semántico)

## Navegadores Soportados

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers recientes

## Mejoras Futuras Opcionales

- [ ] Agregar formulario de contacto
- [ ] Analytics con Google Analytics
- [ ] Lightbox para galería
- [ ] Blog integrado
- [ ] Multi-idioma

## Soporte

Para cambios o mejoras, edita directamente los archivos HTML, CSS o JavaScript.

## Licencia

© 2024 IMAFUT. Todos los derechos reservados.
