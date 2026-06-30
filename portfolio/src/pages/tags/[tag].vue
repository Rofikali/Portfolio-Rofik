<script setup lang="ts">
const route = useRoute()
const tag = String(route.params.tag)
const documents = await getDocumentation()
const results = documents.filter((document) => {
  return document.tags.some((item) => item.toLowerCase().replace(/\s+/g, '-') === tag.toLowerCase())
})

useSeoMeta({
  title: `Tag: ${tag} | Rofik`,
  description: `Knowledge nodes tagged with ${tag}.`
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">Tag</p>
      <h1 class="mt-3 text-4xl font-bold capitalize text-white">Tag: {{ tag }}</h1>
      <p class="mt-3 text-sm text-slate-400">{{ results.length }} results</p>

      <div class="mt-8 grid gap-4">
        <BaseArchitectureCard
          v-for="document in results"
          :key="document.slug"
          :title="document.title"
          :summary="document.summary"
          :to="document.category === 'system-design' ? `/system-design/${document.slug}` : `/${document.category}/${document.subcategory}/${document.slug}`"
        />
      </div>
    </BaseSection>
  </BaseContainer>
</template>
