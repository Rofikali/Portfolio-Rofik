<script setup lang="ts">
interface Principle {
    title: string
    description: string
}

defineProps<{
    principles: Principle[]
}>()
</script>

<template>
    <section class="py-24">
        <BaseContainer>
            <h2 class="text-3xl font-bold text-white">
                Engineering Principles
            </h2>

            <div class="mt-10 grid gap-6 lg:grid-cols-3">
                <article v-for="principle in principles" :key="principle.title"
                    class="rounded-xl border border-slate-800 bg-slate-900 p-6">
                    <h3 class="font-semibold text-white">
                        {{ principle.title }}
                    </h3>

                    <p class="mt-3 text-slate-400">
                        {{ principle.description }}
                    </p>
                </article>
            </div>
        </BaseContainer>
    </section>
</template>