<script setup lang="ts">
const caseStudies = await queryCollection('caseStudies').all()

useSeoMeta({
  title: 'Case Studies | Rofik',
  description: 'Engineering case studies from Rofik.'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <h1 class="text-5xl font-bold text-white">
        Case Studies
      </h1>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <NuxtLink
          v-for="study in caseStudies"
          :key="study.id"
          :to="`/case-studies/${study.slug}`"
          class="rounded-lg border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
        >
          <h2 class="text-xl font-semibold text-white">
            {{ study.title }}
          </h2>

          <p class="mt-3 text-slate-400">
            {{ study.project || 'Engineering case study' }}
          </p>
        </NuxtLink>
      </div>
    </BaseSection>
  </BaseContainer>
</template>
