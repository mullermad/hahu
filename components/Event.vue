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

<template>
    <div
        class="dark:bg-[#121a26] bg-white  flex flex-col items-left border border-transparent rounded-lg w-[20rem]  h-[32rem] 2xl:h-[39rem] 2xl:w-[28rem] transition-shadow hover:shadow-xl hover:border-green-500 overflow-hidden">
        <img :src="image" alt="Sector Image" class="w-full h-65 object-cover mb-6 mx-auto" />
        <p
            class="text-[0.7rem] 2xl:text-xs px-1 text-gray-800 dark:text-white bg-[#4aa39a]  mb-1 justify-center text-center ml-3 h-5 w-28 rounded-lg">
            {{ News }}
        </p>
        <p
            class="text-[0.75rem] 2xl:text-md font-semibold px-1 text-black dark:text-white text-left mb- mt-2 justify-center ml-3 ">
            {{
                Date }}
        </p>
        <h2
            class="text-[0.9rem] mt-3  py-1 2xl:text-xl line-clamp-1 font-roboto font-black text-left  justify-center ml-3 ">
            {{
                ServiceName
            }}</h2>
        <p
            class="text-gray-600 text-sm mt-1 2xl:text-lg  dark:text-white text-center leading-relaxed justify-center mb-2  ml-3">
            {{ Description }}
        </p>
        <div class="flex justify-center">
            <button
                class="bg-primary transition duration-700 ease-in-out hover:bg-[#8fcec8] hover:text-secondary text-white font-bold text-[0.65rem] mt-2 flex items-center justify-center h-10 w-24 rounded-md">
                Read post
                <svg class="w-3 h-4 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M12.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 12H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
                </svg>
            </button>
        </div>
    </div>
</template>
