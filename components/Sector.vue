<template>
    <div
        class="dark:bg-[#121a26] bg-white flex-col items-center border rounded-lg shadow-lg p-8 w-45 m-3 transition-shadow dark:hover:shadow-green-300  hover:shadow-md">
        <img :src="image" alt="Sector Image" class="w-14 h-16 object-cover  mb-1 mx-auto" />
        <h2 class="text-md font-extrabold text-center mb-2 text-[#269186]">{{ sectorName }}</h2>
        <p class="text-gray-800 text-[0.85rem] dark:text-white ">{{ openPositions }} Open positions</p>
    </div>
</template>sm


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
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

<style scoped>
/* Additional styling can be added here if needed */
</style>
