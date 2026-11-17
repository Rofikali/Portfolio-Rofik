<script setup lang="ts">
import { buildSearchIndex, parseSearchScope, searchPortfolio } from '@/application/search/searchPortfolio'

const route = useRoute()
const documents = await getDocumentation()
const projects = await queryCollection('projects').all()
const caseStudies = await queryCollection('caseStudies').all()

const index = buildSearchIndex({ documents, projects, caseStudies })
const rawQuery = computed(() => typeof route.query.q === 'string' ? route.query.q.slice(0, 120) : '')
const scope = computed(() => parseSearchScope(typeof route.query.type === 'string' ? route.query.type : 'all'))
const results = computed(() => searchPortfolio(index, rawQuery.value, scope.value))

const counts = {
  projects: index.filter((entry) => entry.kind === 'projects').length,
  caseStudies: index.filter((entry) => entry.kind === 'case-studies').length,
  docs: index.filter((entry) => entry.kind === 'docs').length
}

const popularTags = [...new Set(documents.flatMap((document) => document.tags))].slice(0, 12)
const tagPath = (tag: string) => `/tags/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}`

const kindLabel = (kind: string) => {
  if (kind === 'projects') return 'Project'
  if (kind === 'case-studies') return 'Case study'
  return 'Engineering document'
}

useSeoMeta({
  title: 'Search | Rofik',
  description: 'Search projects, case studies, and published engineering documentation.'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <div class="grid gap-6 lg:grid-cols-[1fr_16rem]">
        <main>
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">Search</p>
          <h1 class="mt-3 text-4xl font-bold text-white">Search results</h1>

          <form method="get" class="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_auto] sm:items-end">
            <div>
              <label for="search-query" class="mb-2 block text-sm font-medium text-slate-300">Search portfolio</label>
              <input
                id="search-query"
                type="search"
                name="q"
                :value="rawQuery"
                maxlength="120"
                class="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-blue-500"
                placeholder="Search projects, Rust, architecture..."
              >
            </div>
            <div>
              <label for="search-type" class="mb-2 block text-sm font-medium text-slate-300">Content type</label>
              <select
                id="search-type"
                name="type"
                :value="scope"
                class="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white focus:border-blue-500"
              >
                <option value="all">All content</option>
                <option value="projects">Projects</option>
                <option value="case-studies">Case studies</option>
                <option value="docs">Documentation</option>
              </select>
            </div>
            <button type="submit" class="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">Search</button>
          </form>

          <p class="mt-5 text-sm text-slate-400" role="status">
            {{ results.length }} {{ rawQuery.trim() ? 'matching' : 'suggested' }} results{{ results.length === 40 ? ' (first 40)' : '' }}.
          </p>

          <p v-if="results.length === 0" class="mt-5 rounded-lg border border-slate-800 p-5 text-sm text-slate-400">
            No results found. Try another term or content type.
          </p>

          <div v-else class="mt-5 grid gap-4">
            <NuxtLink
              v-for="result in results"
              :key="`${result.kind}:${result.href}`"
              :to="result.href"
              class="surface rounded-lg p-5 transition hover:border-blue-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
            >
              <p class="text-xs font-semibold uppercase tracking-wider text-blue-300">{{ kindLabel(result.kind) }}</p>
              <h2 class="mt-2 text-lg font-semibold text-white">{{ result.title }}</h2>
              <p class="mt-2 text-sm leading-6 text-slate-400">{{ result.summary }}</p>
            </NuxtLink>
          </div>
        </main>

        <aside class="space-y-4">
          <div class="surface rounded-lg p-4">
            <h2 class="text-sm font-semibold text-white">Available content</h2>
            <dl class="mt-4 grid gap-3 text-sm">
              <div class="flex justify-between text-slate-400"><dt>Projects</dt><dd>{{ counts.projects }}</dd></div>
              <div class="flex justify-between text-slate-400"><dt>Case studies</dt><dd>{{ counts.caseStudies }}</dd></div>
              <div class="flex justify-between text-slate-400"><dt>Published docs</dt><dd>{{ counts.docs }}</dd></div>
            </dl>
          </div>
          <div class="surface rounded-lg p-4">
            <h2 class="text-sm font-semibold text-white">Popular documentation tags</h2>
            <div class="mt-4 flex flex-wrap gap-2">
              <NuxtLink
                v-for="tag in popularTags"
                :key="tag"
                :to="tagPath(tag)"
                class="rounded-md border border-slate-800 px-2 py-1 text-xs text-slate-400 hover:border-blue-500 hover:text-white"
              >{{ tag }}</NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </BaseSection>
  </BaseContainer>
</template>
