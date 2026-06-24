export interface Project {
    id: string

    slug: string

    title: string

    summary: string

    description: string

    featured: boolean

    technologies: string[]

    githubUrl?: string

    demoUrl?: string

    image: string

    highlights: string[]

    createdAt: string

    updatedAt: string
}