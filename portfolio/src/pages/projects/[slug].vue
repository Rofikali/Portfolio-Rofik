<!-- src/pages/projects/[slug].vue 

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
    title: project.title,
    description: project.summary
})
</script>

<template>
    <BaseContainer>
        <BaseSection>
            <h1 class="text-5xl font-bold">
                {{ project.title }}
            </h1>

            <p class="mt-6 text-lg text-slate-400">
                {{ project.description }}
            </p>

            <div class="mt-8 flex flex-wrap gap-2">
                <BaseTag v-for="tech in project.technologies" :key="tech" :label="tech" />
            </div>

            <ContentRenderer class="prose prose-invert mt-12 max-w-none" :value="project" />
        </BaseSection>
    </BaseContainer>
</template> -->

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
    ogImage: project.image
})

const architectureMap: Record<string, string[]> = {
    imgengine: [
        'CLI Interface',
        'Argument Parser',
        'Image Engine',
        'AVX2 SIMD Layer',
        'Output Writer'
    ],

    'lakhimpur-agri-business': [
        'Nuxt Frontend',
        'FastAPI Backend',
        'Redis Cache',
        'PostgreSQL',
        'Prometheus + Grafana'
    ],

    'tiktok-clone': [
        'Nuxt Frontend',
        'Django REST API',
        'Redis',
        'PostgreSQL'
    ]
}
</script>

<template>
    <BaseContainer>
        <BaseSection>

            <!-- Hero -->

            <div class="grid gap-12 lg:grid-cols-2">

                <div>
                    <span class="rounded-full border border-blue-500/40 px-4 py-2 text-sm text-blue-400">
                        Featured Project
                    </span>

                    <h1 class="mt-6 text-5xl font-bold tracking-tight">
                        {{ project.title }}
                    </h1>

                    <p class="mt-6 text-xl text-slate-400">
                        {{ project.summary }}
                    </p>

                    <div class="mt-8 flex flex-wrap gap-3">
                        <BaseTag v-for="tech in project.technologies" :key="tech" :label="tech" />
                    </div>

                    <div class="mt-10 flex gap-4">
                        <a :href="project.githubUrl" target="_blank"
                            class="rounded-lg bg-blue-600 px-6 py-3 font-medium">
                            View Source
                        </a>

                        <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank"
                            class="rounded-lg border border-slate-700 px-6 py-3">
                            Live Demo
                        </a>
                    </div>
                </div>

                <div>
                    <img :src="project.image" :alt="project.title" class="w-full rounded-2xl border border-slate-800">
                </div>

            </div>

            <!-- Key Highlights -->

            <section class="mt-24">

                <h2 class="text-3xl font-bold">
                    Engineering Highlights
                </h2>

                <div class="mt-8 grid gap-6 md:grid-cols-2">
                    <div v-for="highlight in project.highlights" :key="highlight"
                        class="rounded-xl border border-slate-800 bg-slate-900 p-5">
                        {{ highlight }}
                    </div>
                </div>

            </section>

            <!-- Architecture -->

            <section class="mt-24">

                <h2 class="text-3xl font-bold">
                    Architecture Overview
                </h2>

                <div class="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8">
                    <div class="flex flex-wrap items-center gap-4">
                        <template v-for="(item, index) in architectureMap[project.slug]" :key="item">
                            <div class="rounded-lg border border-slate-700 px-4 py-3">
                                {{ item }}
                            </div>

                            <span v-if="index < architectureMap[project.slug].length - 1" class="text-slate-500">
                                →
                            </span>
                        </template>
                    </div>
                </div>

            </section>

            <!-- Project Content -->

            <section class="mt-24">

                <h2 class="mb-10 text-3xl font-bold">
                    Project Details
                </h2>

                <ContentRenderer :value="project" class="prose prose-invert max-w-none" />

            </section>

            <!-- Lessons Learned -->

            <section class="mt-24">

                <h2 class="text-3xl font-bold">
                    Lessons Learned
                </h2>

                <div class="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8">
                    <ul class="space-y-3 text-slate-300">
                        <li>
                            Design for maintainability before optimization.
                        </li>

                        <li>
                            Measure performance before tuning.
                        </li>

                        <li>
                            Observability should be built in from day one.
                        </li>

                        <li>
                            Simplicity scales better than complexity.
                        </li>
                    </ul>
                </div>

            </section>

        </BaseSection>
    </BaseContainer>
</template>