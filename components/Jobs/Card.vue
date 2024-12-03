<script setup>
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

</script>

<template>
    <div
        class="bg-white dark:bg-[#121a26] rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 hover:border-2 border-primary ">
        <div class="relative p-4 md:p-6">

            <div class="absolute top-4 left-4 text-primary text-[0.6rem] font-medium px-3 py-1">
                <Icon name="uil:calender" class="mr-4 p-1 text-primary" />
                {{ formatTimeLeft(job.deadline) }}
            </div>
            <div class="absolute top-4 right-4">
                <button
                    class="flex items-center border rounded border-primary text-xs text-bold font-roboto px-4 py-1 text-gray-700  hover:text-gray-600 transition duration-200"
                    aria-label="Save">
                    <Icon name="heroicons-outline:bookmark" class="mr-4 p-1 text-[0.7rem]  text-primary" />
                    Save
                </button>
            </div>
            <div class="flex flex-col  md:flex-row pt-8 md:space-x-0">
                <!-- Left Section: Logo and Entity Name -->
                <div class="flex flex-col items-start mb-4 md:mb-0">
                    <VDropdown placement="right-top" :triggers="['hover', 'click']">

                        <template #popper>
                            <div class="w-60  p-3 bg-white rounded shadow-lg"> <!-- Set width to 24rem (384px) -->
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
                                    <Icon name="material-symbols:arrow-right-alt" class="h-5 w-5 mr-4 text-primary" />

                                </button>
                            </div>

                            <ExampleComponent char="=" />
                        </template>

                        <div v-if="job.entity.logo" class="h-20 w-20 mb-4">
                            <img :src="job.entity.logo" :alt="job.entity.name" class="h-20 w-20 " />
                        </div>
                        <div v-else>
                            <img src="@/assets/img/logo_150.png" class="h-20 w-20 text-gray-500" alt="Default Logo" />
                        </div>
                    </VDropdown>
                    <p class="text-left text-gray-600 pt-5 font-roboto text-xs font-bold line-claim-2"
                        style="max-width: 120px;">
                        {{ job.entity.name }}
                    </p>
                </div>


                <!-- Right Section: Job Details -->
                <div class="space-y-2 ">
                    <h2 class="text-xs line-clamp-1 font-roboto font-bold text-gray-700 sm:text-center">{{ job.title }}
                    </h2>

                    <div class="flex items-center text-xs text-gray-500">
                        <Icon name="majesticons:beaker" class="h-5 w-5 mr-4 text-primary" />
                        {{ job.sub_sector.sector.name || 'sector not specified' }}
                    </div>
                    <div class="flex items-center text-xs text-gray-500">
                        <Icon name="material-symbols:arrow-top-left-rounded"
                            class="h-5 w-5 rotate-180 mr-4 text-primary" />
                        {{ job.sub_sector.name || 'Location not specified' }}
                    </div>
                    <div class="flex items-center text-xs text-gray-500">
                        <Icon name="material-symbols:add-location" class="h-5 w-5 mr-4 text-primary" />
                        {{ job.job_cities[0]?.city.name || 'Location not specified' }}
                    </div>
                    <div class="flex items-center text-xs text-gray-500">
                        <Icon name="fa6-solid:unlock-keyhole" class="h-5 w-5 mr-4 text-primary" />
                        {{ job.years_of_experience }} - {{ job.max_years_of_experience || 'Any' }} years
                    </div>
                    <div class="flex items-center text-xs text-gray-500">
                        <Icon name="akar-icons:people-group" class="h-5 w-5 mr-4 text-primary" />
                        {{ job.number_of_applicants }} Position
                    </div>
                </div>
            </div>

        </div>

        <div class="px-6  ">
            <div class="flex justify-center items-center space-x-5">
                <div v-if="job.salary"
                    class="bg-primary rounded-full text-white flex items-center text-sm font-roboto py-1 px-2 text-center">
                    <Icon
                        name="streamline:interface-user-block-actions-block-close-denied-deny-geometric-human-person-single-up-user"
                        class="h-4 w-4 mr-2 " />
                    {{ job.type }}
                </div>
                <div v-if="job.salary" class="bg-primary rounded-full text-white flex items-center text-xs py-1 px-3">
                    <Icon name="iconoir:dollar-circle-solid" class="h-5 w-5 mr-2" />
                    {{ formatSalary(job.salary) }}
                </div>
            </div>
            <p class="mx-8 border-t-2 w-[80%] border-gray-300 my-4"></p>
        </div>

        <!-- Bottom Section: Description and Actions -->
        <div class="bg-white px-6 py-6 space-y-4 dark:bg-[#121a26]">
            <p class="text-xs text-gray-700 leading-relaxed line-clamp-3 font-roboto ">
                {{ job.summary }}
            </p>
            <div class="flex justify-center items-center space-x-5">
                <button
                    class="text-primary hover:bg-[#7fccc2] border border-primary font-roboto  hover:text-gray-700 py-2 px-6 rounded  font-medium text-xs">Read
                    More</button>
                <button
                    class="bg-primary hover:bg-[#7fccc2] text-white  font-bold py-2 px-6 rounded    hover:text-gray-700 text-xs">
                    Apply Now
                </button>
            </div>
            <div class="mt-4 flex justify-between items-center text-xs text-gray-500">
                <span>{{ formatViews(job.total_view_count) }} views</span>
                <span>
                    <Icon name="heroicons-solid:share" class="h-5 w-5 mr-4" />
                </span>
            </div>
        </div>
    </div>

</template>
