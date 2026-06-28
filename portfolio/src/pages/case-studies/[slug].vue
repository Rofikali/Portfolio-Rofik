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
    description: article.summary,
    twitterCard: 'summary_large_image'
})

const tableOfContents = [
    'Executive Summary',
    'Problem',
    'Requirements',
    'Architecture',
    'Database Design',
    'Redis Caching',
    'Kafka Event Flow',
    'Deployment',
    'Monitoring',
    'Lessons Learned'
]
</script>

<template>
    <BaseContainer>
        <BaseSection>
            <div class="mb-8 text-sm text-slate-500">
                <NuxtLink to="/" class="hover:text-blue-300">Home</NuxtLink>
                <span class="mx-2">›</span>
                <NuxtLink to="/case-studies" class="hover:text-blue-300">Case Studies</NuxtLink>
                <span class="mx-2">›</span>
                <span>{{ article.title }}</span>
            </div>

            <div class="grid gap-10 lg:grid-cols-[1fr_18rem]">
                <article>
                    <div class="mb-8">
                        <div class="flex flex-wrap items-center gap-3">
                            <span class="rounded-md border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs text-blue-300">
                                {{ article.difficulty }}
                            </span>

                            <span class="text-xs text-slate-500">
                                {{ article.estimatedReadTime }} min read
                            </span>
                        </div>

                        <h1 class="mt-5 text-4xl font-bold text-white">
                            {{ article.title }}
                        </h1>

                        <p class="mt-5 max-w-3xl leading-7 text-slate-400">
                            {{ article.summary }}
                        </p>

                        <div class="mt-6 flex flex-wrap gap-2">
                            <BaseTag v-for="tech in article.technologies" :key="tech" :label="tech" />
                        </div>
                    </div>

                    <ContentRenderer class="prose prose-invert max-w-none" :value="article" />
                </article>

                <aside class="hidden lg:block">
                    <div class="surface sticky top-24 rounded-lg p-5">
                        <h2 class="text-sm font-semibold text-white">
                            On this page
                        </h2>

                        <nav class="mt-4 space-y-2 text-sm text-slate-400">
                            <a
                                v-for="item in tableOfContents"
                                :key="item"
                                :href="`#${item.toLowerCase().replaceAll(' ', '-')}`"
                                class="block hover:text-blue-300"
                            >
                                {{ item }}
                            </a>
                        </nav>
                    </div>
                </aside>
            </div>
        </BaseSection>
    </BaseContainer>
</template>
