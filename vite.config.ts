import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@components": resolve(__dirname, "./src/components"),
      "@constants": resolve(__dirname, "./src/constants"),
      "@providers": resolve(__dirname, "./src/providers"),
      "@shared": resolve(__dirname, "./src/shared"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@store": resolve(__dirname, "./src/store"),
    },
  },
  plugins: [svgr(), react()],
});
