<script setup lang="ts">
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <div class="grid min-h-screen place-items-center bg-slate-950 px-6 text-white">
        <div class="surface max-w-xl rounded-lg p-10 text-center">
            <p class="text-7xl font-bold text-blue-500">
                404
            </p>

            <h1 class="mt-4 text-3xl font-bold">
                Page Not Found
            </h1>

            <p class="mt-4 text-slate-400">
                The page you are looking for does not exist or has been moved.
            </p>

            <button
                type="button"
                class="mt-8 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                @click="handleError"
            >
                Back to Home
            </button>
        </div>
    </div>
</template>
