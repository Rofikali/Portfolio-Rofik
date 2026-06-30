<script setup lang="ts">
withDefaults(defineProps<{ title: string; positive?: string[]; negative?: string[] }>(), {
  positive: () => [],
  negative: () => []
})
</script>

<template>
  <section class="my-6 rounded-lg border border-slate-800 bg-slate-950 p-4">
    <h3 class="text-base font-semibold text-white">{{ title }}</h3>

    <div class="mt-4 grid gap-4 md:grid-cols-2">
      <div>
        <p class="text-xs font-semibold uppercase text-emerald-300">Positive</p>
        <ul class="mt-2 space-y-2 text-sm text-slate-300">
          <li v-for="item in positive" :key="item">+ {{ item }}</li>
        </ul>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase text-rose-300">Negative</p>
        <ul class="mt-2 space-y-2 text-sm text-slate-300">
          <li v-for="item in negative" :key="item">- {{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
