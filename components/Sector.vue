<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    sectorName: {
        type: String,
        required: true,
    },
    openPositions: {
        type: Number,
        required: true,
    },
});
</script>

<template>
    <NuxtLink :to="{ path: '/jobs', query: { sector_id: `${id}` } }"
        class="dark:bg-[#121a26] bg-white flex flex-col items-center justify-between border rounded-lg shadow-2xl p-6 w-44 h-[10rem] my-1 transition-shadow dark:hover:shadow-green-300 hover:shadow-md">
        <img :src="image" alt="Sector Image" class="w-12 h-16 object-cover mb-1 mx-auto" />
        <h2 class="text-md font-extrabold text-center mb-2 text-primary break-words max-w-[10rem] mx-auto">
            {{ sectorName }}
        </h2>
        <p class="text-gray-800 text-[0.85rem] dark:text-white">{{ openPositions }} Open positions</p>
    </NuxtLink>
</template>



<style scoped>
/* Additional styling can be added here if needed */
</style>
