<script setup lang="ts">
interface Props {
    label: string
}

defineProps<Props>()
</script>

<template>
    <span class="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
        {{ label }}
    </span>
</template>