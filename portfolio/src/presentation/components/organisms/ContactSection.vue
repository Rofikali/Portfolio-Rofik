<script setup lang="ts">
import { contactLinks } from '@/infrastructure/content/contact/contactLinks'
</script>

<template>
    <section id="contact" class="py-16">
        <BaseContainer>
            <div class="surface rounded-lg p-8 sm:p-10">
                <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p class="text-sm font-semibold text-blue-400">
                            Contact
                        </p>

                        <h2 class="mt-4 text-4xl font-bold text-white">
                            Let's Build Something Great
                        </h2>

                        <p class="mt-5 max-w-xl leading-7 text-slate-400">
                            I'm open to backend, platform, full-stack, and performance-focused engineering challenges.
                        </p>
                    </div>

                    <div class="grid gap-4 sm:grid-cols-2">
                        <a
                            v-for="link in contactLinks"
                            :key="link.label"
                            :href="link.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="muted-panel rounded-lg p-5 transition hover:border-blue-500/80"
                        >
                            <h3 class="font-semibold text-white">
                                {{ link.label }}
                            </h3>

                            <p class="mt-2 text-sm text-slate-400">
                                {{ link.description }}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </BaseContainer>
    </section>
</template>
