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
    <NuxtLink :to="`/jobs/${job.id}`">

        <div
            class="bg-white relative dark:bg-[#121a26] w-full h-[200px] md:h-[210px] md:w-[280px] 2xl:h-[260px] 2xl:w-[390px]  xl:py-8  rounded-lg overflow-hidden cursor-pointer  hover:ring-1  ring-primary  ">
            <div>

                <div class="absolute top-2 right-2 2xl:text-[0.8rem]  text-[0.6rem] text-secondary px-3 ">
                    <Icon name="material-symbols:alarm-outline" class="mr-1   " />
                    About {{ formatTimeLeft(job.deadline) }}

                </div>

                <div class="flex flex-col py-1 2xl:py-2 md:flex-row pt-0 2xl:pt-4  md:space-x-0">

                    <div class="space-y-1 ml-3 py-0 2xl:py-2 ">
                        <div class="flex ">
                            <div class="md:ml-1">
                                <img v-if="job.entity.logo" :src="job.entity.logo" :alt="job.entity.name"
                                    class="h-12 w-12 " />

                                <img v-else src="@/assets/img/logo_150.png" class="h-12 w-12" alt="Default Logo" />

                            </div>

                            <p class="text-left dark:text-white mt-4  2xl:font-lightbold text-gray-600  md:ml-4 font-roboto text-xs 2xl:text-sm line-claim-2"
                                style="max-width: 200px;">
                                {{ job.entity.name }}
                            </p>


                        </div>

                        <div class="flex items-start text-[0.8rem] pt-2   ml-4 2xl:text-[1rem] font-bold text-gray-700">

                            {{
                                job.title }}

                        </div>
                        <div class="flex items-start text-[0.7rem]  2xl:text-[1rem] ml-2  text-gray-500">
                            <Icon name="emojione-monotone:handshake" class="h-6 w-6 rotate-180 mr-4 text-primary" />
                            {{ job.sub_sector.name || 'Location not specified' }}

                        </div>

                    </div>


                </div>

            </div>

            <div class="flex justify-start items-left px-2  space-x-2 2xl:space-x-3  ">
                <div v-if="job.type"
                    class="bg-primary w-[5rem] rounded-full text-gray-200 flex items-center text-[0.58rem] 2xl:text-[0.7rem] font-roboto  px-2  text-center">
                    <Icon
                        name="streamline:interface-user-block-actions-block-close-denied-deny-geometric-human-person-single-up-user"
                        class="h-3 w-3 mr-2 " />
                    {{ job.type }}
                </div>
                <div v-if="job.years_of_experience"
                    class="bg-primary  rounded-full w-[5rem] text-[0.58rem] text-gray-200 flex items-center 2xl:text-[0.7rem] font-roboto px-2  text-center">

                    <Icon name="fa6-solid:unlock-keyhole" class="h-3 w-3 mr-2" />
                    <p v-if="job.max_years_of_experience">{{ job.years_of_experience }} - {{
                        job.max_years_of_experience }} yrs</p>
                    <p v-else>{{ job.years_of_experience }}yrs</p>

                </div>

                <div v-if="job.number_of_applicants"
                    class="bg-primary 2xl:text-[0.7rem] text-[0.58rem] rounded-full w-[6rem] text-gray-200 flex items-center font-roboto px-2 text-center">
                    <Icon name="fa6-solid:unlock-keyhole" class="h-3 w-3 mr-2 " />
                    {{ job.number_of_applicants }} position
                </div>



            </div>

            <!-- Bottom Section -->
            <div class=" flex items-left justify-between text-xs  text-gray-500">
                <div class="absolute bottom-2 left-2 flex text-[0.7rem] 2xl:text-[0.8rem] text-gray-500">
                    <Icon name="material-symbols:add-location" class="h-4 w-4 mr-1 text-primary" />
                    {{ job.job_cities[0]?.city.name || 'Location not specified' }}
                </div>
                <span class=" absolute bottom-2 right-2 2xl:text-[0.7rem]">
                    <Icon name="bx:show" class="h-4 w-4" />
                    {{ formatViews(job.total_view_count) }}
                </span>
            </div>

        </div>
    </NuxtLink>
</template>
