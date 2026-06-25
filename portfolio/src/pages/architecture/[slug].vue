<script setup lang="ts">
const route = useRoute()

const article = await queryCollection('architecture')
  .where('slug', '=', route.params.slug)
  .first()

if (!article) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Architecture Article Not Found'
  })
}

useSeoMeta({
  title: article.title,
  description: 'Architecture and system design note by Rofik.'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <ContentRenderer class="prose prose-invert max-w-none" :value="article" />
    </BaseSection>
  </BaseContainer>
</template>
