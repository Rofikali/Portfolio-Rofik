import type { DocumentationRepository } from '@/domain/documentation/repositories/DocumentationRepository'
import type { Documentation } from '@/domain/documentation/entities/Documentation'
import { mapContentToDocumentation } from '../mappers/DocumentationMapper'

export class NuxtContentDocumentationRepository implements DocumentationRepository {
  async getAll(): Promise<Documentation[]> {
    const documents = await queryCollection('documentation').all()

    return documents
      .map((document) => mapContentToDocumentation(document))
      .filter((document) => document.status === 'Published' && Boolean(document.slug))
      .sort((a, b) => a.title.localeCompare(b.title))
  }

  async getBySlug(slug: string): Promise<Documentation | null> {
    const document = await queryCollection('documentation')
      .where('slug', '=', slug)
      .first()

    return document ? mapContentToDocumentation(document) : null
  }

  async getByCategory(category: string): Promise<Documentation[]> {
    const documents = await this.getAll()

    return documents.filter((document) => document.category === category)
  }

  async getRelated(slug: string): Promise<Documentation[]> {
    const current = await this.getBySlug(slug)
    const documents = await this.getAll()

    if (!current) {
      return []
    }

    const related = new Set(current.related ?? [])

    return documents
      .filter((document) => document.slug !== slug)
      .filter((document) => related.has(document.slug) || document.tags.some((tag) => current.tags.includes(tag)))
      .slice(0, 4)
  }
}
