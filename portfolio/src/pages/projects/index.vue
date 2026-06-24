<!-- <script setup lang="ts">
const projects = await queryCollection('projects')
    .all()
</script>

<template>
    <BaseContainer>
        <BaseSection>
            <h1 class="text-5xl font-bold">
                Projects
            </h1>

            <div class="mt-12 grid gap-8 lg:grid-cols-3">
                <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
            </div>
        </BaseSection>
    </BaseContainer>
</template> -->


<script setup lang="ts">
const projects = await queryCollection('projects')
    .all()

useSeoMeta({
    title: 'Projects | Rofik',
    description: 'Engineering projects and case studies'
})
</script>

<template>
    <BaseContainer>
        <BaseSection>
            <h1 class="text-5xl font-bold">
                Projects
            </h1>

            <div class="mt-12 grid gap-8 lg:grid-cols-3">
                <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
            </div>
        </BaseSection>
    </BaseContainer>
</template>