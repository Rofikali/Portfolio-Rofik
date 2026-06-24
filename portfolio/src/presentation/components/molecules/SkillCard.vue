<script setup lang="ts">
import type { Skill } from '@/domain/skill/types/Skill'

interface Props {
    skill: Skill
}

defineProps<Props>()
</script>

<template>
    <div class="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <h3 class="font-semibold text-white">
            {{ skill.name }}
        </h3>

        <p class="mt-2 text-sm text-slate-400">
            {{ skill.category }}
        </p>
    </div>
</template>