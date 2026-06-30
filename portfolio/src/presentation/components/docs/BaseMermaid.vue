<script setup lang="ts">
defineProps<{ title?: string; code: string }>()
</script>

<template>
  <BaseDiagram :title="title">
    <pre class="whitespace-pre overflow-x-auto rounded-md bg-slate-950 p-4 font-mono text-xs leading-6 text-slate-300"><code>{{ code }}</code></pre>
  </BaseDiagram>
</template>
