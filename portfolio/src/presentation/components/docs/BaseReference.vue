<script setup lang="ts">
defineProps<{ title: string; href?: string }>()
</script>

<template>
  <a
    v-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="block rounded-lg border border-slate-800 bg-slate-950 p-4 text-sm text-blue-300 transition hover:border-blue-500"
  >
    {{ title }}
  </a>
  <div v-else class="rounded-lg border border-slate-800 bg-slate-950 p-4 text-sm text-slate-300">
    {{ title }}
  </div>
</template>
