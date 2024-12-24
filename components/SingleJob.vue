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
// Define the emits
const emit = defineEmits(['click'])

// Log the id to the console
</script>
<!-- :to="`/jobs/${id}`" -->

<template>
    <NuxtLink @click="emit('click')" :to="{ path: '/jobs', query: { sector_id: `${id}` } }">
        <div
            class="dark:bg-gray-700 bg-gray-200 hover:bg-[#e4f2ed]  mx-1 flex items-center group  rounded-md  border-none p-6 w-72 2xl:w-auto  transition-shadow ">
            <!-- Job Image (small left side) -->
            <img :src="image" alt="Job Image" class="w-8 h-7 object-cover mr-4" />

            <!-- Job Info on the right (flex column to stack title and description) -->
            <div class="flex flex-col w-full px-4">
                <!-- Job Title and Open Positions -->
                <div class="flex items-center justify-start w-full  ">
                    <!-- Job Title -->
                    <h2
                        class="text-[1rem] py-1 2xl:text-lg dark:text-white text-gray-600 font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                        {{ title }}
                    </h2>
                    <!-- Open Positions -->
                    <span class="text-[0.55rem] bg-[#d4f3f1] text-primary font-bold py-1 px-2 rounded-full ml-2">
                        {{ openPositions }}
                    </span>
                </div>


                <!-- Job Description -->
                <p class="text-gray-500 text-[0.7rem] 2xl:text-[0.8rem] dark:text-white line-clamp-2 mt-1">
                    {{ description }}
                </p>
            </div>

            <span class="text-primary invisible group-hover:visible ">
                <svg class="w-1 h-1 ml-1 md:w-4 md:h-4 lg:w-4 lg:h-5" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M12.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 12H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
                </svg>
            </span>
        </div>
    </NuxtLink>
</template>
