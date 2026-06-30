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
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  project: z.string().optional(),
  projectSlug: z.string(),
  difficulty: z.enum(['Intermediate', 'Advanced']),
  estimatedReadTime: z.number().int().positive(),
  technologies: z.array(z.string()).default([]),
  publishedAt: z.date(),
  updatedAt: z.date()
})

const articleSchema = z.object({
  slug: z.string(),
  title: z.string(),
  category: z.string().optional(),
  publishedAt: z.date().optional()
})

const documentationSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  category: z.string(),
  subcategory: z.string(),
  difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  readingTime: z.number().int().positive(),
  status: z.enum(['Draft', 'Published']),
  version: z.string(),
  tags: z.array(z.string()).default([]),
  technologies: z.array(z.string()).default([]),
  related: z.array(z.string()).default([]),
  author: z.string(),
  publishedAt: z.string(),
  updatedAt: z.string()
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
    }),
    documentation: defineCollection({
      type: 'page',
      source: {
        cwd: 'src/content',
        include: 'documentation/**/*.md'
      },
      schema: documentationSchema
    })
  }
})
