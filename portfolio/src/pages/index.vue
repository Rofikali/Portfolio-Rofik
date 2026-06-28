<script setup lang="ts">
import HeroSection from '@/presentation/components/organisms/HeroSection.vue'
import SkillsSection from '@/presentation/components/organisms/SkillsSection.vue'

import { profile } from '@/infrastructure/content/profile/profile'
import { skills } from '@/infrastructure/content/skills/skills'

const projects = await getFeaturedProjects()

usePortfolioSeo()
</script>

<template>
    <HeroSection :profile="profile" />

    <SkillsSection :skills="skills" />

    <FeaturedProjectsSection :projects="projects" />

    <ContactSection />
</template>
