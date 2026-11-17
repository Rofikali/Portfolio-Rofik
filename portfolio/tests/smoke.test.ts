import { describe, expect, it } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

describe('static portfolio source contract', () => {
  it('uses the correct GitHub Pages base path in CI generation', () => {
    const workflow = readFileSync(join(process.cwd(), '../.github/workflows/ci.yml'), 'utf8')
    expect(workflow).toContain('NUXT_APP_BASE_URL: /Portfolio-Rofik/')
    expect(workflow).toContain('pnpm generate')
  })

  it('has a real static entry page, public assets and content schema', () => {
    for (const path of ['src/pages/index.vue', 'content.config.ts', 'public/robots.txt']) {
      expect(existsSync(join(process.cwd(), path)), `missing ${path}`).toBe(true)
    }
  })
})
