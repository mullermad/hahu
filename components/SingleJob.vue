<template>
    <NuxtLink :to="`/jobs/${id}`">
        <div
            class="dark:bg-[#121a26] bg-gray-100 hover:bg-[#f0faf2]  mx-1 flex items-center group  rounded-md  border-none p-6 w-72  transition-shadow ">
            <!-- Job Image (small left side) -->
            <img :src="image" alt="Job Image" class="w-6 h-5 object-cover mr-4" />

            <!-- Job Info on the right (flex column to stack title and description) -->
            <div class=" flex-col inline  justify-start w-full">
                <!-- Job Title -->
                <h2 class="text-[1rem] inline text-gray-600 font-bold text-left mr-2  mb-1">{{ title }}</h2>

                <!-- Open Positions (Aligned with title to the left) -->
                <span
                    class="text-[0.55rem] bg-[#d4f3f1] text-[#009688] font-bold text-left mb-1 py-1 px-2 rounded-full">
                    {{ openPositions }}

                </span>

                <!-- Job Description (Left aligned and truncated) -->
                <p class="text-gray-500 text-[0.7rem] dark:text-white line-clamp-2 text-left">{{ description }}</p>
            </div>
            <span class="text-[#009688] invisible group-hover:visible ">
                <svg class="w-1 h-1 ml-1 md:w-4 md:h-4 lg:w-4 lg:h-5" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M12.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 12H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
                </svg>
            </span>
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
