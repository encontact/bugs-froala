// import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
// import { VitePWA } from 'vite-plugin-pwa'
// import versionJson from './version.json'

// const commitHash = child.execSync("git rev-parse --short HEAD").toString().trim();

export default defineConfig(() => {
  // const env = loadEnv('development', process.cwd(), '')
  return {
    resolve: {
      preserveSymlinks: true,
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    envPrefix: ['VITE_', 'REACT_'],
    test: {
      environment: 'jsdom',
      css: true,
      commandLine: 'yarn test',
      globals: true,
      setupFiles: ['./src/setupTests.ts'],
    },
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
    ],
    css: {
      devSourcemap: true,
    },
  }
})
