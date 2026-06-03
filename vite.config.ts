import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/book-site/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        fr: resolve(__dirname, "fr/index.html"),
      },
    },
  },
});
