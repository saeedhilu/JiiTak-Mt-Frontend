// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from "path"
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//       zod: require.resolve('zod'),
//       'react-hook-form': require.resolve('react-hook-form'),
//       '@hookform/resolvers/zod': require.resolve('@hookform/resolvers/zod'),
//     },
//   },
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      zod: path.resolve('./node_modules/zod'),
      'react-hook-form': path.resolve('./node_modules/react-hook-form'),
      '@hookform/resolvers/zod': path.resolve('./node_modules/@hookform/resolvers/zod'),
    },
  },
});
