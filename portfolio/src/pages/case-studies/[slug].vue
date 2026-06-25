<script setup lang="ts">
const route = useRoute()

const article = await queryCollection('caseStudies')
    .where('slug', '=', route.params.slug)
    .first()

if (!article) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Case Study Not Found'
    })
}
</script>

<template>
    <BaseContainer>
        <BaseSection>
            <ContentRenderer class="prose prose-invert max-w-none" :value="article" />
        </BaseSection>
    </BaseContainer>
</template>
