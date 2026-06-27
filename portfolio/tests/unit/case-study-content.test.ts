import { describe, expect, it } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const requiredFields = [
  'id',
  'slug',
  'title',
  'summary',
  'projectSlug',
  'difficulty',
  'estimatedReadTime',
  'technologies',
  'publishedAt',
  'updatedAt'
]

describe('case study content', () => {
  it('defines the metadata required by the case study pages', () => {
    const directory = join(process.cwd(), 'src/content/case-studies')
    const files = readdirSync(directory).filter((file) => file.endsWith('.md'))

    expect(files.length).toBeGreaterThanOrEqual(3)

    for (const file of files) {
      const content = readFileSync(join(directory, file), 'utf8')
      const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)

      expect(frontmatter, `${file} is missing frontmatter`).not.toBeNull()

      for (const field of requiredFields) {
        expect(frontmatter?.[1], `${file} is missing ${field}`).toContain(`${field}:`)
      }
    }
  })
})
