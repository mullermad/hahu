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


<template>
    <div
        class="dark:bg-[#121a26] bg-white flex flex-col items-center border border-transparent rounded-lg shadow-sm p-5 w-[20rem] m-3 h-[25rem] 2xl:w-[25rem] 2xl:h-[34rem] transition-shadow hover:shadow-xl hover:border-green-500">


        <!-- Content Section (Text pushed to the bottom) -->
        <div class="flex flex-col mt-auto  w-full">
            <!-- Image Section (Centered at the top) -->
            <img :src="image" alt="Sector Image"
                class="w-45 h-40 2xl:w-64 2xl:h-60 object-cover rounded-full mb-4 mx-auto" />
            <div class="pt-6">
                <h2 class="text-[0.9rem]   text-primary 2xl:text-lg font-extrabold text-center mb-2 ">{{ ServiceName
                    }}
                </h2>
                <p class="text-gray-500 text-xs 2xl:text-[1rem] dark:text-white text-center leading-relaxed mb-2">
                    {{ Description }}
                </p>
            </div>

        </div>
    </div>




</template>
