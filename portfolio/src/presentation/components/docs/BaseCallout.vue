<script setup lang="ts">
withDefaults(defineProps<{ title?: string; tone?: 'info' | 'success' | 'warning' }>(), {
  title: 'Engineering Note',
  tone: 'info'
})
</script>

<template>
  <aside
    class="my-6 rounded-lg border p-4"
    :class="{
      'border-blue-500/40 bg-blue-500/10': tone === 'info',
      'border-emerald-500/40 bg-emerald-500/10': tone === 'success',
      'border-amber-500/40 bg-amber-500/10': tone === 'warning'
    }"
  >
    <p class="text-sm font-semibold text-white">{{ title }}</p>
    <div class="mt-2 text-sm leading-6 text-slate-300">
      <slot />
    </div>
  </aside>
</template>
