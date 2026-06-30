import type { Documentation } from '@/domain/documentation/entities/Documentation'

type ContentDocument = object

const asStringArray = (value: unknown): string[] => {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
}

const asString = (value: unknown, fallback = ''): string => {
  return typeof value === 'string' ? value : fallback
}

const asNumber = (value: unknown, fallback: number): number => {
  return typeof value === 'number' ? value : fallback
}

export const mapContentToDocumentation = (document: ContentDocument): Documentation => {
  const data = document as Record<string, unknown>

  return {
    id: asString(data.id, asString(data.path, asString(data.slug))),
    title: asString(data.title),
    slug: asString(data.slug),
    summary: asString(data.summary),
    category: asString(data.category),
    subcategory: asString(data.subcategory),
    tags: asStringArray(data.tags),
    technologies: asStringArray(data.technologies),
    difficulty: asString(data.difficulty, 'Intermediate') as Documentation['difficulty'],
    readingTime: asNumber(data.readingTime, 8),
    status: asString(data.status, 'Published') as Documentation['status'],
    version: asString(data.version, '1.0.0'),
    author: asString(data.author, 'Rofik'),
    publishedAt: asString(data.publishedAt),
    updatedAt: asString(data.updatedAt),
    path: asString(data.path),
    related: asStringArray(data.related)
  }
}
