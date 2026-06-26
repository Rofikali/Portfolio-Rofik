// export interface CaseStudy {
//     slug: string

//     title: string

//     project: string

//     overview: string

//     problem: string

//     requirements: string[]

//     architecture: string

//     tradeoffs: string[]

//     lessonsLearned: string[]

//     technologies: string[]
// }

export interface CaseStudy {
    id: string

    slug: string

    title: string

    summary: string

    projectSlug: string

    difficulty: 'Intermediate' | 'Advanced'

    estimatedReadTime: number

    technologies: string[]

    publishedAt: string

    updatedAt: string
}