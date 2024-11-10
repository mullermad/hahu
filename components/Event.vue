<template>
    <div
        class="dark:bg-[#121a26] bg-white flex flex-col items-left border border-transparent   rounded-lg  w-[20rem] m-3 h-[34rem] transition-shadow hover:shadow-xl hover:border-green-500">
        <img :src="image" alt="Sector Image" class="w-full h-60 object-cover  mb-8 mx-auto " />
        <p
            class="text-xs text-gray-700 dark:text-white bg-[#009688]  mb-2 justify-center text-center ml-3 h-8 w-28 rounded-lg ">
            {{ News
            }}
        </p>
        <p class="text-sm text-gray-600 dark:text-white text-left mb-2 justify-center ml-3 ">{{ Date }}</p>

        <h2 class="text-lg font-bold text-left mb-2 justify-center ml-3 ">{{ ServiceName }}</h2>

        <p class="text-gray-600 text-sm dark:text-white text-left leading-relaxed justify-center mb-2 ml-3">
            {{ Description }}

        </p>
        <div class="flex justify-center">
            <button
                class="bg-[#009688] text-white font-bold text-sm mt-3 flex items-center justify-center h-10 w-28 rounded-md">
                Read Repost
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
    Date: {
        type: String,
        required: true,
    },
    News: {
        type: String,
        required: true,
    },

});
</script>
