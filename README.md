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
4. Guarda el archivo. En desarrollo la página se actualiza sola. Cambia `draft: true` si quieres ocultar temporalmente una entrevista.

Las entrevistas y los retratos ficticios incluidos son solo demostraciones; reemplázalos antes de publicar. Usa fotografías propias o que tengas permiso para publicar y escribe un texto alternativo que describa la imagen.

## Alojamiento en Netlify con GitHub

El proyecto ya incluye `netlify.toml` con el comando de compilación y la carpeta de salida. Para activar publicaciones automáticas:

1. Crea un repositorio en GitHub. Para empezar, puede ser privado; Netlify puede compilarlo sin hacerlo público.
2. Sube el contenido del proyecto al repositorio, pero no incluyas `node_modules/`, `dist/` ni `.astro/`; están excluidos por `.gitignore`.
3. En Netlify, elige **Add new project → Import an existing project** y conecta tu cuenta de GitHub.
4. Selecciona el repositorio y confirma estos ajustes si te los pide:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Pulsa **Deploy**. Netlify te dará una dirección temporal `*.netlify.app`. Cada cambio que subas a GitHub podrá generar un nuevo despliegue.

El repositorio privado protege el código de la vista pública, pero no convierte en privado el contenido del sitio desplegado: toda página publicada en una web pública puede verla cualquiera. Las entrevistas ficticias de ejemplo están identificadas como tales; reemplázalas antes de presentar el blog como un archivo de entrevistas reales.

## Dominio propio

El sitio se genera como archivos estáticos: no necesita base de datos ni backend. Cuando compres un dominio, podrás añadirlo desde la configuración del sitio en Netlify y seguir las instrucciones para los registros DNS. Los planes gratuitos y sus condiciones pueden cambiar; revisa límites, privacidad y uso comercial antes de elegir.

## Mantenimiento

Para el uso diario, basta con añadir Markdown y fotos. Para actualizar Astro y sus dependencias, revisa los cambios, actualiza con `npm update` y comprueba `npm run check` y `npm run build` antes de publicar. Guarda una copia de seguridad del repositorio y de las fotos originales.
