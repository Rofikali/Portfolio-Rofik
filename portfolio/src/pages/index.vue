<!-- <script setup lang="ts">
import HeroSection from '@/presentation/components/organisms/HeroSection.vue'
import SkillsSection from '@/presentation/components/organisms/SkillsSection.vue'

import { profile } from '@/infrastructure/content/profile/profile'
import { skills } from '@/infrastructure/content/skills/skills'

usePortfolioSeo()
</script>

<template>
    <main>
        <HeroSection :profile="profile" />

        <SkillsSection :skills="skills" />
    </main>
</template> -->


<script setup lang="ts">
import HeroSection from '@/presentation/components/organisms/HeroSection.vue'
import SkillsSection from '@/presentation/components/organisms/SkillsSection.vue'

import { profile } from '@/infrastructure/content/profile/profile'
import { skills } from '@/infrastructure/content/skills/skills'

const projects = await getFeaturedProjects()
</script>

<template>
    <HeroSection :profile="profile" />

    <SkillsSection :skills="skills" />

    <FeaturedProjectsSection :projects="projects" />
</template>