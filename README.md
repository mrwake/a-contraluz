# A contraluz

Un blog de entrevistas estático hecho con Astro. Las entrevistas y sus metadatos viven en archivos Markdown; no hay base de datos, CMS ni servidor que mantener. El diseño convierte las imágenes a blanco y negro en el navegador y usa un fondo oscuro de inspiración editorial. Los retratos de muestra son ilustraciones SVG originales, no fotografías de personas reales.

## Empezar en tu ordenador

Necesitas Node.js LTS instalado. En la carpeta del proyecto:

```sh
npm install
npm run dev
```

Abre la dirección local que muestre Astro (normalmente `http://localhost:4321`). Para comprobar los tipos y el contenido, ejecuta `npm run check`; para generar el sitio listo para publicar, ejecuta `npm run build`. El resultado queda en `dist/`.

En Windows PowerShell, si la política del equipo bloquea `npm.ps1`, usa `npm.cmd install`, `npm.cmd run dev`, `npm.cmd run check` y `npm.cmd run build`, o abre una terminal de Símbolo del sistema.

## Publicar una entrevista

1. Duplica `src/content/interviews/primer-encuentro.md` y cambia el nombre, por ejemplo `mi-entrevista.md`.
2. Completa el título, la descripción, la fecha, la persona entrevistada y el texto. Cada pregunta es un encabezado `##` y cada respuesta, uno o varios párrafos.
3. Pon tu foto en blanco y negro dentro de `public/images/` y actualiza `cover` y `coverAlt` en el bloque inicial. Puedes subir una foto en color: el sitio aplica blanco y negro automáticamente.
4. Si vas a incluir un vídeo o un pódcast, cambia `format` a `vídeo` o `pódcast`, guarda el archivo de audio o vídeo en `public/media/` y añade un reproductor HTML `<video controls>` o `<audio controls>` al contenido. Consulta las entradas de ejemplo para ver el formato, las transcripciones y el crédito del vídeo.
5. Guarda el archivo. En desarrollo la página se actualiza sola. Cambia `draft: true` si quieres ocultar temporalmente una entrevista.

La entrada de vídeo es ficticia y utiliza un clip de flores con licencia CC0. El ejemplo de pódcast incluye un guion ficticio y una narración sintética; no es una grabación real.

Las entrevistas y los retratos ficticios incluidos son demostraciones; cada entrevista indica si es ficticia. La entrevista de Fernando incluye una fotografía real: confirma que tienes autorización para compartirla antes de publicar el sitio. Usa fotografías que tengas permiso para publicar, especialmente las de menores, y escribe un texto alternativo que describa la imagen.

## Publicar gratis con GitHub Pages

El flujo `.github/workflows/deploy-pages.yml` compila Astro y publica `dist/` en GitHub Pages cuando subes cambios a `main`. En los despliegues, Astro ajusta las rutas para el subdirectorio del repositorio; localmente, el sitio conserva las rutas normales.

1. En GitHub, abre **Settings → Pages** del repositorio `mrwake/a-contraluz`.
2. En **Build and deployment**, selecciona **GitHub Actions** como fuente.
3. En **Settings → Actions → General**, permite las acciones necesarias para compilar y publicar Pages.
4. Sube un cambio a `main` o ejecuta manualmente **Actions → Deploy Astro to GitHub Pages → Run workflow**.
5. Espera a que la acción termine correctamente. La dirección del sitio será `https://mrwake.github.io/a-contraluz/`.

GitHub Pages tiene límites de uso y, con GitHub Free, el repositorio de publicación debe ser público. Consulta las [condiciones y límites oficiales](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits). Un dominio propio se puede conectar más adelante desde **Settings → Pages**.

## Alojamiento alternativo en Netlify

El proyecto conserva `netlify.toml` por si prefieres seguir usando Netlify. El comando de compilación es `npm run build` y la carpeta de salida, `dist`.

Las entrevistas ficticias de ejemplo están identificadas como tales; reemplázalas antes de presentar el blog como un archivo de entrevistas reales.

## Dominio propio

El sitio se genera como archivos estáticos: no necesita base de datos ni backend. Cuando compres un dominio, podrás añadirlo desde **Settings → Pages** en GitHub y seguir las instrucciones para configurar los registros DNS. Los precios y límites pueden cambiar; revisa las condiciones vigentes antes de elegir.

## Mantenimiento

Para el uso diario, basta con añadir Markdown y fotos. Para actualizar Astro y sus dependencias, revisa los cambios, actualiza con `npm update` y comprueba `npm run check` y `npm run build` antes de publicar. Guarda una copia de seguridad del repositorio y de las fotos originales.
