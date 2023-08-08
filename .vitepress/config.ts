import { defineConfig } from 'vitepress'

const srcDir = './src'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Touiter',
  description: 'Some light reading.',
  srcDir,
})
