<script setup lang="ts">
const articles = await queryCollection('architecture').all()
const articleList = articles.filter((article) => article.slug && article.title)
const documents = await getDocumentation()
const architectureDocs = documents.filter((document) => document.category === 'architecture')

const documentationPath = (document: typeof architectureDocs[number]) => {
  return `/architecture/${document.subcategory}/${document.slug}`
}

useSeoMeta({
  title: 'Architecture | Rofik',
  description: 'Architecture notes, system design documents, and engineering decisions.'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <div class="mb-10 max-w-2xl">
        <h1 class="text-4xl font-bold text-white">
          Architecture
        </h1>

        <p class="mt-4 text-sm leading-6 text-slate-400">
          Technical articles and deep dives into system design, architecture, and engineering decisions.
        </p>
      </div>

      <div class="mb-8 grid gap-4 md:grid-cols-3">
        <div class="surface rounded-lg p-5">
          <p class="text-xs font-semibold uppercase text-blue-400">HLD</p>
          <p class="mt-2 text-sm text-slate-400">C4 context, container, and system boundary documents.</p>
        </div>
        <div class="surface rounded-lg p-5">
          <p class="text-xs font-semibold uppercase text-blue-400">LLD</p>
          <p class="mt-2 text-sm text-slate-400">Request flow, sequence diagrams, data model, and module design.</p>
        </div>
        <div class="surface rounded-lg p-5">
          <p class="text-xs font-semibold uppercase text-blue-400">ADR</p>
          <p class="mt-2 text-sm text-slate-400">Decision records with context, alternatives, and consequences.</p>
        </div>
      </div>

      <div class="grid gap-4">
        <BaseArchitectureCard
          v-for="document in architectureDocs"
          :key="document.slug"
          :title="document.title"
          :summary="document.summary"
          :to="documentationPath(document)"
        />

        <NuxtLink
          v-for="article in articleList"
          :key="article.id"
          :to="`/architecture/${article.slug}`"
          class="surface flex items-center justify-between rounded-lg p-5 transition hover:border-blue-500/80"
        >
          <div>
            <h2 class="text-lg font-semibold text-white">
              {{ article.title }}
            </h2>

            <p class="mt-2 text-sm text-slate-400">
              {{ article.category || 'System design' }}
            </p>
          </div>

          <span class="text-slate-500" aria-hidden="true">&rsaquo;</span>
        </NuxtLink>
      </div>
    </BaseSection>
  </BaseContainer>
</template>
