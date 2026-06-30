<script setup lang="ts">
defineProps<{ title: string; summary: string; to: string }>()
</script>

<template>
  <NuxtLink :to="to" class="surface block rounded-lg p-5 transition hover:border-blue-500/80">
    <h3 class="text-base font-semibold text-white">{{ title }}</h3>
    <p class="mt-2 text-sm leading-6 text-slate-400">{{ summary }}</p>
  </NuxtLink>
</template>
