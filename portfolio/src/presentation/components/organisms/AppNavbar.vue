<!-- <script setup lang="ts">
const links = [
    {
        label: 'Projects',
        to: '/projects'
    },
    {
        label: 'Case Studies',
        to: '/case-studies'
    },
    {
        label: 'Architecture',
        to: '/architecture'
    },
    {
        label: 'Blog',
        to: '/blog'
    }
]
</script>

<template>
    <header class="sticky top-0 z-50 border-b border-slate-800 bg-black/90 backdrop-blur">
        <BaseContainer>
            <div class="flex h-16 items-center justify-between">
                <NuxtLink to="/" class="font-bold">
                    Rofik
                </NuxtLink>

                <nav class="hidden gap-8 md:flex">
                    <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
                        class="text-slate-400 hover:text-white">
                        {{ link.label }}
                    </NuxtLink>
                </nav>
            </div>
        </BaseContainer>
    </header>
</template> -->

<script setup lang="ts">
import { navigation } from '@/infrastructure/content/navigation/navigation'
</script>

<template>
    <header class="sticky top-0 z-50 border-b border-slate-800 bg-black/90 backdrop-blur">
        <BaseContainer>
            <div class="flex h-16 items-center justify-between">
                <NuxtLink to="/" class="text-xl font-bold text-white">
                    Rofik
                </NuxtLink>

                <nav class="hidden md:flex md:gap-8">
                    <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to"
                        class="text-slate-400 transition hover:text-white">
                        {{ item.label }}
                    </NuxtLink>
                </nav>
            </div>
        </BaseContainer>
    </header>
</template>