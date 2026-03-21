# AGENT.MD

## Proyecto
Sitio web estatico de Vigarartattoo, estudio de tatuajes en Malaga.

Stack principal:
- Astro 5
- TypeScript
- Tailwind CSS v4 + `src/styles/global.css`
- Sitio bilingue: ES y EN
- Assets estaticos en `public/`

## Objetivo del sitio
- Mostrar portfolio visual con buena experiencia en movil
- Facilitar reservas por WhatsApp e Instagram
- Reforzar confianza con estudio, bio, reviews y ubicacion
- Mantener buen SEO local para Malaga

## Principios de trabajo
- Preservar la identidad visual existente salvo que se pida rediseño
- Priorizar claridad, rendimiento movil y accesibilidad
- Evitar cambios grandes de estructura si no aportan valor claro
- No duplicar logica si puede compartirse entre ES y EN
- Mantener el sitio completamente estatico salvo necesidad real
- Continuar aplicando mejoras razonables sin pedir permiso paso a paso
- Solo detenerse para preguntar cuando haya una eleccion importante sin una recomendacion clara o cuando falte un dato que no pueda inferirse

## Estructura importante
- Layout global: `src/layouts/BaseLayout.astro`
- Home ES: `src/pages/index.astro`
- Works ES: `src/pages/works.astro`
- Home EN: `src/pages/en/index.astro`
- Works EN: `src/pages/en/works.astro`
- Galeria/lightbox: `src/components/GalleryLightbox.astro`
- Datos portfolio: `src/data/portfolio.ts`
- Datos estudio: `src/data/studio.ts`
- Reviews ES/EN: `src/data/reviews.es.ts`, `src/data/reviews.en.ts`
- Estilos globales: `src/styles/global.css`
- Script de miniaturas: `scripts/make-thumbs.mjs`

## Convenciones de contenido
- Todo texto visible nuevo debe existir en ES y EN
- Si se anade una seccion a una pagina ES, revisar su equivalente EN
- Mantener tono cercano, profesional y artistico; evitar copy generico
- CTAs principales: WhatsApp, Instagram, ubicacion

## Convenciones de assets
- Las imagenes del portfolio viven en `public/images/portfolio/<categoria>/`
- Los thumbs viven en `public/images/portfolio/<categoria>/thumbs/`
- Las imagenes de estudio viven en `public/images/Studio/`
- Los thumbs de estudio viven en `public/images/Studio/thumbs/`
- Preferir usar `thumbSrc` para grid y `fullSrc` para lightbox
- No asumir rutas con regex si ya existen campos de datos dedicados

## SEO y metadatos
- Toda pagina publica debe tener `title`, `description`, `canonical` y `hreflang` correctos
- Usar OG image absoluta
- No construir URLs absolutas de assets a partir de la URL canonica de una pagina
- Mantener schema `TattooStudio` correcto y con URLs absolutas validas

## Accesibilidad
- Todo boton interactivo debe tener `aria-label` si no tiene texto suficiente
- Menus y overlays deben ser navegables por teclado
- Mantener foco gestionado en lightbox y menu movil
- Evitar animaciones innecesarias si afectan legibilidad o rendimiento

## Rendimiento
- Prioridad a movil
- No cargar demasiadas imagenes `eager`
- Usar thumbs ligeros en grids
- Revisar peso de JPEG originales al anadir nuevas imagenes
- Si se anaden nuevas galerias, limitar precarga agresiva

## JS e interacciones
- Evitar multiplicar scripts inline si pueden consolidarse
- Si una interaccion depende de `data-*`, seguir el patron ya existente
- Eliminar codigo muerto cuando se confirme que no se usa
- No introducir frameworks cliente sin necesidad real

## Datos y tipado
- Los datos en `src/data/*.ts` son la fuente de verdad
- Mantener ids de portfolio consistentes con nombres reales de archivo
- Si se anade una categoria nueva:
  - actualizar tipos
  - actualizar datos
  - actualizar paginas ES/EN
  - actualizar script de thumbs
- No dejar fallbacks apuntando a rutas inexistentes

## Al hacer cambios
1. Revisar si afecta ES y EN
2. Revisar si afecta SEO
3. Revisar si afecta lightbox o datos de imagenes
4. Revisar movil y desktop
5. Ejecutar `npm run build`
6. Si se cambian assets, revisar tambien `npm run make:thumbs` si aplica

## Checklist habitual
- [ ] No se han roto rutas de imagenes
- [ ] Canonical y hreflang correctos
- [ ] Texto ES y EN alineado
- [ ] Navegacion movil funciona
- [ ] Lightbox funciona con teclado
- [ ] Build correcto
- [ ] No hay codigo muerto evidente

## Cosas a evitar
- No duplicar una solucion en cuatro paginas si puede compartirse
- No mezclar rutas de `Studio` con `portfolio`
- No usar clases no definidas en CSS global
- No dejar datos hardcodeados inconsistentes entre idiomas
- No meter animaciones o blur extra si perjudican rendimiento

## Prioridades futuras
1. Corregir bugs de correctness/SEO antes que redisenar
2. Mejorar rendimiento de galeria e imagenes
3. Reducir duplicacion ES/EN
4. Mejorar accesibilidad de overlays y navegacion
5. Refactorizar solo cuando simplifique mantenimiento real
