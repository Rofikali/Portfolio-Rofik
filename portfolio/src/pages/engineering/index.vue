<script setup lang="ts">
const documents = await getDocumentation()
const engineeringDocs = documents.filter((document) => document.category === 'engineering')

const groups = [
  { title: 'Principles', summary: 'SOLID, DRY, KISS, YAGNI, DDD, and clean architecture.', count: 12 },
  { title: 'Design Patterns', summary: 'Repository, Factory, Strategy, Adapter, Command, and more.', count: engineeringDocs.length },
  { title: 'Clean Architecture', summary: 'Boundaries, use cases, repositories, adapters, and dependency flow.', count: 8 },
  { title: 'Performance', summary: 'Caching, profiling, query tuning, and delivery optimization.', count: 6 },
  { title: 'Security', summary: 'Authentication, authorization, validation, and secure defaults.', count: 7 },
  { title: 'Observability', summary: 'Logging, metrics, tracing, alerts, and incident learning.', count: 10 }
]

useSeoMeta({
  title: 'Engineering | Rofik',
  description: 'Engineering principles, patterns, practices, and technical knowledge nodes.'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
            Engineering
          </p>
          <h1 class="mt-3 text-4xl font-bold text-white">Engineering</h1>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Principles, patterns, best practices, and technical knowledge for backend and full-stack systems.
          </p>
        </div>

        <NuxtLink to="/search" class="rounded-lg border border-slate-800 px-4 py-2 text-sm text-slate-300 hover:border-blue-500">
          Search knowledge base
        </NuxtLink>
      </div>

      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="group in groups" :key="group.title" class="surface rounded-lg p-5">
          <h2 class="text-lg font-semibold text-white">{{ group.title }}</h2>
          <p class="mt-2 text-sm leading-6 text-slate-400">{{ group.summary }}</p>
          <p class="mt-4 text-xs text-slate-500">{{ group.count }} articles</p>
        </div>
      </div>

      <div class="mt-8 grid gap-4">
        <BaseArchitectureCard
          v-for="document in engineeringDocs"
          :key="document.slug"
          :title="document.title"
          :summary="document.summary"
          :to="`/engineering/${document.subcategory}/${document.slug}`"
        />
      </div>
    </BaseSection>
  </BaseContainer>
</template>
