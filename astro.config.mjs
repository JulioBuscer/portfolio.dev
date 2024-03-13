import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({

  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      'en': 'es'
    }
  }

},
);

