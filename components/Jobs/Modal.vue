<script setup>
import { defineProps, defineEmits } from 'vue'
import naturalScienceImage from '@/assets/img/natural-science.svg'
import jobImage from "@/assets/img/jobs.svg"
import HahuLogoFooter from '@/assets/img/Hahu_logo_footer.png'
import creativeImage from '@/assets/img/creative-art.svg'
import educationImage from '@/assets/img/education.svg'
import businessImage from '@/assets/img/business.png'
import skillworkerImage from '@/assets/img/low-and-medium-skilled-work.png'
import transaportationImage from '@/assets/img/transport-and-logistics.png'
import engineeringImage from '@/assets/img/engineering.png'
import financeImage from '@/assets/img/finance.png'
import legalImage from '@/assets/img/legal-service.png'
import ictImage from '@/assets/img/ict.png'
import healthImage from '@/assets/img/health-care.png'
import manufacturingImage from '@/assets/img/manufacturing.png'
import socialsceinceImage from '@/assets/img/social-science.png'
import HospitalityImage from '@/assets/img/hospitality.png'
import getSector from "@/composables/jobs/get.js";
import sectorsQuery from "@/queries/jobs/sectors.gql";

const getImageForSector = (sectorName) => {
    const images = {
        "Natural Science": naturalScienceImage,
        "Business": businessImage,
        "Creative Arts": creativeImage,
        "Education": educationImage,
        "Hospitality": HospitalityImage,
        "Low and Medium Skilled": skillworkerImage,
        "Transportation and Logistics": transaportationImage,
        "Engineering": engineeringImage,
        "Finance": financeImage,
        "Legal Service": legalImage,
        "ICT": ictImage,
        "Health Care": healthImage,
        "Manufacturing": manufacturingImage,
        "Social Science": socialsceinceImage,
    };
    return images[sectorName] || jobImage; // Default image if sector name doesn't match
};
// Define the props
const props = defineProps({
    isOpen: Boolean,

})

// Define the emits
const emit = defineEmits(['close'])

// Emit close event
const handleClose = () => emit('close')

const limit = ref(15);
const offset = ref(0);
const sectors = ref([]);
const filter = computed(() => ({
    name: {
        "_ilike": "%%"
    }
}));


//TODO integrate basic_sectors_query here
const {
    onResult,
    loading,
    refetch,
} = getSector(sectorsQuery, {
    limit: limit,
    offset: offset,
    filter: filter,

});


//Extract data when query results are ready
onResult((response) => {
    if (response.data && response.data.sectors) {
        sectors.value = response.data.sectors
    }
})


</script>

<template>
    <Transition name="modal">
        <div v-if="isOpen"
            class="fixed inset-0 overflow-auto h-screen  bg-opacity-80 flex items-start justify-center z-50 ">
            <div class="bg-white shadow-lg dark:bg-gray-800 rounded-lg mt-5 px-8 pb-8  ">
                <!-- Modal Header -->
                <div class="flex justify-between  items-center p-1  dark:border-gray-700">
                    <div class="flex items-center px-2 mt-4">
                        <button @click="handleClose">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" aria-hidden="true"
                                class="lg:w-6 lg:h-5 h-4 w-4  text-gray-600 hover:text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <span class="ml-5 text-sm font-extrabold text-gray-600 dark:text-white">Job by sector</span>
                    </div>

                    <div class="flex items-left space-x-4">
                        <NuxtLink
                            class="text-primary hover:text-white hover:bg-primary text-[0.62rem] ml-24 lg:ml-2 mt-3 md:mt-4 p-1 md:p-2 lg:px-3 lg:py-1 font-semibold flex transition duration-700 ease-in-out items-center border rounded-md">
                            View All
                            <span class="lg:justify-start">
                                <svg class="w-2 h-2 ml-1 md:w-4 md:h-4 lg:w-3 lg:h-5" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path
                                        d="M12.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 12H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
                                </svg>
                            </span>
                        </NuxtLink>
                    </div>
                </div>

                <!-- Modal Content -->

                <div class="w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4   ">
                    <!-- <SingleJob :title="sectors[0].name" :description="sectors[0].description"
                        :openPositions="sectors[0].openPositions" @click="handleClose" /> -->
                    <!-- First column -->
                    <div class="grid grid-rowspb-1-4">
                        <SingleJob v-for="sector in sectors.slice(0, 4)" :key="sector.id"
                            :image="getImageForSector(sector.name)" :id="sector.id" :title="sector.name"
                            :description="sector.description" :openPositions="sector.active_jobs?.count ?? 0"
                            @click="handleClose" />

                    </div>

                    <!-- Second column -->
                    <div class="grid grid-rows-4">
                        <SingleJob v-for="sector in sectors.slice(4, 8)" :key="sector.id"
                            :image="getImageForSector(sector.name)" :id="sector.id" :title="sector.name"
                            :description="sector.description" :openPositions="sector.active_jobs?.count ?? 0"
                            @click="handleClose" />

                    </div>

                    <!-- Third column -->
                    <div class="grid grid-rows-4">
                        <SingleJob v-for="sector in sectors.slice(8, 12)" :key="sector.id"
                            :image="getImageForSector(sector.name)" :title="sector.name"
                            :description="sector.description" :id="sector.id"
                            :openPositions="sector.active_jobs?.count ?? 0" @click="handleClose" />

                    </div>

                    <!-- Fourth column -->
                    <div class="grid grid-rows-4">
                        <SingleJob v-for="sector in sectors.slice(12, 15)" :key="sector.id"
                            :image="getImageForSector(sector.name)" :id="sector.id" :title="sector.name"
                            :description="sector.description" :openPositions="sector.active_jobs?.count ?? 0"
                            @click="handleClose" />

                        <div class="row-span-2 mt-auto">
                            <img :src="jobImage" alt="Job Image" class="w-60 h-28 object-contain " />
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