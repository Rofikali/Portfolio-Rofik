<script setup lang="ts">
import DocumentationLayout from '@/presentation/layouts/DocumentationLayout.vue'

const route = useRoute()
const slug = String(route.params.slug)
const document = await getDocumentationBySlug(slug)
const article = await queryCollection('documentation')
  .where('slug', '=', slug)
  .first()

if (!document || !article) {
  throw createError({ statusCode: 404, statusMessage: 'System design document not found' })
}

const related = await getRelatedDocumentation(slug)

useSeoMeta({
  title: `${document.title} | System Design`,
  description: document.summary
})
</script>

<template>
  <DocumentationLayout :document="document" :related="related">
    <ContentRenderer :value="article" />
  </DocumentationLayout>
</template>
