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
            : 'bg-white text-slate-950 hover:bg-slate-200'
    ]">
        <slot />
    </a>
</template>
