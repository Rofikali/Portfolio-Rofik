<script setup lang="ts">
const route = useRoute()
const documents = await getDocumentation()
const projects = await queryCollection('projects').all()
const caseStudies = await queryCollection('caseStudies').all()

const query = computed(() => String(route.query.q ?? '').toLowerCase())

const documentationResults = computed(() => {
  if (!query.value) {
    return documents.slice(0, 8)
  }

  return documents.filter((document) => {
    const searchable = [
      document.title,
      document.summary,
      document.category,
      document.subcategory,
      ...document.tags,
      ...document.technologies
    ].join(' ').toLowerCase()

    return searchable.includes(query.value)
  })
})

const popularTags = computed(() => [...new Set(documents.flatMap((document) => document.tags))].slice(0, 12))

const tagPath = (tag: string) => {
  return `/tags/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}`
}

useSeoMeta({
  title: 'Search | Rofik',
  description: 'Search engineering articles, projects, case studies, architecture notes, and system design documents.'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <div class="grid gap-6 lg:grid-cols-[1fr_16rem]">
        <main>
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">Search</p>
          <h1 class="mt-3 text-4xl font-bold text-white">Search results</h1>

          <form class="mt-6">
            <input
              name="q"
              :value="query"
              class="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
              placeholder="Search engineering topics..."
            >
          </form>

          <div class="mt-6 grid gap-4">
            <NuxtLink
              v-for="document in documentationResults"
              :key="document.slug"
              :to="document.category === 'system-design' ? `/system-design/${document.slug}` : `/${document.category}/${document.subcategory}/${document.slug}`"
              class="surface rounded-lg p-5 transition hover:border-blue-500/80"
            >
              <div class="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span>{{ document.category }}</span>
                <span>/</span>
                <span>{{ document.subcategory }}</span>
                <span>{{ document.readingTime }} min</span>
              </div>
              <h2 class="mt-2 text-lg font-semibold text-white">{{ document.title }}</h2>
              <p class="mt-2 text-sm leading-6 text-slate-400">{{ document.summary }}</p>
            </NuxtLink>
          </div>
        </main>

        <aside class="space-y-4">
          <div class="surface rounded-lg p-4">
            <p class="text-sm font-semibold text-white">Filter by type</p>
            <dl class="mt-4 grid gap-3 text-sm">
              <div class="flex justify-between text-slate-400"><dt>Projects</dt><dd>{{ projects.length }}</dd></div>
              <div class="flex justify-between text-slate-400"><dt>Case Studies</dt><dd>{{ caseStudies.length }}</dd></div>
              <div class="flex justify-between text-slate-400"><dt>Docs</dt><dd>{{ documents.length }}</dd></div>
            </dl>
          </div>

          <div class="surface rounded-lg p-4">
            <p class="text-sm font-semibold text-white">Popular tags</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <NuxtLink
                v-for="tag in popularTags"
                :key="tag"
                :to="tagPath(tag)"
                class="rounded-md border border-slate-800 px-2 py-1 text-xs text-slate-400 hover:border-blue-500 hover:text-white"
              >
                {{ tag }}
              </NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </BaseSection>
  </BaseContainer>
</template>
