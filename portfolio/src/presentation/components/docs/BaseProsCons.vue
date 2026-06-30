<script setup lang="ts">
defineProps<{ pros: string[]; cons: string[] }>()
</script>

<template>
  <BaseTradeoff title="Pros and Cons" :positive="pros" :negative="cons" />
</template>
