import { NuxtContentCaseStudyRepository } from '@/infrastructure/repositories/NuxtContentCaseStudyRepository'

const repository = new NuxtContentCaseStudyRepository()

export async function getCaseStudyBySlug(
    slug: string
) {
    return repository.getBySlug(slug)
}