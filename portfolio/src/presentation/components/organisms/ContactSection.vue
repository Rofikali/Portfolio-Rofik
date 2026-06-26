<script setup lang="ts">
import { contactLinks } from '@/infrastructure/content/contact/contactLinks'
</script>

<template>
    <section id="contact" class="py-24">
        <BaseContainer>

            <div class="max-w-3xl">

                <span class="text-blue-400 uppercase tracking-wider">
                    Contact
                </span>

                <h2 class="mt-4 text-4xl font-bold">
                    Let's Build Something Great
                </h2>

                <p class="mt-6 text-slate-400">
                    Interested in backend engineering,
                    platform engineering,
                    FastAPI development,
                    Django applications,
                    or performance-focused systems?
                </p>

            </div>

            <div class="mt-12 grid gap-6 md:grid-cols-3">
                <a v-for="link in contactLinks" :key="link.label" :href="link.url" target="_blank"
                    class="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500">
                    <h3 class="font-semibold">
                        {{ link.label }}
                    </h3>

                    <p class="mt-2 text-sm text-slate-400">
                        {{ link.description }}
                    </p>
                </a>
            </div>

        </BaseContainer>
    </section>
</template>