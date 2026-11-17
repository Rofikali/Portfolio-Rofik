import { test, expect } from 'playwright/test'

// Runs only after: NUXT_APP_BASE_URL=/Portfolio-Rofik/ pnpm generate
// The preview process is started by playwright.config.ts.
test('homepage and a project detail are reachable under the Pages base path', async ({ page }) => {
  await page.goto('./')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Download Resume' })).toHaveAttribute('href', /\/Portfolio-Rofik\//)

  await page.goto('projects')
  await expect(page.getByRole('heading', { name: 'Projects', exact: true })).toBeVisible()
  await page.locator('article a[href*="/projects/"]').first().click()
  await expect(page).toHaveURL(/\/Portfolio-Rofik\/projects\/[^/]+/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('theme choice persists across reloads', async ({ page }) => {
  await page.goto('./')
  await page.getByRole('button', { name: 'Switch to light background' }).click()
  await expect(page.locator('html')).toHaveClass(/\blight\b/)
  await page.reload()
  await expect(page.locator('html')).toHaveClass(/\blight\b/)
})

test('mobile navigation can be opened and a destination visited', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('./')
  const toggle = page.getByRole('button', { name: 'Toggle navigation' })
  await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  await toggle.click()
  await expect(toggle).toHaveAttribute('aria-expanded', 'true')
  await page.getByRole('navigation').last().getByRole('link', { name: 'Projects' }).click()
  await expect(page).toHaveURL(/\/Portfolio-Rofik\/projects\/?$/)
})
