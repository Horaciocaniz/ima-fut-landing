# 🧪 Servir Localmente para Pruebas

Antes de subir a GitHub, puedes probar tu sitio localmente.

## Opción 1: Abrir directamente (más simple)

```bash
# Simplemente abre el archivo en tu navegador
# Windows: Haz doble clic en static-site/index.html

# O desde terminal:
cd static-site
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

**Nota:** Este método funciona para la mayoría de casos, pero algunas características como CORS pueden no funcionar correctamente.

## Opción 2: Con Python (recomendado)

### Python 3 (ya instalado en macOS/Linux)

```bash
cd /path/to/ima-fut-landing/static-site

# Python 3
python -m http.server 8000

# Python 2 (antiguo)
python -m SimpleHTTPServer 8000

# Luego abre en el navegador:
# http://localhost:8000
```

### Windows PowerShell

```powershell
cd C:\Users\horac\Desktop\landingImafut\ima-fut-landing\static-site

# Python 3
python -m http.server 8000

# Luego abre en el navegador:
# http://localhost:8000
```

## Opción 3: Con Node.js (si está instalado)

```bash
cd /path/to/ima-fut-landing/static-site

# Instalar http-server globalmente (una sola vez)
npm install -g http-server

# Ejecutar
http-server

# O sin instalarlo globalmente
npx http-server

# Luego abre: http://localhost:8080
```

## Opción 4: Con PHP (si está instalado)

```bash
cd /path/to/ima-fut-landing/static-site
php -S localhost:8000

# Luego abre: http://localhost:8000
```

## Opción 5: Con VS Code

1. Instala la extensión "Live Server" (Ritwick Dey)
2. Click derecho en `index.html` → "Open with Live Server"
3. Se abrirá automáticamente en http://localhost:5500

## 📱 Probar en dispositivo móvil (local)

Después de iniciar el servidor:

```bash
# En tu computadora, obtén tu IP local
# Windows:
ipconfig

# macOS/Linux:
ifconfig

# Busca "IPv4 Address" (algo como 192.168.x.x)
# Luego en tu teléfono, abre el navegador:
# http://192.168.x.x:8000
```

**Ejemplo:**
- Tu IP local: `192.168.1.100`
- URL en móvil: `http://192.168.1.100:8000`

## 🔍 Verificar archivos estáticos

Después de iniciar el servidor, verifica que los archivos carguen correctamente:

```bash
# En otra terminal:
curl http://localhost:8000/
curl http://localhost:8000/styles.css
curl http://localhost:8000/script.js
curl http://localhost:8000/images/hero-image.jpg
```

## 🐛 Depuración

### DevTools (F12)

Abre el navegador con F12 y verifica:
- **Console** - Errores JavaScript
- **Network** - Recursos que no cargaron
- **Elements** - Estructura HTML

### Problemas comunes

**Las imágenes no cargan**
- Verifica que la carpeta `images/` existe
- Comprueba los nombres en DevTools → Network

**Los estilos no se ven**
- Limpia el cache: Ctrl+Shift+R (Windows) o Cmd+Shift+R (Mac)
- Verifica en DevTools → Network que CSS cargó

**JavaScript no funciona**
- Revisa DevTools → Console para errores
- Verifica que `script.js` esté en la misma carpeta

## 📊 Medir performance

### Chrome DevTools

1. Abre DevTools (F12)
2. Ve a **Lighthouse**
3. Haz clic en **Generate report**
4. Verifica:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

### Network tab

1. DevTools → Network
2. Recarga la página (F5)
3. Verifica:
   - Tamaño total de recursos
   - Tiempo de carga
   - Cualquier error (rojo = 404)

## ✅ Checklist antes de subir a GitHub

- [ ] Servidor local ejecutándose sin errores
- [ ] Todas las imágenes cargan correctamente
- [ ] Menú mobile funciona (prueba en mobile)
- [ ] Scroll suave funciona
- [ ] Links WhatsApp funcionan
- [ ] Página se ve bien en mobile
- [ ] DevTools Console sin errores rojos
- [ ] Lighthouse score > 90

## 🚀 Una vez verificado, sube a GitHub

```bash
git add .
git commit -m "feat: agregar sitio estático y GitHub Pages"
git push origin main

# Activa GitHub Pages en Settings
```

---

**Consejo:** Mantén un terminal abierto con `python -m http.server 8000` mientras desarrollas para ver cambios en tiempo real. 🚀
