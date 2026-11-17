import { describe, expect, it } from 'vitest'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { navigation } from '../../src/infrastructure/content/navigation/navigation'

describe('primary navigation route contract', () => {
  it('uses unique labels and local absolute paths without query fragments', () => {
    expect(navigation.length).toBeGreaterThan(0)
    expect(new Set(navigation.map(({ label }) => label)).size).toBe(navigation.length)
    expect(new Set(navigation.map(({ to }) => to)).size).toBe(navigation.length)

    for (const { to } of navigation) {
      expect(to).toMatch(/^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/)
    }
  })

  it('every navigation destination has a matching Nuxt page', () => {
    const root = join(process.cwd(), 'src/pages')

    for (const { label, to } of navigation) {
      const base = join(root, to.slice(1))
      const exists = existsSync(base + '.vue') || existsSync(join(base, 'index.vue'))
      expect(exists, `${label} has no page at ${to}`).toBe(true)
    }
  })
})
