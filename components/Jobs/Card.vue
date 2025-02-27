<script setup>
const isJobsModalOpen = ref(false)
const props = defineProps({
    job: {
        type: Object,
        required: true,
    },
});

const formatSalary = (salary) => {
    return `Birr ${salary}/Mon`;
};

function formatViews(views) {
    if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'k';
    }
    return views;
}

const formatTimeLeft = (deadline) => {

    const now = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = Math.abs(deadlineDate - now);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} days left`;
};

// Modal and menu functions
const openJobsModal = () => {
    isJobsModalOpen.value = true;
    console.log("Modal Opened", isJobsModalOpen.value);

};

const closeJobsModal = () => {
    isJobsModalOpen.value = false;
};
</script>

<template>
    <NuxtLink :to="`/jobs/${job.id}`" @click.stop>

        <div
            class="bg-white dark:bg-[#121a26] p-2   rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 hover:ring-1 h-full ring-primary ">
            <div class="relative p-4">

                <div class="  left-1 2xl:text-[0.9rem] text-primary text-[0.6rem] font-medium px-3 py-1">
                    <Icon name="uil:calender" class="mr-1  text-primary " />
                    {{ formatTimeLeft(job.deadline) }}
                </div>
                <div class="absolute top-2 right-4 bottom-2 ">
                    <NuxtLink to="/login" class="flex items-center border hover:bg-primary rounded border-primary text-xs 2xl:text-sm text-bold font-roboto px-2 2xl:px-4 py-1
                      text-primary  hover:text-gray-600 transition duration-200" aria-label="Save">
                        <Icon name="heroicons-outline:bookmark" class="mr-2 text-[0.8rem]   hover:text-black" />
                        Save
                    </NuxtLink>
                </div>
                <div class="flex flex-col  md:flex-row pt-8  md:space-x-0">
                    <!-- Left Section: Logo and Entity Name -->
                    <div class="flex flex-col items-start mb-4 md:mb-0">
                        <VDropdown placement="right-top" :triggers="['focus',
                        ]" :showTriggers="triggers => [...triggers, 'hover']"
                            :hideTriggers="triggers => [...triggers, 'click',]" :popperTriggers="['hover']">
                            <template #popper>
                                <div class="w-56 lg:block hidden  p-3 bg-white rounded shadow-lg">
                                    <!-- Set width to 24rem (384px) -->
                                    <div class="flex items-center h-12 w-full mb-4">
                                        <img :src="job.entity.logo" :alt="job.entity.name" class="h-12 w-12 mr-2" />
                                        <span class="font-medium text-gray-800">{{ job.entity.name }}</span>
                                    </div>

                                    <div class="flex items-center text-xs text-gray-500">
                                        <Icon name="material-symbols:call" class="h-5 w-5 mr-4 text-primary" />
                                        {{ 'NA' }}
                                    </div>
                                    <div class="flex items-center text-xs text-gray-500">
                                        <Icon name="material-symbols:location-on-rounded"
                                            class="h-5 w-5  mr-4 text-primary" />
                                        {{ job.job_cities[0]?.city.name.something || 'NA' }}
                                    </div>
                                    <div class="flex items-center text-xs text-gray-500">
                                        <Icon name="material-symbols:groups" class="h-5 w-5 mr-4 text-primary" />
                                        {{ job.job_cities[0]?.city.name || 'Location not specified' }}
                                    </div>

                                    <button
                                        class="text-primary hover:text-[#82d3cb] font-bold text-xs  mt-3 flex items-center">
                                        Explore more
                                        <Icon name="material-symbols:arrow-right-alt"
                                            class="h-5 w-5 mr-4 text-primary" />

                                    </button>
                                </div>

                                <ExampleComponent char="=" />
                            </template>

                            <div v-if="job.entity.logo" class=" h-20 w-20 2xl:h-24 2xl:w-24  md:ml-2">
                                <img :src="job.entity.logo" :alt="job.entity.name" class="h-20 w-20 " />
                            </div>
                            <div v-else>
                                <img src="@/assets/img/logo_150.png" class="h-20 w-20  text-gray-500"
                                    alt="Default Logo" />
                            </div>
                        </VDropdown>
                        <p class="text-left dark:text-white  2xl:font-lightbold text-gray-600 md:ml-2 font-roboto text-xs 2xl:text-sm line-claim-2"
                            style="max-width: 100px;">
                            {{ job.entity.name }}
                        </p>
                    </div>


                    <!-- Right Section: Job Details -->

                    <div class="space-y-2  px-1  ">
                        <h2
                            class="text-xs 2xl:text-lg dark:text-white line-clamp-1 font-roboto font-bold text-gray-700 sm:text-center md:ml-1">
                            {{
                                job.title }}
                        </h2>

                        <div class="flex items-center text-[0.7rem] 2xl:text-[1rem]  text-gray-500">
                            <Icon name="majesticons:beaker" class="h-4 w-4 mr-4 text-primary" />
                            {{ job.sub_sector.sector.name || 'sector not specified' }}
                        </div>
                        <div class="flex items-center text-[0.7rem] 2xl:text-[1rem] text-gray-500">
                            <Icon name="material-symbols:arrow-top-left-rounded"
                                class="h-4 w-4 rotate-180 mr-4 text-primary" />
                            {{ job.sub_sector.name || 'Location not specified' }}
                        </div>
                        <div class="flex items-center text-[0.7rem] 2xl:text-[1rem]  text-gray-500">
                            <Icon name="material-symbols:add-location" class="h-4 w-4 mr-4 text-primary" />
                            {{ job.job_cities[0]?.city.name || 'Location not specified' }}
                        </div>
                        <div class="flex items-center text-[0.7rem] 2xl:text-[1rem]  text-gray-500">
                            <Icon name="fa6-solid:unlock-keyhole" class="h-3 w-3 mr-4 text-primary" />
                            {{ job.years_of_experience }} - {{ job.max_years_of_experience || 'Any' }} years
                        </div>
                        <div class="flex items-center text-[0.7rem] 2xl:text-[1rem]  text-gray-500">
                            <Icon name="akar-icons:people-group" class="h-3 w-3 mr-4 text-primary" />
                            {{ job.number_of_applicants }} Position
                        </div>
                    </div>


                </div>

            </div>


            <div class="px-6 py-6  ">
                <div class="flex justify-start items-start space-x-5 pb-4">
                    <div v-if="job.type"
                        class="bg-primary rounded-full text-gray-200 flex items-center text-sm font-roboto py-1 px-2 text-center">
                        <Icon
                            name="streamline:interface-user-block-actions-block-close-denied-deny-geometric-human-person-single-up-user"
                            class="h-3 w-3 mr-2 " />
                        {{ job.type }}
                    </div>
                    <div v-if="job.salary"
                        class="bg-primary rounded-full text-gray-200 flex items-center text-xs py-1 px-3">
                        <Icon name="iconoir:dollar-circle-solid" class="h-4 w-4 mr-2" />
                        {{ formatSalary(job.salary) }}
                    </div>
                </div>
                <p class=" border-t-2 w-full border-gray-300 my-"></p>
            </div>

            <!-- Bottom Section: Description and Actions -->
            <div class="bg-white px-6   space-y-4 dark:bg-[#121a26]">
                <p class="text-xs 2xl:text-lg dark:text-white text-gray-700 leading-relaxed line-clamp-3 font-roboto ">
                    {{ job.summary }}

                </p>
                <div class="flex justify-center items-center space-x-5">
                    <button
                        class="text-primary 2xl:py-2 2xl:px-4 2xl:text-[1rem] font-lightbold hover:bg-[#7fccc2] border border-primary font-roboto  hover:text-gray-700 py-1 px-4 rounded  text-xs">Read
                        More</button>

                    <button
                        class="bg-primary 2xl:py-2 2xl:px-4 2xl:text-[1rem] hover:bg-[#7fccc2] text-white  font-lightbold py-1 px-4 rounded    hover:text-gray-700 text-xs">
                        Apply Now
                    </button>
                </div>

                <!-- Bottom Section -->
                <div class=" py-2  flex justify-between items-center text-xs mt text-gray-500">
                    <span class="2xl:text-lg">
                        <Icon name="bx:show" class="h-4 w-4 2xl:w-5 2xl:h-5 " />
                        {{ formatViews(job.total_view_count) }} views
                    </span>


                    <span @click.stop.prevent="openJobsModal">
                        <Icon name="mdi:share-variant-outline" class="h-5 w-5 2xl:w-6 2xl:h-6 hover:bg-primary" />
                    </span>
                    <MyShareModal :isOpen="isJobsModalOpen" @close="closeJobsModal" />
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
