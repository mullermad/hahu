<template>
    <Transition name="modal">
        <div v-if="isOpen"
            class="fixed inset-0 overflow-auto h-screen bg-gray-100 bg-opacity-80 flex items-start justify-center z-50 ">
            <div class="bg-white shadow-lg dark:bg-gray-800 rounded-lg mt-5 px-8 pb-8  ">
                <!-- Modal Header -->
                <div class="flex justify-between  items-center p-1  dark:border-gray-700">
                    <div class="flex items-center px-2 mt-4">
                        <button @click="handleClose">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" aria-hidden="true" class="lg:w-6 lg:h-5 h-4 w-4  text-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <span class="ml-5 text-sm font-extrabold text-gray-600 dark:text-white">Job by sector</span>
                    </div>

                    <div class="flex items-left space-x-4">
                        <Nuxtlink
                            class="text-[#009688] hover:text-white hover:bg-[#009688] text-[0.62rem] ml-24 lg:ml-2 mt-3 md:mt-4 p-1 md:p-2 lg:px-3 lg:py-1 font-semibold flex transition duration-700 ease-in-out items-center border rounded-md">
                            View All
                            <span class="lg:justify-start">
                                <svg class="w-2 h-2 ml-1 md:w-4 md:h-4 lg:w-3 lg:h-5" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path
                                        d="M12.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 12H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
                                </svg>
                            </span>
                        </Nuxtlink>
                    </div>
                </div>

                <!-- Modal Content -->

                <div class="w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4   ">
                    <!-- First column -->
                    <div class="grid grid-rowspb-1-4">
                        <SingleJob :image="naturalScienceImage" title="Natural Science"
                            description="Natural science is a branch of science that seeks to understand the natural world."
                            :openPositions="5" />
                        <SingleJob :image="naturalScienceImage" title="Buisness"
                            description="Natural science is a branch of science that seeks to understand the natural world."
                            :openPositions="5" />
                        <SingleJob :image="naturalScienceImage" title="Creative Arts"
                            description="Natural science is a branch of science that seeks to understand the natural world."
                            :openPositions="5" />
                        <SingleJob :image="naturalScienceImage" title="Education"
                            description="Natural science is a branch of science that seeks to understand the natural world."
                            :openPositions="5" />
                    </div>

                    <!-- Second column -->
                    <div class="grid grid-rows-4">
                        <SingleJob :image="naturalScienceImage" title="Hospitality"
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
                    </div>

                    <!-- Third column -->
                    <div class="grid grid-rows-4">
                        <SingleJob :image="naturalScienceImage" title="Finance"
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
                    </div>

                    <!-- Fourth column -->
                    <div class="grid grid-rows-4">
                        <SingleJob :image="naturalScienceImage" title="Manufacturing"
                            description="Natural science is a branch of science that seeks to understand the natural world."
                            :openPositions="5" />
                        <SingleJob :image="naturalScienceImage" title="Natural Science"
                            description="Natural science is a branch of science that seeks to understand the natural world."
                            :openPositions="5" />
                        <div class="row-span-2 mt-auto">
                            <img :src="jobImage" alt="Job Image" class="w-70 h-56 object-contain " />
                        </div>
                        <div class="flex justify-end">
                            <div class=""><span
                                    class=" font-light text-[0.6rem] text-gray-5P00 dark:text-primary-dark-2">
                                    Powered by </span><img :src="HahuLogoFooter" alt="" class="w-20 pl-6">
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    </Transition>
</template>




<script setup>
import { defineProps, defineEmits } from 'vue'
import naturalScienceImage from '@/assets/img/natural-science.svg'
import jobImage from "@/assets/img/jobs.svg"
import HahuLogoFooter from '@/assets/img/Hahu_logo_footer.png'
import creativeImage from '@/assets/img/creative-art.svg'
import educationImage from '@/assets/img/education.svg'

// Define the props
const props = defineProps({
    isOpen: Boolean,
})

// Define the emits
const emit = defineEmits(['close'])

// Emit close event
const handleClose = () => emit('close')
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