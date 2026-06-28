<script setup lang="ts">
const caseStudies = await getCaseStudies()

useSeoMeta({
  title: 'Case Studies | Rofik',
  description: 'Engineering case studies from Rofik.'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <div class="mb-10 max-w-2xl">
        <h1 class="text-4xl font-bold text-white">
          Case Studies
        </h1>

        <p class="mt-4 text-sm leading-6 text-slate-400">
          In-depth engineering case studies that explore architecture, decisions, and lessons learned.
        </p>
      </div>

      <div class="grid gap-5">
        <CaseStudyCard
          v-for="study in caseStudies"
          :key="study.id"
          :case-study="study"
        />
      </div>
    </BaseSection>
  </BaseContainer>
</template>
