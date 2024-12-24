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
        class="dark:bg-[#121a26] bg-white flex flex-col items-center justify-center border rounded-lg shadow-xl w-52 h-[12rem] transition-shadow dark:hover:shadow-green-300 hover:shadow-md">
        <img :src="image" alt="Sector Image" class="w-16 h-20 py-2 object-cover mx-auto" />
        <h2 class="text-md font-extrabold text-center text-primary break-words max-w-[10rem] mx-auto">
            {{ sectorName }}
        </h2>
        <p class="text-gray-800 text-[0.85rem] py-2 dark:text-white">
            {{ openPositions }} Open positions

        </p>
    </NuxtLink>


</template>



<style scoped>
/* Additional styling can be added here if needed */
</style>
