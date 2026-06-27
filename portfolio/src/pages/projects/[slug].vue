<script setup lang="ts">
const route = useRoute()

const project = await queryCollection('projects')
    .where('slug', '=', route.params.slug)
    .first()

if (!project) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Project Not Found'
    })
}

useSeoMeta({
    title: `${project.title} | Rofik`,
    description: project.summary,
    ogTitle: project.title,
    ogDescription: project.summary,
    ogImage: project.image,
    twitterCard: 'summary_large_image'
})

const architectureMap: Record<string, string[]> = {
    imgengine: [
        'CLI Interface',
        'Argument Parser',
        'Input Validator',
        'Image Engine',
        'AVX2 SIMD Layer',
        'Output Writer'
    ],

    'lakhimpur-agri-business': [
        'Nuxt Frontend',
        'FastAPI Backend',
        'Redis Cache',
        'PostgreSQL',
        'Kafka Events',
        'Prometheus',
        'Grafana'
    ],

    'tiktok-clone': [
        'Nuxt Frontend',
        'Django REST API',
        'Redis Cache',
        'PostgreSQL',
        'Media Storage Boundary'
    ]
}

const architectureSteps = architectureMap[project.slug] || []
</script>

<template>
    <BaseContainer>
        <BaseSection>
            <div class="grid gap-12 lg:grid-cols-2">
                <div>
                    <span class="rounded-full border border-blue-500/40 px-4 py-2 text-sm text-blue-400">
                        Featured Project
                    </span>

                    <h1 class="mt-6 text-5xl font-bold tracking-tight">
                        {{ project.title }}
                    </h1>

                    <p class="mt-6 text-xl leading-8 text-slate-400">
                        {{ project.summary }}
                    </p>

                    <div class="mt-8 flex flex-wrap gap-3">
                        <BaseTag v-for="tech in project.technologies" :key="tech" :label="tech" />
                    </div>

                    <div class="mt-10 flex flex-wrap gap-4">
                        <a
                            v-if="project.githubUrl"
                            :href="project.githubUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
                        >
                            GitHub
                        </a>

                        <a
                            v-if="project.demoUrl"
                            :href="project.demoUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:border-slate-500"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>

                <img
                    v-if="project.image"
                    :src="project.image"
                    :alt="project.title"
                    class="aspect-video w-full rounded-lg border border-slate-800 object-cover"
                    fetchpriority="high"
                >
            </div>

            <section class="mt-24">
                <h2 class="text-3xl font-bold">
                    Overview
                </h2>

                <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                    {{ project.description }}
                </p>
            </section>

            <section class="mt-24">
                <h2 class="text-3xl font-bold">
                    Architecture Diagram
                </h2>

                <div class="mt-8 rounded-lg border border-slate-800 bg-slate-900 p-8">
                    <div class="flex flex-wrap items-center gap-4">
                        <template v-for="(item, index) in architectureSteps" :key="item">
                            <div class="rounded-lg border border-slate-700 px-4 py-3">
                                {{ item }}
                            </div>

                            <span v-if="index < architectureSteps.length - 1" class="text-slate-500" aria-hidden="true">
                                ->
                            </span>
                        </template>
                    </div>
                </div>
            </section>

            <section class="mt-24">
                <h2 class="text-3xl font-bold">
                    Tech Stack
                </h2>

                <div class="mt-8 flex flex-wrap gap-3">
                    <BaseTag v-for="tech in project.technologies" :key="tech" :label="tech" />
                </div>
            </section>

            <section class="mt-24">
                <h2 class="text-3xl font-bold">
                    Challenges
                </h2>

                <div class="mt-8 grid gap-6 md:grid-cols-2">
                    <div
                        v-for="highlight in project.highlights"
                        :key="highlight"
                        class="rounded-lg border border-slate-800 bg-slate-900 p-5 text-slate-300"
                    >
                        {{ highlight }}
                    </div>
                </div>
            </section>

            <section class="mt-24">
                <h2 class="mb-10 text-3xl font-bold">
                    Engineering Design
                </h2>

                <ContentRenderer :value="project" class="prose prose-invert max-w-none" />
            </section>
        </BaseSection>
    </BaseContainer>
</template>
