import { NuxtContentCaseStudyRepository } from '@/infrastructure/repositories/NuxtContentCaseStudyRepository'

const repository = new NuxtContentCaseStudyRepository()

export async function getCaseStudies() {
    return repository.getAll()
}
