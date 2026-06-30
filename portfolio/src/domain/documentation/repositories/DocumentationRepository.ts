import type { Documentation } from '../entities/Documentation'

export interface DocumentationRepository {
  getAll(): Promise<Documentation[]>
  getBySlug(slug: string): Promise<Documentation | null>
  getByCategory(category: string): Promise<Documentation[]>
  getRelated(slug: string): Promise<Documentation[]>
}
