import { defineConfig } from 'vite';

// Relative base so the build works from a file path (Capacitor / iOS) and from GitHub Pages.
export default defineConfig({
  base: './',
  server: { port: 5183, strictPort: true },
});
