<script setup lang="ts">
const skills: [string, number][] = [
  ['Python', 95],
  ['FastAPI', 92],
  ['System Design', 90],
  ['PostgreSQL', 88],
  ['Docker', 86],
  ['Redis', 84],
  ['Kafka', 80],
  ['Nuxt', 85]
]

const printResume = () => {
  if (import.meta.client) {
    window.print()
  }
}

useSeoMeta({
  title: 'Resume | Rofik',
  description: 'Resume, experience, skills, and engineering background.'
})
</script>

<template>
  <BaseContainer>
    <BaseSection>
      <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">Resume</p>
          <h1 class="mt-3 text-4xl font-bold text-white">Resume</h1>
        </div>

        <div class="flex gap-2">
          <a href="/resume.pdf" class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">Download PDF</a>
          <button class="rounded-lg border border-slate-800 px-4 py-2 text-sm text-slate-300 hover:border-blue-500" type="button" @click="printResume">
            Print
          </button>
        </div>
      </div>

      <div class="grid gap-6 lg:grid-cols-[1fr_24rem]">
        <main class="space-y-6">
          <section class="surface rounded-lg p-6">
            <h2 class="text-lg font-semibold text-white">Experience</h2>
            <div class="mt-5 grid gap-5">
              <div>
                <div class="flex justify-between gap-4">
                  <h3 class="font-semibold text-white">Backend Engineer</h3>
                  <span class="text-xs text-slate-500">2020 - Present</span>
                </div>
                <p class="mt-2 text-sm leading-6 text-slate-400">
                  Building scalable APIs, database-backed systems, and production-ready web applications.
                </p>
              </div>
              <div>
                <div class="flex justify-between gap-4">
                  <h3 class="font-semibold text-white">Full Stack Engineer</h3>
                  <span class="text-xs text-slate-500">2018 - 2020</span>
                </div>
                <p class="mt-2 text-sm leading-6 text-slate-400">
                  Delivered user-facing products with Vue, Nuxt, Django, FastAPI, PostgreSQL, and Docker.
                </p>
              </div>
            </div>
          </section>

          <section class="surface rounded-lg p-6">
            <h2 class="text-lg font-semibold text-white">Education</h2>
            <p class="mt-4 text-sm leading-6 text-slate-400">Bachelor-level computer science foundation with practical systems, backend, and web engineering focus.</p>
          </section>
        </main>

        <aside class="surface rounded-lg p-6">
          <h2 class="text-lg font-semibold text-white">Skills</h2>
          <div class="mt-5 grid gap-4">
            <div v-for="[skill, value] in skills" :key="skill">
              <div class="flex justify-between text-sm">
                <span class="text-slate-300">{{ skill }}</span>
                <span class="text-slate-500">{{ value }}%</span>
              </div>
              <div class="mt-2 h-2 rounded-full bg-slate-900">
                <div class="h-2 rounded-full bg-blue-500" :style="{ width: `${value}%` }" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </BaseSection>
  </BaseContainer>
</template>
