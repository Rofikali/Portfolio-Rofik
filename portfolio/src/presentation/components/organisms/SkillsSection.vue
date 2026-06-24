<script setup lang="ts">
import type { Skill } from '@/domain/skill/types/Skill'

interface Props {
    skills: Skill[]
}

defineProps<Props>()
</script>

<template>
    <section id="skills" class="py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-white">
                Engineering Expertise
            </h2>

            <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill" />
            </div>
        </div>
    </section>
</template>