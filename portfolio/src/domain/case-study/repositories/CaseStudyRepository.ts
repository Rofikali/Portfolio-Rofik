import type { CaseStudy } from '../types/CaseStudy'

export interface CaseStudyRepository {
    getAll(): Promise<CaseStudy[]>

    getBySlug(slug: string): Promise<CaseStudy | null>

    getRelated(projectSlug: string): Promise<CaseStudy[]>
}