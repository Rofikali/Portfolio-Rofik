<script setup lang="ts">
import { profile } from '@/infrastructure/content/profile/profile'

useSeoMeta({
  title: 'About | Rofik',
  description: 'About Rofik, a backend and full-stack software engineer focused on clean architecture and scalable systems.'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <div class="grid gap-6 lg:grid-cols-[1fr_24rem]">
        <main class="surface rounded-lg p-6">
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">About Me</p>
          <h1 class="mt-3 text-4xl font-bold text-white">{{ profile.name }}</h1>
          <p class="mt-4 text-sm leading-7 text-slate-300">{{ profile.description }}</p>

          <div class="mt-8 grid gap-4 sm:grid-cols-4">
            <BaseMetric label="Years Experience" value="5+" />
            <BaseMetric label="Projects" value="20+" />
            <BaseMetric label="Articles" value="50+" />
            <BaseMetric label="Technologies" value="10+" />
          </div>
        </main>

        <aside class="surface rounded-lg p-6">
          <div class="aspect-square rounded-lg border border-slate-800 bg-gradient-to-br from-blue-500/30 to-emerald-500/20" />
          <h2 class="mt-5 text-lg font-semibold text-white">Principal-minded engineer</h2>
          <p class="mt-2 text-sm leading-6 text-slate-400">
            I design, build, document, test, and evolve systems with production habits: clear boundaries, explicit tradeoffs, and maintainable delivery.
          </p>
        </aside>
      </div>
    </BaseSection>
  </BaseContainer>
</template>
