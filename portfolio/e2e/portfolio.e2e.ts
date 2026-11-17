import { test, expect } from 'playwright/test'

// Runs only after: NUXT_APP_BASE_URL=/Portfolio-Rofik/ pnpm generate
// The preview process is started by playwright.config.ts.
test('homepage and a project detail are reachable under the Pages base path', async ({ page }) => {
  await page.goto('./')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Download Resume' })).toHaveAttribute('href', /\/Portfolio-Rofik\//)

  await page.goto('projects')
  await expect(page.getByRole('heading', { name: 'Projects', exact: true })).toBeVisible()
  const projectCard = page.locator('article').first()
  const projectTitle = (await projectCard.locator('h3').innerText()).trim()
  await projectCard.locator('a[href*="/projects/"]').first().click()
  await expect(page).toHaveURL(/\/Portfolio-Rofik\/projects\/[^/]+/)
  await expect(page.getByRole('heading', { level: 1, name: projectTitle, exact: true })).toBeVisible()
  // The Markdown sections must be H2; the Vue page provides the sole H1.
  await expect(page.locator('h1')).toHaveCount(1)
})

test('theme choice persists across reloads', async ({ page }) => {
  // Make the initial theme deterministic regardless of CI/browser OS preference.
  await page.emulateMedia({ colorScheme: 'dark' })
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

test('unified search finds projects and case studies with a scoped filter', async ({ page }) => {
  await page.goto('search?q=IMGENGINE')
  await expect(page.getByRole('heading', { name: 'Search results' })).toBeVisible()
  await expect(page.getByRole('link', { name: /Project IMGENGINE CLI/ })).toBeVisible()
  await expect(page.getByRole('link', { name: /Case study IMGENGINE CLI/ })).toBeVisible()

  await page.getByLabel('Content type').selectOption('case-studies')
  await page.getByRole('button', { name: 'Search', exact: true }).click()
  await expect(page).toHaveURL(/type=case-studies/)
  await expect(page.getByRole('link', { name: /Case study IMGENGINE CLI/ })).toBeVisible()
  await expect(page.getByRole('link', { name: /Project IMGENGINE CLI/ })).toHaveCount(0)
})
