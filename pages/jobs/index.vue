<script setup>
import { ref } from 'vue'
import JobsQuery from "@/queries/jobs/jobs.gql";
import positionQuery from "@/queries/position/positions.gql";
import getJobs from "@/composables/jobs/getJobs.js";
import getData from "@/composables/jobs/get.js";
import sectorQuery from "@/queries/jobs/sectors.gql"
import cityQuery from "@/queries/jobs/cities.gql"
import job_applicationImage from '@/assets/img/filterimages.png';

// Define a reactive property for the slider value
const route = useRoute();
const search = ref("")
const titleSearch = ref("")
const searchResult = ref("")
const jobs = ref([])
const Positions = ref([])
const Sectors = ref([])
const City = ref([])
const limit = ref(10);
const offset = ref(0);
const selctedPosition = ref("")
const selectedSector = ref({ id: route.query.sector_id });
const selectedCity = ref("");
const showFilters = ref(false);

const value = ref([0, 10]);
const isChecked = ref(false);
// Define a reactive property for the slider value
const filterJob = computed(() => {
    const and = [
        {
            "expired": {
                "_eq": false
            }
        },
        {
            "approved": {
                "_eq": true
            }
        },

    ]
    if (selectedCity.value?.id) and.push({
        "job_cities": {
            "city": {
                "id": {
                    "_eq": `${selectedCity.value?.id}`
                }
            }
        }
    })

    if (selectedSector.value?.id) and.push({
        "sub_sector": {
            "sector": {
                "id": {
                    "_eq": `${selectedSector.value?.id}`
                }
            }
        }
    })
    else {
        and.push({
            "sub_sector": {
                "sector": {
                    "id": {
                        "_eq": `${route.query.sector_id}`
                    }
                }
            }
        })
    }

    if (selctedPosition.value?.id) and.push({


        "position_id": {
            "_eq": `${selctedPosition.value?.id}`
        }


    })

    if (searchResult.value) and.push({
        _or: [
            {
                title: {
                    _ilike: `%${searchResult.value}%`,
                },

            },
        ],




    })

    return { "_and": and }

})
const filterCitySector = computed(() =>
(
    {
        "_and": [{
            "name": {
                "_ilike": `%${search.value}%`
            }
        }



        ]
    }
))


const toggleFilters = () => {
    showFilters.value = !showFilters.value;
};

const searchDone = () => {
    searchResult.value = titleSearch.value
}

const UpdateSearchTerm = (v) => {
    search.value = v;
}


const {
    onResult: onJobResult,
    loading: loadingJob,
    refetch: refetchJob,
} = getJobs(JobsQuery, {
    limit: limit,
    offset: offset,
    filter: filterJob,


});


//job
onJobResult((response) => {
    if (response.data && response.data.jobs) {
        jobs.value = response.data.jobs;
    } else {
        console.log("No jobs found or error in response");
    }
});

//position
const {
    onResult: onPositionResult,
    loading: loadingPosition,
    refetch: refetchPosition,
} = getData(positionQuery, {
    limit: limit,
    offset: offset,
    filter: filterCitySector,
});

// Handle position results
onPositionResult((response) => {
    if (response.data && response.data.positions) {
        Positions.value = response.data.positions;
    } else {
        console.log("No Positions found or error in response");
    }
});

//sector
const {
    onResult: onSectorResult,
    loading: loadingSector,
    refetch: refetchSector,
} = getData(sectorQuery, {
    limit: limit,
    offset: offset,
    filter: filterCitySector,
    args: {},
});

// Handle Sector results
onSectorResult((response) => {
    if (response.data && response.data.sectors) {
        Sectors.value = response.data.sectors;
    } else {
        console.log("No Positions found or error in response");
    }
});


//cities
const {
    onResult: onCityResult,
    loading: loadingCity,
    refetch: refetchCity,
} = getData(cityQuery, {
    limit: limit,
    offset: offset,
    filter: filterCitySector,
    args: {},
});

// Handle city results
onCityResult((response) => {
    if (response.data && response.data.cities) {
        City.value = response.data.cities;
    } else {
        console.log("No city found or error in response");
    }
});


</script>

<template>
    <div class="min-h-screen  bg-gray-100 dark:bg-[#011812]">
        <div class="flex flex-col md:flex-row ">
            <div class="mt-20">
                <div class="p-4  dark:bg-[#121a26]">
                    <!-- Toggle Button for Additional Filters -->
                    <div>
                        <button @click="toggleFilters" class="flex justify-between items-center text-left ">
                            <h2 class="text-lg font-bold text-gray-700">Additional Filters</h2>
                            <svg :class="{ 'rotate-180': showFilters }" class="w-5 h-5 transition-transform"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.25a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <!-- Filters Section -->
                    <div v-if="showFilters" class="mt-4">

                        <div class="p-4">


                            <!-- Experience Range Slider -->
                            <div class="flex items-center mb-2">
                                <Slider v-model="value" range class="w-48"
                                    :style="{ '--slider-track-color': '#FF0000', height: '10px' }" :min="1" :max="8" />
                            </div>



                            <div class="flex items-center">
                                <p class="mr-4 text-[0.7rem] text-gray-600">
                                    <strong>{{ value[0] }} - {{ value[1] }} years of experience</strong>
                                </p>
                                <div class="flex items-center me-4">
                                    <input checked id="yellow-checkbox" type="checkbox" value=""
                                        class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="yellow-checkbox"
                                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow</label>
                                </div>
                                <label class="flex items-center text-[0.7rem] text-gray-700">
                                    <input type="checkbox" v-model="isChecked"
                                        class="mr-2 w-6 h-6 text-gray-600 cursor-pointer appearance-none checked:before:content-['✔'] border-2 border-gray-300 rounded-sm checked:border-primary checked:bg-primary   checked:before:text-white checked:before:text-lg" />

                                    >10
                                </label>
                            </div>
                        </div>
                        <div class="w-full border-t border-gray-300 dark:border-gray-600 my-2"></div>

                        <!-- Type Filter Dropdown -->
                        <div>
                            <label class="block text-sm text-gray-700 mb-2">Type</label>
                            <div class="flex flex-wrap gap-2">
                                <div
                                    class="px-4 py-1  text-gray-700 rounded-lg border text-[0.65rem] border-primary   dark:text-white">
                                    Bid
                                </div>
                                <div
                                    class="px-4 py-1  text-gray-700 rounded-lg border text-[0.65rem] border-primary   dark:text-white">
                                    Contract
                                </div>
                                <div
                                    class="px-4 py-1 rounded-lg border text-[0.65rem] border-primary text-gray-700  dark:text-white">
                                    Full Time
                                </div>
                                <div
                                    class="px-4 py-1 text-[0.65rem] rounded-lg border border-primary text-gray-700  dark:text-white">
                                    Internship
                                </div>
                                <div
                                    class="px-4 py-1 rounded-lg border text-[0.65rem] border-primary text-gray-700  dark:text-white">
                                    Part Time
                                </div>
                            </div>
                        </div>

                        <div class="w-full border-t border-gray-300 dark:border-gray-600 my-2">ETHIOPIAN MAP</div>
                    </div>
                </div>

                <!--left side card-->
                <div
                    class="dark:bg-[#121a26] ml-5 py-4  bg-white flex flex-col items-center rounded-lg w-[220px] h-[400px] shadow-sm px-2">
                    <img :src="job_applicationImage" alt="Sector Image" class="w-40 h-40 mb-6 mx-auto" />

                    <p class="text-gray-600 text-[0.6rem] dark:text-white text-left leading-relaxed mb-4">
                        Provides human resources and related services starting from job vacancy announcements,
                        recruitment, all the way to human resources management until termination. This
                        deployment also
                        offers unique
                        services to a category of businesses that operate within industry parks, in addition to
                        foreign
                        employment agencies.
                    </p>
                    <div class="flex justify-end w-full">
                        <button
                            class="text-white text-[0.6rem] hover:text-[#82d3cb] bg-primary p-1 rounded font-bold flex items-center">
                            Know more
                        </button>
                    </div>
                </div>

            </div>
            <div class="mt-8">
                <!-- Search and Filters Row -->
                <div
                    class=" sticky   mt-1 z-10 bg-gray-100 dark:bg-[#011812] px-4 py-2 top-14   border-gray-200 dark:border-gray-700">
                    <div class="flex flex-col items-center  justify-between lg:flex-row">
                        <!-- Small Search Field -->
                        <form @submit.prevent="searchDone" class="flex-none w-full lg:w-1/3 mb-2   lg:mr-4 relative">
                            <input type="text" v-model="titleSearch" placeholder="Search"
                                class=" w-full px-4 py-1 bg-white dark:bg-slate-600 border text-gray-600 rounded-md focus:ring-primary focus:border-primary focus:outline-none" />
                            <Icon name="material-symbols:search-rounded"
                                class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary cursor-pointer"
                                aria-label="Search" />
                        </form>




                        <!-- Large Position Filter -->
                        <div class="flex-grow w-full lg:w-1/6 mb-4 lg:mb-0">
                            <MyTextfeild @updateSearch="UpdateSearchTerm" :items="Positions"
                                placeholder="Select Position" v-model="selctedPosition"
                                @update:modelValue="selctedPosition = $event" />

                        </div>

                        <!-- Large Sector Filter -->
                        <div class="flex-grow w-full lg:w-1/5 mb-4 lg:mb-0">
                            <MyTextfeild @updateSearch="UpdateSearchTerm" :items="Sectors" placeholder="Select Sector"
                                v-model="selectedSector" @update:modelValue="selectedSector = $event" />

                        </div>

                        <!-- Large City Filter -->
                        <div class="flex-grow w-full lg:w-1/5">
                            <MyTextfeild @updateSearch="UpdateSearchTerm" :items="City" placeholder="Select City"
                                v-model="selectedCity" @update:modelValue="selectedCity = $event" />
                        </div>
                    </div>
                </div>

                <!-- Job Count -->
                <h5 class="text-xl ml-4 font-bold text-gray-700 dark:text-white p-4">
                    Showing <span>{{ jobs.length }}</span> of <span></span> posts
                </h5>

                <!-- loadingJob and Job Display -->
                <div v-if="loadingJob" class="flex flex-col items-center justify-center h-screen text-center  px-4">
                    <h2 class="text-2xl font-semibold text-gray-700">Loading...</h2>
                </div>

                <div v-else>
                    <div v-if="jobs.length === 0"
                        class="items-center justify-center h-screen text-center ml-40 mt-12 gap-4 ">
                        <img src="@/assets/img/search-not-found.svg" alt="No results found" class="w-52 h-52 mb-6" />
                        <h2 class="text-2xl font-semibold text-gray-700">
                            Sorry, we couldn’t find any match for your search.
                        </h2>
                    </div>

                    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-6 ">
                        <JobsCard v-for="job in jobs" :key="job.id" :job="job" />
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
::v-deep(.p-slider-range) {
    background-color: #009688 !important;
    /* Red track color */
}
</style>
