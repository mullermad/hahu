<template>
    <NuxtLink :to="`/jobs/${id}`">
        <div
            class="dark:bg-[#121a26] bg-red-100 hover:bg-green-100 my-1 mx-1 flex items-center border rounded-sm  p-6 w-72  transition-shadow dark:hover:shadow-green-300 hover:shadow-lg">
            <!-- Job Image (small left side) -->
            <img :src="image" alt="Job Image" class="w-6 h-5 object-cover mr-4" />

            <!-- Job Info on the right (flex column to stack title and description) -->
            <div class=" flex-col inline  justify-start w-full">
                <!-- Job Title -->
                <h2 class="text-[0.8rem] inline text-gray-600 font-bold text-left mr-4 mb-1">{{ title }}</h2>

                <!-- Open Positions (Aligned with title to the left) -->
                <span class="text-[0.6rem] bg-[#7fcac5] text-[#009688] font-bold text-left mb-1 py-1 px-3 rounded-full">
                    {{ openPositions }}

                </span>

                <!-- Job Description (Left aligned and truncated) -->
                <p class="text-gray-600 text-[0.55rem] dark:text-white line-clamp-2 text-left">{{ description }}</p>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    openPositions: {
        type: Number,
        required: true,
    },
});
</script>
