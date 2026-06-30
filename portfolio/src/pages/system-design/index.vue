<script setup lang="ts">
const documents = await getDocumentation()
const systemDesignDocs = documents.filter((document) => document.category === 'system-design')

useSeoMeta({
  title: 'System Design | Rofik',
  description: 'System design case studies with requirements, architecture, data model, scaling, and tradeoffs.'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <div class="mb-8">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">System Design</p>
        <h1 class="mt-3 text-4xl font-bold text-white">System Design</h1>
        <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
          Interview-grade designs with APIs, data models, caching, messaging, monitoring, and tradeoffs.
        </p>
      </div>

      <div class="grid gap-4">
        <BaseArchitectureCard
          v-for="document in systemDesignDocs"
          :key="document.slug"
          :title="document.title"
          :summary="document.summary"
          :to="`/system-design/${document.slug}`"
        />
      </div>
    </BaseSection>
  </BaseContainer>
</template>
