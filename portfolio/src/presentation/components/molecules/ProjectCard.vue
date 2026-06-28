<script setup lang="ts">
import type { Project } from '@/domain/project/types/Project'

interface Props {
    project: Project
}

defineProps<Props>()
</script>

<template>
    <article class="surface group flex h-full flex-col overflow-hidden rounded-lg transition hover:border-blue-500/80">
        <NuxtLink :to="`/projects/${project.slug}`" class="block">
            <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                class="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
            >

            <div v-else class="flex aspect-video items-center justify-center bg-slate-950 text-slate-500">
                {{ project.title }}
            </div>
        </NuxtLink>

        <div class="flex flex-1 flex-col p-5">
            <h3 class="text-lg font-semibold text-white">
                {{ project.title }}
            </h3>

            <p class="mt-3 flex-1 text-sm leading-6 text-slate-400">
                {{ project.summary }}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
                <BaseTag v-for="tech in project.technologies.slice(0, 5)" :key="tech" :label="tech" />
            </div>

            <div class="mt-6 flex items-center justify-between text-sm">
                <NuxtLink :to="`/projects/${project.slug}`" class="font-medium text-blue-400 hover:text-blue-300">
                    View Project ->
                </NuxtLink>

                <a
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-slate-500 hover:text-white"
                >
                    GitHub
                </a>
            </div>
        </div>
    </article>
</template>
