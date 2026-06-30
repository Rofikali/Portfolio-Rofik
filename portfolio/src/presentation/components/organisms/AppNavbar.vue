<script setup lang="ts">
import { navigation } from '@/infrastructure/content/navigation/navigation'

const route = useRoute()
const isOpen = ref(false)

const isActive = (to: string) => {
  if (to === '/') {
    return route.path === '/'
  }

  return route.path === to || route.path.startsWith(`${to}/`)
}

watch(() => route.fullPath, () => {
  isOpen.value = false
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/92 backdrop-blur-xl">
    <BaseContainer>
      <div class="flex h-14 items-center justify-between gap-3">
        <NuxtLink to="/" class="shrink-0 text-sm font-bold text-white">
          Rofik
        </NuxtLink>

        <nav class="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex">
          <NuxtLink
            to="/"
            class="rounded-md px-2.5 py-2 text-xs transition"
            :class="isActive('/') ? 'text-blue-300' : 'text-slate-400 hover:text-white'"
          >
            Home
          </NuxtLink>

          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="rounded-md px-2.5 py-2 text-xs transition"
            :class="isActive(item.to) ? 'text-blue-300' : 'text-slate-400 hover:text-white'"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-2">
          <NuxtLink
            to="/search"
            class="grid size-8 place-items-center rounded-md border border-slate-800 text-xs text-slate-400 transition hover:border-blue-500 hover:text-white"
            aria-label="Search"
          >
            /
          </NuxtLink>

          <a
            href="https://github.com/Rofikali"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden size-8 place-items-center rounded-md border border-slate-800 text-xs text-slate-400 transition hover:border-blue-500 hover:text-white sm:grid"
            aria-label="GitHub"
          >
            GH
          </a>

          <button
            type="button"
            class="grid size-8 place-items-center rounded-md border border-slate-800 text-slate-300 lg:hidden"
            :aria-expanded="isOpen"
            aria-label="Toggle navigation"
            @click="isOpen = !isOpen"
          >
            <span aria-hidden="true">{{ isOpen ? 'x' : '=' }}</span>
          </button>
        </div>
      </div>

      <nav v-if="isOpen" class="grid gap-1 border-t border-slate-900 py-3 lg:hidden">
        <NuxtLink
          to="/"
          class="rounded-md px-3 py-2 text-sm"
          :class="isActive('/') ? 'bg-blue-500/10 text-blue-300' : 'text-slate-400'"
        >
          Home
        </NuxtLink>

        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="rounded-md px-3 py-2 text-sm"
          :class="isActive(item.to) ? 'bg-blue-500/10 text-blue-300' : 'text-slate-400'"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </BaseContainer>
  </header>
</template>
