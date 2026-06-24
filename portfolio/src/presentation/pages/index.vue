<script setup lang="ts">
import HeroSection from '@/presentation/components/organisms/HeroSection.vue'

import { profile } from '@/infrastructure/content/profile/profile'
</script>

<template>
    <HeroSection :profile="profile" />
</template>

