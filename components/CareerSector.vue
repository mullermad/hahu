<script setup>
import naturalScienceImage from '@/assets/img/natural-science.svg'
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

// Function to get the corresponding image for a sector
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

    return images[sectorName] || creativeImage; // Default to "Creative Arts" if no match
};

// Define the emits
const emit = defineEmits(['close']);

// Setting up sectors query variables
const limit = ref(14);
const offset = ref(0);
const sectors = ref([]);
const filter = ref({
    name: {
        "_ilike": "%%"
    }
});

const {
    onResult,
    loading,
    refetch,
} = getSector(sectorsQuery, {
    limit: limit,
    offset: offset,
    filter: filter,
});

onResult((response) => {
    if (response.data && response.data.sectors) {
        sectors.value = response.data.sectors;
    }
});



</script>
<template>
    <div class=" text-center">
        <h1 class="dark:text-white text-4xl 2xl:text-5xl font-extrabold text-gray-600 p-2">Career Sectors</h1>
        <p class="dark:text-white text-[0.8rem] 2xl:text-lg font-lightbold text-gray-500 mb-8 font-robot">
            Based on the local labor market trend in Ethiopia, we categorize our vacancies into fourteen sectors.
        </p>

        <!-- Sectors List -->
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 w-full max-w-screen-2xl mx-auto px-4">
            <!-- Loop through each sector -->
            <div v-for="sector in sectors" :key="sector.id" class="flex justify-center">
                <Sector :image="getImageForSector(sector.name)" :id="sector.id" :sectorName="sector.name" screen
                    :openPositions="sector.active_jobs?.count ?? 0" />
            </div>
        </div>




    </div>
</template>
