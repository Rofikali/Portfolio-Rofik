import type { CaseStudy } from '@/domain/case-study/types/CaseStudy'
import type { CaseStudyRepository } from '@/domain/case-study/repositories/CaseStudyRepository'

export class NuxtContentCaseStudyRepository
    implements CaseStudyRepository {

    async getAll(): Promise<CaseStudy[]> {
        return await queryCollection('caseStudies')
            .order('publishedAt', 'DESC')
            .all() as CaseStudy[]
    }

    async getBySlug(
        slug: string
    ): Promise<CaseStudy | null> {

        return await queryCollection('caseStudies')
            .where('slug', '=', slug)
            .first() as CaseStudy | null
    }

    async getRelated(
        projectSlug: string
    ): Promise<CaseStudy[]> {

        return await queryCollection('caseStudies')
            .where('projectSlug', '=', projectSlug)
            .all() as CaseStudy[]
    }
}
