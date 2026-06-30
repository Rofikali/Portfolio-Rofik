<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<template>
  <figure class="my-6 rounded-lg border border-slate-800 bg-slate-950 p-4">
    <figcaption v-if="title" class="mb-4 text-sm font-semibold text-white">
      {{ title }}
    </figcaption>
    <div class="overflow-x-auto text-sm text-slate-300">
      <slot />
    </div>
  </figure>
</template>
