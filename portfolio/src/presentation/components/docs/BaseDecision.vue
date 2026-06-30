<script setup lang="ts">
defineProps<{ status?: string; decision: string }>()
</script>

<template>
  <section class="my-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
    <p class="text-xs font-semibold uppercase text-emerald-300">
      Decision <span v-if="status">/ {{ status }}</span>
    </p>
    <p class="mt-2 text-sm leading-6 text-slate-200">{{ decision }}</p>
  </section>
</template>
