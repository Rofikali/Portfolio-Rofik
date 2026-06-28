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
  title: `${article.title} | Rofik`,
  description: 'Technical article by Rofik.',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <div class="mb-8 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-blue-300">Home</NuxtLink>
        <span class="mx-2">›</span>
        <NuxtLink to="/blog" class="hover:text-blue-300">Blog</NuxtLink>
      </div>

      <div class="grid gap-10 lg:grid-cols-[1fr_16rem]">
        <article>
          <h1 class="text-4xl font-bold text-white">
            {{ article.title }}
          </h1>

          <ContentRenderer class="prose prose-invert mt-10 max-w-none" :value="article" />
        </article>

        <aside class="hidden lg:block">
          <div class="surface sticky top-24 rounded-lg p-5">
            <h2 class="text-sm font-semibold text-white">
              On this page
            </h2>

            <p class="mt-4 text-sm text-slate-400">
              Architecture notes, implementation decisions, and lessons from real project work.
            </p>
          </div>
        </aside>
      </div>
    </BaseSection>
  </BaseContainer>
</template>
