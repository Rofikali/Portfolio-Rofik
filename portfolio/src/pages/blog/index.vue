<script setup lang="ts">
const articles = await queryCollection('blog').all()
const articleList = articles.filter((article) => article.slug && article.title)

useSeoMeta({
  title: 'Blog | Rofik',
  description: 'Technical writing on backend, frontend, and systems engineering.'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <div class="mb-10 max-w-2xl">
        <h1 class="text-4xl font-bold text-white">
          Blog
        </h1>

        <p class="mt-4 text-sm leading-6 text-slate-400">
          Thoughts, tutorials, and engineering insights from real projects.
        </p>
      </div>

      <div class="grid gap-5">
        <NuxtLink
          v-for="article in articleList"
          :key="article.id"
          :to="`/blog/${article.slug}`"
          class="surface grid gap-4 rounded-lg p-5 transition hover:border-blue-500/80 md:grid-cols-[10rem_1fr]"
        >
          <div class="hidden rounded-lg bg-gradient-to-br from-emerald-500/30 to-blue-600/20 md:block" />

          <div>
            <h2 class="text-xl font-semibold text-white">
              {{ article.title }}
            </h2>

            <p class="mt-3 text-sm text-slate-400">
              {{ article.category || 'Engineering' }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </BaseSection>
  </BaseContainer>
</template>
