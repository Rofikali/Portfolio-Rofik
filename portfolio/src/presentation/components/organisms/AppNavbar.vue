<script setup lang="ts">
import { navigation } from '@/infrastructure/content/navigation/navigation'

const route = useRoute()

const isActive = (to: string) => {
    if (to === '/') {
        return route.path === '/'
    }

    return route.path === to || route.path.startsWith(`${to}/`)
}
</script>

<template>
    <header class="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/88 backdrop-blur-xl">
        <BaseContainer>
            <div class="flex h-16 items-center justify-between">
                <NuxtLink to="/" class="text-base font-bold text-white">
                    Rofik
                </NuxtLink>

                <nav class="hidden items-center gap-1 md:flex">
                    <NuxtLink
                        to="/"
                        class="rounded-md px-3 py-2 text-sm transition"
                        :class="isActive('/') ? 'bg-blue-500/10 text-blue-300' : 'text-slate-400 hover:text-white'"
                    >
                        Home
                    </NuxtLink>

                    <NuxtLink
                        v-for="item in navigation"
                        :key="item.to"
                        :to="item.to"
                        class="rounded-md px-3 py-2 text-sm transition"
                        :class="isActive(item.to) ? 'bg-blue-500/10 text-blue-300' : 'text-slate-400 hover:text-white'"
                    >
                        {{ item.label }}
                    </NuxtLink>
                </nav>

                <div class="flex items-center gap-2">
                    <a
                        href="https://github.com/Rofikali"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="grid size-9 place-items-center rounded-full border border-slate-800 text-sm text-slate-300 transition hover:border-blue-500 hover:text-white"
                        aria-label="GitHub"
                    >
                        GH
                    </a>
                </div>
            </div>
        </BaseContainer>
    </header>
</template>
