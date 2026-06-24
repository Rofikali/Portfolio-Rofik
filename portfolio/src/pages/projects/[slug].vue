<!-- <script setup lang="ts">
const route = useRoute()

const project = await queryCollection('projects')
    .where('slug', '=', route.params.slug)
    .first()
</script>

<template>
    <BaseContainer>
        <BaseSection>
            <h1 class="text-5xl font-bold">
                {{ project?.title }}
            </h1>

            <p class="mt-6 text-slate-400">
                {{ project?.description }}
            </p>
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
</template>