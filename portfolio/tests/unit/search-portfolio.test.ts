import { describe, expect, it } from 'vitest'
import {
  buildSearchIndex,
  normalizeSearchQuery,
  parseSearchScope,
  searchPortfolio
} from '../../src/application/search/searchPortfolio'

const data = {
  projects: [
    { slug: 'imgengine', title: 'IMGENGINE CLI', summary: 'High-performance image engine', technologies: ['C', 'Rust'] },
    { slug: 'invalid/../../secret', title: 'Invalid', summary: 'Should never link' },
    { slug: 'imgengine', title: 'Duplicate', summary: 'Do not show twice' }
  ],
  caseStudies: [
    { slug: 'imgengine', title: 'IMGENGINE architecture', summary: 'Memory ownership in C', technologies: ['AVX2'] },
    { slug: 'go-code', title: 'Go microservices', summary: 'Architecture for reliable systems', technologies: ['Go'] }
  ],
  documents: [
    { slug: 'safe-links', title: 'Safe API Links', summary: 'Threat-model URL paths', category: 'engineering', subcategory: 'security', status: 'Published', tags: ['Security'], technologies: ['Rust'] },
    { slug: 'safe-links', title: 'Draft API Links', summary: 'Private draft', category: 'engineering', subcategory: 'security', status: 'Draft', tags: ['Security'] },
    { slug: 'adr-nuxt', title: 'Nuxt decision', summary: 'Static hosting', category: 'architecture', subcategory: 'adr', status: 'Published' },
    { slug: 'feed-design', title: 'Feed design', summary: 'Timeline and ranking', category: 'system-design', subcategory: 'feed', status: 'Published' },
    { slug: 'bad?query', title: 'Bad doc', summary: 'Unsafe', category: 'engineering', subcategory: 'security', status: 'Published' },
    { slug: 'internal', title: 'Internal doc', summary: 'Unsupported route', category: 'internal', subcategory: 'none', status: 'Published' }
  ]
}

describe('unified portfolio search', () => {
  const index = buildSearchIndex(data)

  it('indexes three source types but never drafts, invalid slugs or unsupported paths', () => {
    expect(index).toHaveLength(6)
    expect(index.map((x) => x.href)).toEqual([
      '/projects/imgengine',
      '/case-studies/imgengine',
      '/case-studies/go-code',
      '/engineering/security/safe-links',
      '/architecture/adr/adr-nuxt',
      '/system-design/feed-design'
    ])
    expect(index.some((x) => x.title.includes('Draft'))).toBe(false)
    expect(index.some((x) => x.href.includes('?') || x.href.includes('..'))).toBe(false)
  })

  it('keeps identical slugs from different types without collision', () => {
    expect(index.filter((x) => x.href.endsWith('/imgengine'))).toHaveLength(2)
  })

  it('handles Unicode and normalized whitespace', () => {
    expect(normalizeSearchQuery('  ＲＵＳＴ   API  ')).toBe('rust api')
    const unicode = buildSearchIndex({
      projects: [{ slug: 'नमस्ते', title: 'नमस्ते', summary: 'हिन्दी प्रोजेक्ट' }],
      caseStudies: [], documents: []
    })
    // Conservative URL policy deliberately excludes unsupported combining-mark slug forms.
    expect(unicode).toHaveLength(0)
    const titles = buildSearchIndex({
      projects: [{ slug: 'namaste', title: 'नमस्ते', summary: 'हिन्दी प्रोजेक्ट' }],
      caseStudies: [], documents: []
    })
    expect(searchPortfolio(titles, 'नमस्ते')).toHaveLength(1)
  })

  it('matches multiple tokens across title, tags and summary', () => {
    const matches = searchPortfolio(index, 'rust links')
    expect(matches.map(x => x.href)).toEqual(['/engineering/security/safe-links'])
  })

  it('searches projects, cases and published documentation together', () => {
    expect(searchPortfolio(index, 'imgengine').map(x => x.kind)).toEqual(['projects', 'case-studies'])
    expect(searchPortfolio(index, 'architecture').some(x => x.kind === 'case-studies')).toBe(true)
    expect(searchPortfolio(index, 'static').some(x => x.kind === 'docs')).toBe(true)
  })

  it('filters by real content type instead of displaying counts as filters', () => {
    expect(searchPortfolio(index, 'imgengine', 'projects').map(x => x.kind)).toEqual(['projects'])
    expect(searchPortfolio(index, 'imgengine', 'case-studies').map(x => x.kind)).toEqual(['case-studies'])
    expect(searchPortfolio(index, 'nope', 'docs')).toEqual([])
    expect(parseSearchScope('unexpected')).toBe('all')
  })

  it('is stable for unknown, empty, long and adversarial queries', () => {
    expect(searchPortfolio(index, '__no_match__')).toEqual([])
    expect(searchPortfolio(index, '', 'all', 2)).toHaveLength(2)
    expect(searchPortfolio(index, 'IMGENGINE'.repeat(400))).toEqual([])
    expect(normalizeSearchQuery('x'.repeat(500))).toHaveLength(120)
    expect(searchPortfolio(index, '<script>alert(1)</script>')).toEqual([])
  })

  it('returns title-ranked and capped results without duplicates', () => {
    const hits = searchPortfolio(index, 'architecture')
    expect(hits[0]?.title).toBe('IMGENGINE architecture')
    expect(new Set(index.map(x => `${x.kind}:${x.href}`)).size).toBe(index.length)
    expect(searchPortfolio(index, 'architecture', 'all', 1)).toHaveLength(1)
    expect(searchPortfolio(index, 'architecture', 'all', -2)).toHaveLength(0)
  })
})
