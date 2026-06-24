<script setup lang="ts">
import type { Project } from '@/domain/project/types/Project'

interface Props {
    projects: Project[]
}

defineProps<Props>()
</script>

<template>
    <section id="projects" class="py-24">
        <BaseContainer>
            <h2 class="text-3xl font-bold text-white">
                Featured Projects
            </h2>

            <p class="mt-4 text-slate-400">
                Production-grade projects demonstrating backend,
                frontend and systems engineering.
            </p>

            <div class="mt-12 grid gap-8 lg:grid-cols-3">
                <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
            </div>
        </BaseContainer>
    </section>
</template>