<script setup lang="ts">
defineProps<{ label: string; value: string; hint?: string }>()
</script>

<template>
  <div class="rounded-lg border border-slate-800 bg-slate-950 p-4">
    <p class="text-2xl font-bold text-emerald-300">{{ value }}</p>
    <p class="mt-1 text-sm font-medium text-white">{{ label }}</p>
    <p v-if="hint" class="mt-1 text-xs text-slate-500">{{ hint }}</p>
  </div>
</template>
