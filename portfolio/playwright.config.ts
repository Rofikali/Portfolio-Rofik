import { defineConfig } from 'playwright/test'

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/*.e2e.ts',
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4173/Portfolio-Rofik/',
    browserName: 'chromium',
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  webServer: {
    command: 'pnpm preview --host 127.0.0.1 --port 4173',
    url: 'http://127.0.0.1:4173/Portfolio-Rofik/',
    env: {
      NUXT_APP_BASE_URL: '/Portfolio-Rofik/'
    },
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  }
})
