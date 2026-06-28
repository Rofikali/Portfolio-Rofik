<script setup lang="ts">
interface Props {
    label: string
}

defineProps<Props>()
</script>

<template>
    <span class="rounded-md border border-slate-700/90 bg-slate-950/50 px-3 py-1.5 text-xs text-slate-300">
        {{ label }}
    </span>
</template>
