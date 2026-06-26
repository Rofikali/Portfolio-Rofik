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
      <h1 class="text-5xl font-bold text-white">
        Case Studies
      </h1>

      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <CaseStudyCard
          v-for="study in caseStudies"
          :key="study.id"
          :case-study="study"
        />
      </div>
    </BaseSection>
  </BaseContainer>
</template>
