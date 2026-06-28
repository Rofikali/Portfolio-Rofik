<script setup lang="ts">
import type { Project } from '@/domain/project/types/Project'

interface Props {
    projects: Project[]
}

defineProps<Props>()
</script>

<template>
    <section id="projects" class="py-16">
        <BaseContainer>
            <div class="mb-10 flex items-end justify-between gap-6">
                <div>
                    <h2 class="text-3xl font-bold text-white">
                        Featured Projects
                    </h2>

                    <p class="mt-3 text-sm text-slate-400">
                        Production-grade projects demonstrating backend, frontend, and systems engineering.
                    </p>
                </div>

                <NuxtLink to="/projects" class="hidden text-sm font-medium text-blue-400 hover:text-blue-300 sm:block">
                    View all projects ->
                </NuxtLink>
            </div>

            <div class="grid gap-5 md:grid-cols-3">
                <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
            </div>
        </BaseContainer>
    </section>
</template>
