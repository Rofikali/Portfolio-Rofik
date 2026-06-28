<script setup lang="ts">
import type { Profile } from '@/domain/profile/types/Profile'

interface Props {
  profile: Profile
}

defineProps<Props>()
</script>

<template>
  <section class="relative overflow-hidden py-16 sm:py-24" aria-labelledby="hero-heading">
    <BaseContainer>
      <div class="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Full Stack Software Engineer
          </p>

          <h1 id="hero-heading" class="mt-5 text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Hi, I'm <span class="text-blue-500">{{ profile.name }}</span>
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {{ profile.tagline }}
          </p>

          <p class="mt-5 max-w-2xl leading-7 text-slate-400">
            {{ profile.description }}
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            <BaseTag v-for="tech in profile.technologies" :key="tech" :label="tech" />
          </div>

          <div class="mt-10 flex flex-wrap gap-3">
            <a href="#projects" class="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              View Projects
            </a>

            <a :href="profile.resumeUrl" class="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-500">
              Download Resume
            </a>
          </div>
        </div>

        <div class="surface rounded-lg p-6">
          <div class="mb-5 flex items-center gap-2 text-xs text-slate-500">
            <span class="size-2 rounded-full bg-red-400" />
            <span class="size-2 rounded-full bg-yellow-400" />
            <span class="size-2 rounded-full bg-green-400" />
            <span class="ml-2">rofik@portfolio:~/terminal</span>
          </div>

          <pre class="overflow-hidden font-mono text-sm leading-7 text-green-400"><code>ROFIK

> Backend Engineer
> System Design Enthusiast
> Clean Architecture Advocate
> Open Source Contributor</code></pre>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
