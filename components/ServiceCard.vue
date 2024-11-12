<template>
    <div
        class="dark:bg-[#121a26] bg-white flex flex-col items-left border border-transparent rounded-lg shadow-sm p-5 w-[20rem] m-3 h-[25rem] transition-shadow hover:shadow-xl hover:border-green-500">
        <img :src="image" alt="Sector Image" class="w-45 h-40 object-cover rounded-full mb-8 mx-auto" />
        <h2 class="text-lg font-bold text-left mb-2 ">{{ ServiceName }}</h2>
        <p class="text-gray-600 text-xs dark:text-white text-left leading-relaxed mb-2">
            {{ Description }}

        </p>
        <div class="flex justify-end">
            <button class="text-[#009688] hover:text-[#82d3cb] font-bold text-xs  mt-3 flex items-center">
                Explore more
                <svg class="w-4 h-4 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M12.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 12H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
                </svg>
            </button>
        </div>

    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    image: {
        type: String,
        required: true,
    },
    ServiceName: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
});
</script>
