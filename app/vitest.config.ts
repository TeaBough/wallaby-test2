/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// @ts-ignore
import svgrPlugin from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgrPlugin(),
  ],
  server: {
    port: 9003,
  },
  test: {
    globals: true,
    testTimeout: 120000,
    // maxThreads: 1,
    // minThreads: 1,
    environment: 'jsdom',
    exclude: [
      './e2e',
      '**/node_modules/**',
      '**/dist/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,tsup,build}.config.*',
    ],
  },
});
