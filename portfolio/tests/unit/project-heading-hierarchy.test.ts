import { describe, expect, it } from 'vitest'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

describe('project heading semantics', () => {
  it('uses H2 sections in Markdown because the project page provides the sole H1', () => {
    const dir = join(process.cwd(), 'src/content/projects')
    const pages = readdirSync(dir).filter((file) => file.endsWith('.md'))

    expect(pages.length).toBeGreaterThan(0)
    for (const filename of pages) {
      const content = readFileSync(join(dir, filename), 'utf8')
      const frontmatter = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/)
      expect(frontmatter, `${filename} missing YAML frontmatter`).not.toBeNull()
      const body = content.slice(frontmatter?.[0].length ?? 0)
      const topLevel = body.split(/\r?\n/).filter((line) => /^# [^#]/.test(line))
      expect(topLevel, `${filename} duplicates the Vue page H1`).toEqual([])
      expect(body, `${filename} has no section headings`).toMatch(/^## /m)
    }
  })
})
