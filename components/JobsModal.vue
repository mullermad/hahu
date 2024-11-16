<template>
    <Transition name="modal">

        <div v-if="isOpen" class="fixed inset-0 bg-gray-100 bg-opacity-50 flex items-start justify-center z-50">
            <div class="bg-white dark:bg-gray-800 rounded-lg  ">
                <!-- Modal Header -->
                <div class="flex justify-between items-center p-2  dark:border-gray-700">
                    <div>
                        <button @click="handleClose"
                            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                            x
                        </button>
                        <span class="ml-5 text-sm font-extrabold text-gray-600 dark:text-white">Job by sector</span>
                    </div>

                    <div class="flex items-left space-x-4">
                        <Nuxtlink
                            class="text-[#009688] hover:text-white hover:bg-[#009688] text-[0.62rem] ml-24 lg:ml-2 mt-3 md:mt-4 p-1 md:p-2 lg:px-3 lg:py-1 font-semibold flex transition duration-700 ease-in-out items-center border rounded-md">
                            View All
                            <span class="lg:justify-start">
                                <svg class="w-2 h-2 ml-1 md:w-4 md:h-4 lg:w-4 lg:h-5" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path
                                        d="M12.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 12H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
                                </svg>
                            </span>
                        </Nuxtlink>
                    </div>
                </div>

                <!-- Modal Content -->

                <div class="grid grid-rows-4 grid-cols-4 h-screen  bg-red-600">

                    <SingleJob :image="naturalScienceImage" title="Natural Science"
                        description="Natural science is a branch of science that seeks to understand the natural world."
                        :openPositions="5" />

                    <SingleJob :image="naturalScienceImage" title="Natural Science"
                        description="Natural science is a branch of science that seeks to understand the natural world."
                        :openPositions="5" />
                    <SingleJob :image="naturalScienceImage" title="Natural Science"
                        description="Natural science is a branch of science that seeks to understand the natural world."
                        :openPositions="5" />
                    <SingleJob :image="naturalScienceImage" title="Natural Science"
                        description="Natural science is a branch of science that seeks to understand the natural world."
                        :openPositions="5" />

                    <!-- Second row with 4 items -->
                    <SingleJob :image="naturalScienceImage" title="Natural Science"
                        description="Natural science is a branch of science that seeks to understand the natural world."
                        :openPositions="5" />
                    <SingleJob :image="naturalScienceImage" title="Natural Science"
                        description="Natural science is a branch of science that seeks to understand the natural world."
                        :openPositions="5" />
                    <SingleJob :image="naturalScienceImage" title="Natural Science"
                        description="Natural science is a branch of science that seeks to understand the natural world."
                        :openPositions="5" />
                    <SingleJob :image="naturalScienceImage" title="Natural Science"
                        description="Natural science is a branch of science that seeks to understand the natural world."
                        :openPositions="5" />

                    <!-- Third row with 3 items and an image covering remaining space -->
                    <SingleJob :image="naturalScienceImage" title="Natural Science"
                        description="Natural science is a branch of science that seeks to understand the natural world."
                        :openPositions="5" />
                    <SingleJob :image="naturalScienceImage" title="Natural Science"
                        description="Natural science is a branch of science that seeks to understand the natural world."
                        :openPositions="5" />
                    <SingleJob :image="naturalScienceImage" title="Natural Science"
                        description="Natural science is a branch of science that seeks to understand the natural world."
                        :openPositions="5" />

                    <!-- Fourth row with 3 items and an image covering remaining space -->
                    <SingleJob :image="naturalScienceImage" title="Natural Science"
                        description="Natural science is a branch of science that seeks to understand the natural world."
                        :openPositions="5" />
                    <SingleJob :image="naturalScienceImage" title="Natural Science"
                        description="Natural science is a branch of science that seeks to understand the natural world."
                        :openPositions="5" />
                    <SingleJob :image="naturalScienceImage" title="Natural Science"
                        description="Natural science is a branch of science that seeks to understand the natural world."
                        :openPositions="5" />
                    <div class="row-span-2 ">
                        <img src="@/assets/img/job.svg" alt="Job Image" />
                    </div>
                    <!-- <div class="col-span-4  flex justify-end mr-20 ">
                        <div class=" grid grid-cols-3  ">



                        </div>
                        <div class=" ">
                            <img src="@/assets/img/job.svg" alt="Job Image" class="w-full h-[77%] " />
                        </div>
                    </div> -->
                </div>

            </div>



        </div>

    </Transition>
</template>


<script setup>
import { defineProps, defineEmits } from 'vue'
import naturalScienceImage from '@/assets/img/natural-science.svg';
import businessImage from '@/assets/img/business.svg';
import creativeImage from '@/assets/img/creative-art.svg';
import educationImage from '@/assets/img/education.svg';
import hospitalityImage from '@/assets/img/hospitality.svg';
import financeImage from '@/assets/img/finance.svg';
import jobImage from '@/assets/img/job.svg';

// Define the props
const props = defineProps({
    isOpen: Boolean,
})

// Define the emits
const emit = defineEmits(['close', 'viewAll'])



// Emit close and view all events
const handleClose = () => emit('close')
// const handleViewAll = () => emit('viewAll')


</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>
