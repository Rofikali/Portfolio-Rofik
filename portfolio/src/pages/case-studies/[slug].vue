<script setup lang="ts">
const route = useRoute()

const article = await getCaseStudyBySlug(String(route.params.slug))

if (!article) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Case Study Not Found'
    })
}

useSeoMeta({
    title: `${article.title} | Rofik`,
    description: article.summary
})
</script>

<template>
    <BaseContainer>
        <BaseSection>
            <p class="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Case Study
            </p>

            <h1 class="mt-4 text-5xl font-bold text-white">
                {{ article.title }}
            </h1>

            <p class="mt-6 max-w-3xl text-lg text-slate-400">
                {{ article.summary }}
            </p>

            <div class="mt-8 flex flex-wrap gap-2">
                <BaseTag v-for="tech in article.technologies" :key="tech" :label="tech" />
            </div>

            <ContentRenderer class="prose prose-invert max-w-none" :value="article" />
        </BaseSection>
    </BaseContainer>
</template>
