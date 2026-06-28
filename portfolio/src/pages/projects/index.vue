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
            <div class="mb-10 max-w-2xl">
                <h1 class="text-4xl font-bold text-white">
                    Projects
                </h1>

                <p class="mt-4 text-sm leading-6 text-slate-400">
                    A collection of production-grade projects that showcase my engineering skills.
                </p>
            </div>

            <div class="grid gap-5 lg:grid-cols-3">
                <ProjectCard v-for="project in projectList" :key="project.id" :project="project" />

                <div class="surface flex min-h-[24rem] items-center justify-center rounded-lg p-6 text-center">
                    <div>
                        <p class="text-5xl text-blue-400">
                            ↗
                        </p>

                        <p class="mt-4 text-sm text-slate-400">
                            More coming soon...
                        </p>
                    </div>
                </div>
            </div>
        </BaseSection>
    </BaseContainer>
</template>
