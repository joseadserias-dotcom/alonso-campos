import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [sitemap()],
  site: 'https://alonsoycamposadvisors.com',
  // El compresor de Astro no colapsa a un espacio las rachas de blancos que
  // contienen un salto de línea: las BORRA. Como la prosa va envuelta en
  // varias líneas, un enlace al principio de línea perdía el espacio que lo
  // separa de la palabra anterior. Cuesta ~2,8 KB gzip en todo el sitio.
  compressHTML: false,
});
