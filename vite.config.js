import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig({
  plugins: [
    react(),
    // Gzip/Brotli compression for smaller JS/CSS
    viteCompression(),
    visualizer({ open: true }),
  ],

  build: {
    minify: "esbuild", // Fast minification for JS/CSS
    target: "es2017", // modern target reduces polyfills and code size
    brotliSize: true,
    cssCodeSplit: true, // Split CSS for better caching
    assetsInlineLimit: 4096, // Inline small assets
    sourcemap: false, // Disable sourcemaps in production for smaller build
    outDir: "dist",
  },
});
