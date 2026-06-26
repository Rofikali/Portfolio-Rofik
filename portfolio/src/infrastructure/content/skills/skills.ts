// import type { Skill } from '@/domain/skill/types/Skill'

// export const skills: Skill[] = [
//     {
//         name: 'FastAPI',
//         category: 'Backend'
//     },
//     {
//         name: 'Django',
//         category: 'Backend'
//     },
//     {
//         name: 'PostgreSQL',
//         category: 'Database'
//     },
//     {
//         name: 'Redis',
//         category: 'Database'
//     },
//     {
//         name: 'Nuxt',
//         category: 'Frontend'
//     },
//     {
//         name: 'Vue',
//         category: 'Frontend'
//     },
//     {
//         name: 'TypeScript',
//         category: 'Frontend'
//     },
//     {
//         name: 'Docker',
//         category: 'DevOps'
//     },
//     {
//         name: 'Linux',
//         category: 'Systems'
//     },
//     {
//         name: 'C',
//         category: 'Systems'
//     }
// ]

import type { Skill } from '@/domain/skill/types/Skill'

export const skills: Skill[] = [
    // Backend

    { name: 'FastAPI', category: 'Backend' },
    { name: 'Django', category: 'Backend' },
    { name: 'DRF', category: 'Backend' },
    { name: 'Kafka', category: 'Backend' },

    // Database

    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Database' },

    // Frontend

    { name: 'Nuxt', category: 'Frontend' },
    { name: 'Vue', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },

    // Infrastructure

    { name: 'Docker', category: 'Infrastructure' },
    { name: 'GitHub Actions', category: 'Infrastructure' },

    // Observability

    { name: 'Prometheus', category: 'Observability' },
    { name: 'Grafana', category: 'Observability' },

    // Systems

    { name: 'Linux', category: 'Systems' },
    { name: 'C', category: 'Systems' },
    { name: 'AVX2', category: 'Systems' }
]