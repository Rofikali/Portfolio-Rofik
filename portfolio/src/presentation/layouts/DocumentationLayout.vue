<script setup lang="ts">
import type { Documentation } from '@/domain/documentation/entities/Documentation'

interface Props {
  document: Documentation
  related?: Documentation[]
}

const props = withDefaults(defineProps<Props>(), {
  related: () => []
})

const metadata = computed(() => [
  props.document.category,
  props.document.subcategory,
  `${props.document.readingTime} min read`,
  props.document.difficulty,
  `v${props.document.version}`
].filter(Boolean))

const documentRoute = (document: Documentation) => {
  if (document.category === 'system-design') {
    return `/system-design/${document.slug}`
  }

  return `/${document.category}/${document.subcategory}/${document.slug}`
}
</script>

<template>
  <BaseContainer>
    <article class="py-8">
      <div class="grid gap-6 lg:grid-cols-[13rem_1fr] xl:grid-cols-[13rem_1fr_14rem]">
        <aside class="hidden lg:block">
          <div class="surface sticky top-24 rounded-lg p-4">
            <p class="text-xs font-semibold uppercase text-slate-500">
              On this page
            </p>

            <nav class="mt-4 grid gap-2 text-sm text-slate-400">
              <a href="#overview" class="hover:text-white">Overview</a>
              <a href="#problem" class="hover:text-white">Problem</a>
              <a href="#solution" class="hover:text-white">Solution</a>
              <a href="#tradeoffs" class="hover:text-white">Tradeoffs</a>
              <a href="#references" class="hover:text-white">References</a>
            </nav>
          </div>
        </aside>

        <main class="min-w-0">
          <div class="surface rounded-lg p-6 sm:p-8">
            <nav class="mb-5 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <NuxtLink to="/" class="hover:text-blue-300">Home</NuxtLink>
              <span>/</span>
              <NuxtLink :to="`/${document.category}`" class="capitalize hover:text-blue-300">
                {{ document.category }}
              </NuxtLink>
              <span>/</span>
              <span class="text-slate-300">{{ document.title }}</span>
            </nav>

            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              {{ document.category }} / {{ document.subcategory }}
            </p>

            <h1 class="mt-4 text-3xl font-bold text-white sm:text-4xl">
              {{ document.title }}
            </h1>

            <p class="mt-4 max-w-3xl text-sm leading-6 text-slate-400">
              {{ document.summary }}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="item in metadata"
                :key="item"
                class="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
              >
                {{ item }}
              </span>
            </div>

            <BaseTagGroup class="mt-5" :tags="document.tags" />
          </div>

          <div class="surface prose prose-invert mt-6 max-w-none rounded-lg p-6 sm:p-8">
            <slot />
          </div>

          <section v-if="related.length" class="mt-6">
            <h2 class="text-lg font-semibold text-white">
              Related Articles
            </h2>

            <div class="mt-4 grid gap-3 sm:grid-cols-2">
              <NuxtLink
                v-for="item in related"
                :key="item.slug"
                :to="documentRoute(item)"
                class="surface rounded-lg p-4 transition hover:border-blue-500/80"
              >
                <p class="text-sm font-semibold text-white">{{ item.title }}</p>
                <p class="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">{{ item.summary }}</p>
              </NuxtLink>
            </div>
          </section>
        </main>

        <aside class="hidden xl:block">
          <div class="surface sticky top-24 rounded-lg p-4">
            <p class="text-xs font-semibold uppercase text-slate-500">
              Metadata
            </p>

            <dl class="mt-4 grid gap-3 text-xs">
              <div>
                <dt class="text-slate-500">Author</dt>
                <dd class="mt-1 text-slate-300">{{ document.author }}</dd>
              </div>
              <div>
                <dt class="text-slate-500">Published</dt>
                <dd class="mt-1 text-slate-300">{{ document.publishedAt }}</dd>
              </div>
              <div>
                <dt class="text-slate-500">Updated</dt>
                <dd class="mt-1 text-slate-300">{{ document.updatedAt }}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </article>
  </BaseContainer>
</template>
