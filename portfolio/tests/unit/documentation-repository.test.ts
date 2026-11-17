import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { NuxtContentDocumentationRepository } from '../../src/infrastructure/documentation/repositories/NuxtContentDocumentationRepository'
import { mapContentToDocumentation } from '../../src/infrastructure/documentation/mappers/DocumentationMapper'

const fixture = (overrides: Record<string, unknown> = {}) => ({
  id: 'doc-one',
  slug: 'one',
  title: 'One',
  summary: 'A technical note',
  category: 'engineering',
  subcategory: 'patterns',
  tags: ['rust'],
  technologies: ['Rust'],
  related: [],
  status: 'Published',
  readingTime: 5,
  ...overrides
})

describe('Nuxt Content documentation publication boundary', () => {
  const builder = {
    all: vi.fn(),
    first: vi.fn(),
    where: vi.fn()
  }
  let repository: NuxtContentDocumentationRepository

  beforeEach(() => {
    vi.resetAllMocks()
    builder.where.mockReturnValue(builder)
    vi.stubGlobal('queryCollection', vi.fn(() => builder))
    repository = new NuxtContentDocumentationRepository()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('lists published documents with nonempty slugs, sorted by title', async () => {
    builder.all.mockResolvedValue([
      fixture({ title: 'Zulu', slug: 'zulu' }),
      fixture({ title: 'Hidden', slug: 'hidden', status: 'Draft' }),
      fixture({ title: 'No slug', slug: '' }),
      fixture({ title: 'Alpha', slug: 'alpha' }),
      fixture({ title: 'No metadata', slug: 'missing-status', status: undefined })
    ])

    const documents = await repository.getAll()

    expect(documents.map((document) => document.slug)).toEqual(['alpha', 'zulu'])
    expect(queryCollection).toHaveBeenCalledWith('documentation')
  })

  it('retrieves a published detail only after filtering slug and publication state', async () => {
    builder.first.mockResolvedValue(fixture({ slug: 'published' }))

    const document = await repository.getBySlug('published')

    expect(document?.slug).toBe('published')
    expect(builder.where).toHaveBeenNthCalledWith(1, 'slug', '=', 'published')
    expect(builder.where).toHaveBeenNthCalledWith(2, 'status', '=', 'Published')
  })

  it.each(['Draft', undefined, null])('rejects a detail with non-public status %s', async (status) => {
    builder.first.mockResolvedValue(fixture({ status }))

    expect(await repository.getBySlug('draft')).toBeNull()
  })

  it('returns null for an unknown slug or blank input', async () => {
    builder.first.mockResolvedValue(null)
    expect(await repository.getBySlug('missing')).toBeNull()

    vi.clearAllMocks()
    expect(await repository.getBySlug('   ')).toBeNull()
    expect(queryCollection).not.toHaveBeenCalled()
  })

  it('filters categories after applying the published-only rule', async () => {
    builder.all.mockResolvedValue([
      fixture({ slug: 'engineering', category: 'engineering' }),
      fixture({ slug: 'system', category: 'system-design' }),
      fixture({ slug: 'private', status: 'Draft', category: 'engineering' })
    ])

    const documents = await repository.getByCategory('engineering')

    expect(documents.map((document) => document.slug)).toEqual(['engineering'])
  })

  it('excludes drafts and the current document from related links and limits to four', async () => {
    builder.first.mockResolvedValue(fixture({ slug: 'current', related: ['linked'] }))
    builder.all.mockResolvedValue([
      fixture({ slug: 'current', title: 'A' }),
      fixture({ slug: 'linked', title: 'B', tags: [] }),
      fixture({ slug: 'draft', title: 'C', status: 'Draft' }),
      fixture({ slug: 'tag-1', title: 'D' }),
      fixture({ slug: 'tag-2', title: 'E' }),
      fixture({ slug: 'tag-3', title: 'F' }),
      fixture({ slug: 'tag-4', title: 'G' })
    ])

    const related = await repository.getRelated('current')

    expect(related.map((document) => document.slug)).toEqual(['linked', 'tag-1', 'tag-2', 'tag-3'])
  })

  it('does not expose related documents when the current detail is a draft', async () => {
    builder.first.mockResolvedValue(fixture({ status: 'Draft' }))
    builder.all.mockResolvedValue([fixture({ slug: 'related' })])

    expect(await repository.getRelated('draft')).toEqual([])
  })

  it('maps malformed optional arrays and fails closed on missing status', () => {
    const mapped = mapContentToDocumentation({
      id: 'missing-status',
      slug: 'missing-status',
      tags: ['valid', 5, null],
      technologies: 'not-an-array',
      related: [false, 'valid'],
      readingTime: 'bad'
    })

    expect(mapped.status).toBe('Draft')
    expect(mapped.tags).toEqual(['valid'])
    expect(mapped.technologies).toEqual([])
    expect(mapped.related).toEqual(['valid'])
    expect(mapped.readingTime).toBe(8)
  })
})
