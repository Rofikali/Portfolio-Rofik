import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const projectSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  featured: z.boolean().default(false),
  summary: z.string(),
  description: z.string(),
  image: z.string().optional(),
  githubUrl: z.string().url().optional(),
  demoUrl: z.string().url().optional(),
  technologies: z.array(z.string()).default([]),
  highlights: z.array(z.string()).default([]),
  createdAt: z.date(),
  updatedAt: z.date()
})

const caseStudySchema = z.object({
  slug: z.string(),
  project: z.string(),
  title: z.string()
})

const articleSchema = z.object({
  slug: z.string(),
  title: z.string(),
  category: z.string().optional(),
  publishedAt: z.date().optional()
})

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: {
        cwd: 'src/content',
        include: 'projects/*.md'
      },
      schema: projectSchema
    }),
    caseStudies: defineCollection({
      type: 'page',
      source: {
        cwd: 'src/content',
        include: 'case-studies/*.md'
      },
      schema: caseStudySchema
    }),
    blog: defineCollection({
      type: 'page',
      source: {
        cwd: 'src/content',
        include: 'architecture/**/*.md'
      },
      schema: articleSchema
    }),
    architecture: defineCollection({
      type: 'page',
      source: {
        cwd: 'src/content',
        include: 'architecture/**/*.md'
      },
      schema: articleSchema
    })
  }
})
