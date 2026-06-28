<script setup lang="ts">
import type { CaseStudy } from '@/domain/case-study/types/CaseStudy'

interface Props {
    caseStudy: CaseStudy
}

defineProps<Props>()
</script>

<template>
    <NuxtLink
        :to="`/case-studies/${caseStudy.slug}`"
        class="surface grid gap-6 rounded-lg p-6 transition hover:border-blue-500/80 md:grid-cols-[1fr_auto]"
    >
        <div>
            <div class="flex flex-wrap items-center gap-3">
                <span class="rounded-md border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs text-blue-300">
                    {{ caseStudy.difficulty }}
                </span>

                <span class="text-xs text-slate-500">
                    {{ caseStudy.estimatedReadTime }} min read
                </span>
            </div>

            <h2 class="mt-4 text-xl font-semibold text-white">
                {{ caseStudy.title }}
            </h2>

            <p class="mt-3 text-sm leading-6 text-slate-400">
                {{ caseStudy.summary }}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
                <BaseTag
                    v-for="tech in caseStudy.technologies.slice(0, 5)"
                    :key="tech"
                    :label="tech"
                />
            </div>

            <p class="mt-6 text-sm font-medium text-blue-400">
                Read Case Study ->
            </p>
        </div>
    </NuxtLink>
</template>
