<script setup lang="ts">
const articles = await queryCollection('blog').all()

useSeoMeta({
  title: 'Blog | Rofik',
  description: 'Technical writing on backend, frontend, and systems engineering.'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <h1 class="text-5xl font-bold text-white">
        Blog
      </h1>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <NuxtLink
          v-for="article in articles"
          :key="article.id"
          :to="`/blog/${article.slug}`"
          class="rounded-lg border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
        >
          <h2 class="text-xl font-semibold text-white">
            {{ article.title }}
          </h2>

          <p class="mt-3 text-slate-400">
            {{ article.category || 'Engineering' }}
          </p>
        </NuxtLink>
      </div>
    </BaseSection>
  </BaseContainer>
</template>
