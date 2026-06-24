<script setup lang="ts">
import type { Profile } from '@/domain/profile/types/Profile'

interface Props {
  profile: Profile
}

defineProps<Props>()
</script>

<template>
  <section class="relative overflow-hidden py-24 sm:py-32" aria-labelledby="hero-heading">
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-black to-black" />

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="max-w-3xl">
        <p class="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Full Stack Software Engineer
        </p>

        <h1 id="hero-heading" class="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Hi, I'm {{ profile.name }}
        </h1>

        <p class="mt-6 text-xl text-slate-300">
          {{ profile.tagline }}
        </p>

        <p class="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          {{ profile.description }}
        </p>

        <div class="mt-10 flex flex-wrap gap-3">
          <span v-for="tech in profile.technologies" :key="tech"
            class="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            {{ tech }}
          </span>
        </div>

        <div class="mt-12 flex flex-wrap gap-4">
          <a href="#projects"
            class="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500">
            View Projects
          </a>

          <a :href="profile.githubUrl" target="_blank" rel="noopener noreferrer"
            class="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:border-slate-500">
            GitHub
          </a>

          <a :href="profile.linkedinUrl" target="_blank" rel="noopener noreferrer"
            class="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:border-slate-500">
            LinkedIn
          </a>

          <a :href="profile.resumeUrl" target="_blank" rel="noopener noreferrer"
            class="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:border-slate-500">
            Resume
          </a>
        </div>
      </div>
    </div>
  </section>
</template>