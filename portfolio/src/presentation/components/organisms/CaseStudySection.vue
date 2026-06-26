<script setup lang="ts">
import type { CaseStudy } from '@/domain/case-study/types/CaseStudy'

interface Props {
    caseStudies: CaseStudy[]
}

defineProps<Props>()
</script>

<template>
    <section id="case-studies" class="py-24">
        <BaseContainer>
            <h2 class="text-3xl font-bold text-white">
                Case Studies
            </h2>

            <p class="mt-4 max-w-2xl text-slate-400">
                Deep dives into architecture, tradeoffs, delivery decisions, and engineering lessons.
            </p>

            <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <CaseStudyCard
                    v-for="caseStudy in caseStudies"
                    :key="caseStudy.id"
                    :case-study="caseStudy"
                />
            </div>
        </BaseContainer>
    </section>
</template>
