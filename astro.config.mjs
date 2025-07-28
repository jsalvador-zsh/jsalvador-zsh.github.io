// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // site: 'https://github.com/jsalvador-zsh/jsalvador-zsh.github.io',
  // base: 'jsalvador-zsh.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});