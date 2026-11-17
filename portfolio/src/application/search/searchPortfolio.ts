// Browser-local, dependency-free search over already public portfolio metadata.
// Nuxt Content publication rules remain at source/repository boundaries.
export type SearchKind = 'projects' | 'case-studies' | 'docs'
export type SearchScope = 'all' | SearchKind

export interface SearchEntry {
  kind: SearchKind
  title: string
  summary: string
  href: string
  tags: string[]
  technologies: string[]
}

interface SourceItem {
  slug: string
  title: string
  summary: string
  technologies?: readonly string[]
  tags?: readonly string[]
}

interface DocumentationItem extends SourceItem {
  category: string
  subcategory: string
  status: string
}

interface SearchSources {
  projects: readonly SourceItem[]
  caseStudies: readonly SourceItem[]
  documents: readonly DocumentationItem[]
}

const safeSegment = (segment: string): string | null => {
  // URL segments are encoded separately; reject separators, traversal and query fragments.
  return /^(?=.{1,120}$)[\p{L}\p{N}][\p{L}\p{N}-]*$/u.test(segment)
    ? encodeURIComponent(segment)
    : null
}

const validText = (value: string) => typeof value === 'string' && value.trim().length > 0

export const parseSearchScope = (value: string): SearchScope =>
  value === 'projects' || value === 'case-studies' || value === 'docs' ? value : 'all'

export const normalizeSearchQuery = (value: string): string =>
  value.normalize('NFKC').toLowerCase().trim().replace(/\s+/gu, ' ').slice(0, 120)

export const buildSearchIndex = ({ projects, caseStudies, documents }: SearchSources): SearchEntry[] => {
  const result: SearchEntry[] = []
  const seen = new Set<string>()

  const add = (item: SourceItem, kind: SearchKind, href: string | null) => {
    if (!href || !validText(item.title) || !validText(item.summary)) return
    const key = `${kind}:${href}`
    if (seen.has(key)) return
    seen.add(key)
    result.push({
      kind,
      title: item.title,
      summary: item.summary,
      href,
      tags: Array.isArray(item.tags) ? item.tags.filter(validText) : [],
      technologies: Array.isArray(item.technologies) ? item.technologies.filter(validText) : []
    })
  }

  for (const project of projects) {
    const slug = safeSegment(project.slug)
    add(project, 'projects', slug ? `/projects/${slug}` : null)
  }
  for (const study of caseStudies) {
    const slug = safeSegment(study.slug)
    add(study, 'case-studies', slug ? `/case-studies/${slug}` : null)
  }
  for (const document of documents) {
    if (document.status !== 'Published') continue
    const slug = safeSegment(document.slug)
    if (!slug) continue
    if (document.category === 'system-design') {
      add(document, 'docs', `/system-design/${slug}`)
    } else if (document.category === 'engineering' || document.category === 'architecture') {
      const section = safeSegment(document.subcategory)
      add(document, 'docs', section ? `/${document.category}/${section}/${slug}` : null)
    }
  }

  return result
}

export const searchPortfolio = (
  index: readonly SearchEntry[],
  rawQuery: string,
  scope: SearchScope = 'all',
  limit = 40
): SearchEntry[] => {
  const words = normalizeSearchQuery(rawQuery).split(' ').filter(Boolean)
  const max = Math.max(0, Math.min(40, Math.floor(Number.isFinite(limit) ? limit : 40)))
  const candidates = index.filter((entry) => scope === 'all' || entry.kind === scope)
  if (!words.length) return candidates.slice(0, Math.min(max, 12))

  return candidates.map((entry) => {
    const title = normalizeSearchQuery(entry.title)
    const terms = normalizeSearchQuery([...entry.tags, ...entry.technologies].join(' '))
    const summary = normalizeSearchQuery(entry.summary)
    const haystack = [title, terms, summary].join(' ')
    if (!words.every((word) => haystack.includes(word))) return { entry, score: -1 }
    const score = words.reduce((sum, word) =>
      sum + (title.includes(word) ? 5 : 0) + (terms.includes(word) ? 2 : 0) + (summary.includes(word) ? 1 : 0), 0)
    return { entry, score }
  })
    .filter(({ score }) => score >= 0)
    .sort((a, b) => b.score - a.score
      || a.entry.title.localeCompare(b.entry.title)
      || a.entry.kind.localeCompare(b.entry.kind)
      || a.entry.href.localeCompare(b.entry.href))
    .slice(0, max)
    .map(({ entry }) => entry)
}
