import { NuxtContentDocumentationRepository } from '@/infrastructure/documentation/repositories/NuxtContentDocumentationRepository'

export const getRelatedDocumentation = (slug: string) => {
  const repository = new NuxtContentDocumentationRepository()

  return repository.getRelated(slug)
}
