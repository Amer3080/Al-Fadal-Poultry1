import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    // ضغط Brotli للأصول
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 10240
    }),
    // ضغط Gzip للأصول
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240
    })
  ],
  build: {
    // إزالة الـ inline sourcemap عند الإنتاج لخفض حجم الباقة
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom") ||
              id.includes("react-helmet-async") ||
              id.includes("i18next")
            ) {
              return "vendor-react";
            }
            if (
              id.includes("@mui") ||
              id.includes("styled-components") ||
              id.includes("@emotion")
            ) {
              return "vendor-mui";
            }
            if (id.match(/\.(woff2?|ttf|eot)$/)) {
              return "vendor-fonts";
            }
            return "vendor-others";
          }
        }
      }
    }
  }
});
