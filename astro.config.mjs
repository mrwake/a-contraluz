import { defineConfig } from 'astro/config';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? '/a-contraluz/' : '/',
});
