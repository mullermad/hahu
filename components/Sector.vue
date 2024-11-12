<template>
    <div
        class="dark:bg-[#121a26] bg-white flex-col items-center border rounded-lg shadow-sm p-8 w-45 m-3 transition-shadow dark:hover:shadow-green-300  hover:shadow-md">
        <img :src="image" alt="Sector Image" class="w-13 h-16 object-cover rounded-full mb-1 mx-auto" />
        <h2 class="text-md font-bold text-center mb-2 text-[#009688]">{{ sectorName }}</h2>
        <p class="text-secondary text-xs dark:text-white ">{{ openPositions }} open positions</p>
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
