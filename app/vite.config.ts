/// <reference types="vitest" />
import { defineConfig } from "vite";
// @ts-ignore
import svgrPlugin from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      outDir: "./build",
      sourcemap: true,
      target: "es2015",
    },
    plugins: [react()],
    define: {
      ...(process.env.NODE_ENV === "development" ? { global: "window" } : {}),
    },
    server: {
      port: 9003,
      strictPort: true,
    },
  };
});
