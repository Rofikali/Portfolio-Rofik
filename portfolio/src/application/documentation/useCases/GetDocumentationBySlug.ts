import { NuxtContentDocumentationRepository } from '@/infrastructure/documentation/repositories/NuxtContentDocumentationRepository'

export const getDocumentationBySlug = (slug: string) => {
  const repository = new NuxtContentDocumentationRepository()

  return repository.getBySlug(slug)
}
