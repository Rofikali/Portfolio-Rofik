<script setup lang="ts">
defineProps<{ tags: string[] }>()

const tagPath = (tag: string) => {
  return `/tags/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}`
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <NuxtLink
      v-for="tag in tags"
      :key="tag"
      :to="tagPath(tag)"
      class="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300 transition hover:border-blue-500 hover:text-white"
    >
      {{ tag }}
    </NuxtLink>
  </div>
</template>
