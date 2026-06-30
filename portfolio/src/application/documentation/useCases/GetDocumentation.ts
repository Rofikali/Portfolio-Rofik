import { NuxtContentDocumentationRepository } from '@/infrastructure/documentation/repositories/NuxtContentDocumentationRepository'

export const getDocumentation = () => {
  const repository = new NuxtContentDocumentationRepository()

  return repository.getAll()
}
