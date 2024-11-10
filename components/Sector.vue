<template>
    <div
        class="dark:bg-[#121a26] bg-white flex-col items-center border rounded-lg shadow-sm p-5 w-45 m-3 transition-shadow  hover:shadow-xl">
        <img :src="image" alt="Sector Image" class="w-13 h-16 object-cover rounded-full mb-1 mx-auto" />
        <h2 class="text-md font-bold text-center mb-2 text-[#009688]">{{ sectorName }}</h2>
        <p class="text-gray-600 text-md dark:text-white ">{{ openPositions }} open positions</p>
    </div>
</template>


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
