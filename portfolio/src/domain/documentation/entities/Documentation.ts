export type DocumentationDifficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export type DocumentationStatus = 'Draft' | 'Published'

export interface Documentation {
  id: string
  title: string
  slug: string
  summary: string
  category: string
  subcategory: string
  tags: string[]
  technologies: string[]
  difficulty: DocumentationDifficulty
  readingTime: number
  status: DocumentationStatus
  version: string
  author: string
  publishedAt: string
  updatedAt: string
  path?: string
  related?: string[]
}
