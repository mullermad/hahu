<script setup>
import { ref } from 'vue'
import JobsQuery from "@/queries/jobs/jobs.gql";
import positionQuery from "@/queries/position/positions.gql";
import getJobs from "@/composables/jobs/getJobs.js";
import getData from "@/composables/jobs/get.js";
import sectorQuery from "@/queries/jobs/sectors.gql"
import cityQuery from "@/queries/jobs/cities.gql"
import job_applicationImage from '@/assets/img/filterimages.png';

//  reactive varables
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
const selctedPosition = ref({
    id: route.query.position_id || null,
})
const selectedSector = ref({
    id: route.query.sector_id || null,
});
const selectedCity = ref({
    id: route.query.city_id || null,
});
const selectedJobType = ref([])
const showFilters = ref(true);
const yearsofexperiancerange = ref([0, 10]);
const isChecked = ref(false);
const selectedRegion = ref([]);



//filters
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
    // else {
    //     and.push({
    //         "sub_sector": {
    //             "sector": {
    //                 "id": {
    //                     "_eq": `${route.query.sector_id}`
    //                 }
    //             }
    //         }
    //     })
    // }


    //filter by expereince
    if (yearsofexperiancerange.value && !isChecked.value) and.push({
        _and: [
            {
                years_of_experience: {
                    _gte: yearsofexperiancerange.value[0]
                }
            },
            {
                years_of_experience: {
                    _lte: yearsofexperiancerange.value[1]
                }
            }
        ],
    })

    //filter is more than 10 years of experiances
    if (isChecked.value) {
        and.push({
            years_of_experience: {
                _gt: 10,
            },
        });
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

    //filter by type
    if (selectedJobType.value.length)
        and.push({
            type: {
                _in: selectedJobType.value
            }
        });
    //filter by Regions
    if (selectedRegion.value.length) {
        and.push({
            "job_cities": {
                "city": {
                    "region_id": {
                        "_in": selectedRegion.value.map((v) => v.id)
                    }
                }
            }
        });
    }


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

const toggleCheck = () => {
    isChecked.value = !isChecked.value;
};

const searchDone = () => {
    searchResult.value = titleSearch.value
}

const UpdateSearchTerm = (v) => {
    search.value = v;
}
//dynamically changing styles of slider background color
watch(isChecked, (newValue) => {
    const primaryColor = newValue ? "#babebe" : "#009688";

    // Remove existing custom style if it exists
    let customStyle = document.getElementById("custom-form-bg-primary");
    if (customStyle) {
        customStyle.remove();
    }

    // Add a new style element to override
    customStyle = document.createElement("style");
    customStyle.id = "custom-form-bg-primary";
    customStyle.innerHTML = `.form-bg-primary { background-color: ${primaryColor} !important; }`;
    document.head.appendChild(customStyle);
})
//job 
const {
    onResult: onJobResult,
    loading: loadingJob,
    refetch: refetchJob,
} = getJobs(JobsQuery, {
    limit: limit,
    offset: offset,
    filter: filterJob,


});


//Handle Job results
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
    green: limit,
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
    <div class="min-h-screen   dark:bg-[#011812] ml-4">
        <div class="flex flex-col md:flex-row ">
            <div class="mt-20 md:w-[18%]">
                <div class="p-4  ">
                    <!-- Toggle Button for Additional Filters -->
                    <div>
                        <button @click="toggleFilters" class="flex justify-between items-center text-left ml-4 ">

                            <Icon name="lets-icons:filter" class="w-4 h-4 2xl:w-6 2xl:h-6 mr-2" />

                            <h2 class="text-md 2xl:text-lg font-bold dark:text-white text-gray-700"> Additional Filters
                            </h2>
                            <svg :class="{ 'rotate-180': showFilters }"
                                class="ml-6 2xl:ml-16 w-6 h-6 2xl:w-7 2xl:h-8 transition-transform" fill="#009688"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.25a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <!-- Filters Section -->
                    <div v-if="showFilters" class="mt-4">
                        <div class="p-4">
                            <ClientOnly>
                                <Vueform>
                                    <SliderElement :disabled="isChecked" :default="[0, 10]" :min="0" :max="10"
                                        @change="yearsofexperiancerange = $event" v-model="yearsofexperiancerange" />
                                </Vueform>
                            </ClientOnly>

                            <div class="flex items-center justify-between mt-2">
                                <p
                                    class="mr-2 text-[0.7rem] xl:text-[0.9rem] dark:text-white text-gray-600 whitespace-nowrap">
                                    {{ yearsofexperiancerange[0] + "- " +
                                        yearsofexperiancerange[1] + " " + " years of experience" }}
                                </p>

                                <label
                                    class="flex items-center dark:text-white  text-[0.7rem] xl:text-[0.8rem] text-gray-700 cursor-pointer">
                                    <input @click="toggleCheck" type="checkbox" v-model="isChecked"
                                        class="mr-2 w-4 h-4 2xl:p-2  text-white  border-primary bg-white cursor-pointer appearance-none checked:bg-primary border rounded-sm checked:border-primary relative
                                              before:content-['✔'] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-0 checked:before:opacity-100" />
                                    &gt;10
                                </label>

                            </div>
                        </div>

                        <div class="w-full border-t border-gray-300 dark:border-gray-600 my-2"></div>

                        <!-- Type Filter Dropdown -->
                        <JobsType v-model="selectedJobType" />

                        <!-- map(region) filter component -->
                        <div class="w-full border-t border-gray-300 dark:border-gray-600 my-2">
                            <MyMap v-model="selectedRegion" />
                        </div>
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

            <div class="mt-8 ml-6 flex-1">
                <!-- Search and Filters Row -->
                <div class=" sticky   mt-1 z-10  dark:bg-[#011812] px-4  top-14   border-gray-200 dark:border-gray-700">
                    <div class="flex flex-col items-center  justify-between lg:flex-row">
                        <!-- Small Search Field -->
                        <form @submit.prevent="searchDone" class="flex-none   w-full lg:w-1/3 mb-2   lg:mr-2 relative">
                            <input type="text" v-model="titleSearch" placeholder="Search"
                                class="hover:border-primary 2xl:py-3  w-full mt-2 dark:text-white text-sm px-4 py-1 placeholder-gray-600 bg-white dark:bg-slate-600 border text-gray-600 dark:placeholder-white rounded-l-md  focus:ring-primary focus:border-primary focus:outline-none" />
                            <Icon name="material-symbols:search-rounded" size="24"
                                class="absolute right-2   top-2/3 transform -translate-y-1/2 text-gray-400 hover:text-primary cursor-pointer"
                                aria-label="Search" />
                        </form>




                        <!--  Position Filter -->
                        <div class="flex-grow  w-full  lg:w-1/6  mb-4 lg:mb-0">
                            <MyTextfeild @updateSearch="UpdateSearchTerm" :items="Positions"
                                placeholder="Select Position" v-model="selctedPosition"
                                @update:modelValue="selctedPosition = $event" />

                        </div>

                        <!--  Sector Filter -->
                        <div class="flex-grow w-full  lg:w-1/5 mb-4  lg:mb-0">
                            <MyTextfeild @updateSearch="UpdateSearchTerm" :items="Sectors" placeholder="Select Sector"
                                v-model="selectedSector" @update:modelValue="selectedSector = $event" />

                        </div>

                        <!--  City Filter -->
                        <div class="flex-grow w-full  lg:w-1/5">
                            <MyTextfeild @updateSearch="UpdateSearchTerm" :items="City" placeholder="Select City"
                                v-model="selectedCity" @update:modelValue="selectedCity = $event" />
                        </div>
                    </div>
                </div>

                <!-- Job Count -->
                <h5 class="text-xl ml-4 font-bold text-gray-700 dark:text-white p-4">
                    Showing <span>{{ jobs.length }}</span> of <span>{{ jobs.length }}</span> posts
                </h5>

                <!-- loadingJob and Job Display -->
                <div v-if="loadingJob"
                    class="flex flex-col items-center justify-center h-screen text-center mx-auto px-4">
                    <h2 class="text-2xl font-semibold text-gray-700">Loading...</h2>
                </div>


                <div v-else>
                    <div v-if="jobs.length === 0"
                        class="flex flex-col items-center justify-center 2xl:mt-24 text-center gap-4">
                        <img src="@/assets/img/search-not-found.svg" alt="No results found"
                            class="w-52 h-52 mb-6 2xl:w-80 2xl:h-80" />
                        <h2 class="text-2xl 2xl:text-3xl font-semibold dark:text-white text-gray-700">
                            Sorry, we couldn’t find any match for your search.
                        </h2>
                    </div>


                    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        <JobsCard v-for="job in jobs" :key="job.id" :job="job" />
                    </div>



                </div>
            </div>
        </div>
    </div>
</template>
<style>
/* Apply custom styles globally */
.form-bg-primary {
    background-color: var(--vf-primary) !important;
    /* Force the use of --vf-primary */
}
</style>