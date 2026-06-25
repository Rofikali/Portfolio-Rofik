<script setup lang="ts">
const route = useRoute()

const article = await queryCollection('blog')
  .where('slug', '=', route.params.slug)
  .first()

if (!article) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article Not Found'
  })
}

useSeoMeta({
  title: article.title,
  description: 'Technical article by Rofik.'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <ContentRenderer class="prose prose-invert max-w-none" :value="article" />
    </BaseSection>
  </BaseContainer>
</template>
