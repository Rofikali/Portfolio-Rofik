import type { Project } from '@/domain/project/types/Project'

export async function getFeaturedProjects(): Promise<Project[]> {
    const projects = await queryCollection('projects')
        .where('featured', '=', true)
        .all()

    return projects as Project[]
}