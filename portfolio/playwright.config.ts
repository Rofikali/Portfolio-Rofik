import { defineConfig } from 'playwright/test'

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/*.e2e.ts',
  timeout: 30_000,
  use: {
    baseURL: 'http://127.0.0.1:4173/Portfolio-Rofik/',
    browserName: 'chromium',
    headless: true
  },
  webServer: {
    command: 'pnpm preview --host 127.0.0.1 --port 4173',
    url: 'http://127.0.0.1:4173/Portfolio-Rofik/',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  }
})
