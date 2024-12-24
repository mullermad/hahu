<script setup>
import { ref } from 'vue'
const route = useRoute();
import getSingle from "@/composables/jobs/get-single.js";
import jobInfoQuery from "@/queries/jobs/singleJob.gql";
import getData from "@/composables/jobs/get.js";
import positionQuery from "@/queries/position/positions.gql";
import sectorQuery from "@/queries/jobs/sectors.gql"
import cityQuery from "@/queries/jobs/cities.gql"
import applicationImage from '@/assets/img/jobDetail.png';

const job = ref([])
const jobId = ref("");
const search = ref("")
const titleSearch = ref("")
const searchResult = ref("")
const Positions = ref([])
const Sectors = ref([])
const City = ref([])
const limit = ref(10);
const offset = ref(0);
const selctedPosition = ref("")
const selectedSector = ref({
    id: route.query.sector_id || null,
});
const selectedCity = ref("");
const selectedJobType = ref([])
const showFilters = ref(false);
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
onMounted(() => {
    jobId.value = route.params.id;  // Correct way to assign to a ref
    console.log("oooooooooooooooooooooooooo", jobId.value);  // Log immediately after setting the value
});

watch(
    () => route.params.id, // Watch the route parameter `id`
    (newId) => {
        jobId.value = newId;  // Update the jobId reactive variable when the route's id changes
        console.log('jobId updated inside watcher:', newId);  // Log the updated jobId
    },
    { immediate: true }  // Run the watcher immediately with the current value of route.params.id
);
console.log('jobId updated Outside watcher:', jobId.value);  // Log the updated jobId

//job 
const {
    onResult: onJobResult,
    loading: loadingJob,
    refetch: refetchJob,
} = getSingle(jobInfoQuery,
    jobId.value
);


//Handle Job results
onJobResult(({ data }) => {
    if (data && data?.job) {
        job.value = data?.job;

    }
});
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
//TODO remove unnecessary query
</script>

<template>
    <div class="min-h-screen  bg-gray-100 dark:bg-[#011812]">
        <div class="flex flex-col md:flex-row ">
            <div class="mt-20 md:w-[18%]">
                <div class="p-4  ">
                    <!-- Toggle Button for Additional Filters -->
                    <div>
                        <button @click="toggleFilters" class="flex justify-between items-center text-left ">

                            <Icon name="lets-icons:filter" class="w-4 h-4 mr-2" />

                            <h2 class="text-md font-bold dark:text-white text-gray-700"> Additional Filters</h2>
                            <svg :class="{ 'rotate-180': showFilters }" class="ml-6 w-6 h-6 transition-transform"
                                fill="#009688" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
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
                                        @change="yearsofexperiancerange = $event" v-model="yearsofexperiancerange"
                                        class="" />
                                </Vueform>
                            </ClientOnly>

                            <div class="flex items-center justify-between mt-2">
                                <p class="mr-2 text-[0.6rem] dark:text-white text-gray-600 whitespace-nowrap">
                                    {{ !isChecked ? yearsofexperiancerange[0] + "- " +
                                        yearsofexperiancerange[1] + "years of experience" : "greater than 10 years" }}
                                </p>

                                <label
                                    class="flex items-center dark:text-white  text-[0.7rem] text-gray-700 cursor-pointer">
                                    <input @click="toggleCheck" type="checkbox" v-model="isChecked"
                                        class="mr-2 w-4 h-4  text-white bg-white cursor-pointer appearance-none checked:bg-primary border-2 border-gray-300 rounded-sm checked:border-primary relative
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



            </div>

            <div class="mt-8 ml-6 flex-1">
                <!-- Search and Filters Row -->
                <div
                    class=" sticky   mt-1 z-10 bg-gray-100 dark:bg-[#011812] px-4 py-2 top-14   border-gray-200 dark:border-gray-700">
                    <div class="flex flex-col items-center  justify-between lg:flex-row">
                        <!-- Small Search Field -->
                        <form @submit.prevent="searchDone" class="flex-none  w-full lg:w-1/3 mb-2   lg:mr-4 relative">
                            <input type="text" v-model="titleSearch" placeholder="Search"
                                class="hover:border-primary  w-full mt-2 dark:text-white text-sm px-4 py-1 bg-white dark:bg-slate-600 border text-gray-600 dark:placeholder-white rounded-md focus:ring-primary focus:border-primary focus:outline-none" />
                            <Icon name="material-symbols:search-rounded"
                                class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary cursor-pointer"
                                aria-label="Search" />
                        </form>




                        <!--  Position Filter -->
                        <div class="flex-grow w-full lg:w-1/6 mb-4 lg:mb-0">
                            <MyTextfeild @updateSearch="UpdateSearchTerm" :items="Positions"
                                placeholder="Select Position" v-model="selctedPosition"
                                @update:modelValue="selctedPosition = $event" />

                        </div>

                        <!--  Sector Filter -->
                        <div class="flex-grow w-full lg:w-1/5 mb-4 lg:mb-0">
                            <MyTextfeild @updateSearch="UpdateSearchTerm" :items="Sectors" placeholder="Select Sector"
                                v-model="selectedSector" @update:modelValue="selectedSector = $event" />

                        </div>

                        <!--  City Filter -->
                        <div class="flex-grow w-full lg:w-1/5">
                            <MyTextfeild @updateSearch="UpdateSearchTerm" :items="City" placeholder="Select City"
                                v-model="selectedCity" @update:modelValue="selectedCity = $event" />
                        </div>
                    </div>
                </div>

                <!-- loadingJob and Job Display -->
                <div class="flex justify-between">
                    <div>
                        <div v-if="loadingJob"
                            class="flex flex-col items-center justify-center h-screen text-center mx-auto px-4">
                            <h2 class="text-2xl font-semibold text-gray-700">Loading...</h2>
                        </div>

                        <div v-else>
                            <div class="mt-4 mr-4  ">
                                <JobsSingleCard :job="job" />
                            </div>
                        </div>
                    </div>

                    <!--right side card-->
                    <div
                        class="dark:bg-[#121a26] mt-6  flex-shrink-0 mr-5 py-4 px-4  bg-white flex flex-col items-center rounded-lg w-[260px] h-[350px] shadow-sm ">
                        <img :src="applicationImage" alt="Sector Image" class="w-40 h-40 mb-6 mx-auto" />

                        <p class="text-gray-600 text-[0.6rem] dark:text-white text-left leading-relaxed mb-4">
                            HaHuJobs the largest data-driven job matching and labor market information platform in
                            Ethiopia. With various service deployments to address the Ethiopian labor market needs; we
                            stand at the forefront of the local digital job matching industry.


                        </p>
                        <div class="flex justify-end w-full">
                            <button
                                class="text-white text-[0.6rem] hover:text-[#82d3cb] bg-primary p-1 rounded font-bold flex items-center">
                                Know more
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
