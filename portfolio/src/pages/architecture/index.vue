<script setup lang="ts">
const articles = await queryCollection('architecture').all()

useSeoMeta({
  title: 'Architecture | Rofik',
  description: 'Architecture notes, system design documents, and engineering decisions.'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <h1 class="text-5xl font-bold text-white">
        Architecture
      </h1>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <NuxtLink
          v-for="article in articles"
          :key="article.id"
          :to="`/architecture/${article.slug}`"
          class="rounded-lg border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
        >
          <h2 class="text-xl font-semibold text-white">
            {{ article.title }}
          </h2>

          <p class="mt-3 text-slate-400">
            {{ article.category || 'System design' }}
          </p>
        </NuxtLink>
      </div>
    </BaseSection>
  </BaseContainer>
</template>
