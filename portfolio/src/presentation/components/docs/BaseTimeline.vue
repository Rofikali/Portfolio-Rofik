<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
  <ol class="my-6 grid gap-3">
    <li v-for="(item, index) in items" :key="item" class="flex gap-3 text-sm text-slate-300">
      <span class="grid size-7 shrink-0 place-items-center rounded-full border border-blue-500/40 bg-blue-500/10 text-xs text-blue-300">
        {{ index + 1 }}
      </span>
      <span class="pt-1">{{ item }}</span>
    </li>
  </ol>
</template>
