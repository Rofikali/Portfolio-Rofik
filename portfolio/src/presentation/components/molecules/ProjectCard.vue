<script setup lang="ts">
import type { Project } from '@/domain/project/types/Project'

interface Props {
    project: Project
}

defineProps<Props>()
</script>

<template>
    <article class="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <img :src="project.image" :alt="project.title" class="h-56 w-full object-cover">

        <div class="p-6">
            <h3 class="text-xl font-semibold text-white">
                {{ project.title }}
            </h3>

            <p class="mt-3 text-slate-400">
                {{ project.summary }}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
                <BaseTag v-for="tech in project.technologies" :key="tech" :label="tech" />
            </div>

            <div class="mt-6 flex gap-4">
                <a :href="project.githubUrl" target="_blank" class="text-blue-400">
                    GitHub
                </a>

                <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="text-blue-400">
                    Demo
                </a>
            </div>
        </div>
    </article>
</template>