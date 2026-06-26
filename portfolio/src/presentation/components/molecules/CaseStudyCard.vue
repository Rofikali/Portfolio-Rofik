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
        class="block rounded-lg border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
    >
        <div class="flex items-center justify-between gap-4">
            <span class="text-sm font-medium text-blue-400">
                {{ caseStudy.difficulty }}
            </span>

            <span class="text-sm text-slate-500">
                {{ caseStudy.estimatedReadTime }} min
            </span>
        </div>

        <h2 class="mt-5 text-xl font-semibold text-white">
            {{ caseStudy.title }}
        </h2>

        <p class="mt-3 text-slate-400">
            {{ caseStudy.summary }}
        </p>

        <div class="mt-5 flex flex-wrap gap-2">
            <BaseTag
                v-for="tech in caseStudy.technologies.slice(0, 4)"
                :key="tech"
                :label="tech"
            />
        </div>
    </NuxtLink>
</template>
