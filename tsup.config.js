import { defineConfig } from 'tsup';

export default defineConfig({
  sourcemap: true,
  clean: true,
  entryPoints: ['src/index.ts'],
  format: ['esm'],
  dts: true,
});
