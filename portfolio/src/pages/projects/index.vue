<script setup lang="ts">
import type { Project } from '@/domain/project/types/Project'

const projects = await queryCollection('projects')
    .all()

const projectList = projects as Project[]

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
                <ProjectCard v-for="project in projectList" :key="project.id" :project="project" />
            </div>
        </BaseSection>
    </BaseContainer>
</template>
