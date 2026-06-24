import type { Project } from '../types/Project'

export interface ProjectRepository {
    getAll(): Promise<Project[]>

    getFeatured(): Promise<Project[]>

    getBySlug(slug: string): Promise<Project | null>
}