<script setup lang="ts">
interface Props {
    href?: string
    variant?: 'primary' | 'secondary'
}

withDefaults(
    defineProps<Props>(),
    {
        variant: 'primary'
    }
)
</script>

<template>
    <a :href="href" :class="[
        'rounded-lg px-6 py-3 font-medium transition',

        variant === 'primary'
            ? 'bg-blue-600 text-white hover:bg-blue-500'
            : 'border border-slate-700 text-slate-300 hover:border-slate-500'
    ]">
        <slot />
    </a>
</template>