<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { Icon } from '@iconify/vue';
import JobsAnalysisQuery from "@/queries/jobAnalysis.gql";
import getAnalysis from "@/composables/jobs/get-single.js";
const props = defineProps({
    job: {
        type: Object,
        required: true,
    },
});

const jobId = ref("");
const jobAnalysis = ref({});
const route = useRoute();

onMounted(() => {
    jobId.value = route.params.id;
    console.log("Job ID:", jobId.value);
});

// Get analysis query
const {
    onResult: onJobResult,
    loading: loadingJob,
    refetch: refetchJob,
} = getAnalysis(JobsAnalysisQuery, jobId.value);

// Handle Job results
onJobResult(({ data }) => {
    if (data && data.job) {
        jobAnalysis.value = data.job;
        console.log('Definition Field:', jobAnalysis.value);
    }
});

// Watch for jobId changes and refetch if needed
watch(jobId, (newId) => {
    console.log("Job ID Changed:", newId);
    refetchJob({ id: newId });
});

function formatViews(views) {
    if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'k';
    }
    return views;
}


const categories = ref({
    Post: [],
    KPI: [],
    Analysis: [],
});

const language = ref({
    English: [],
    አማርኛ: [],

});

const formatTimestampToTime = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = date.toLocaleString('en-GB', { month: 'short' });
    const year = date.getUTCFullYear();
    return `${day} ${month}, ${year}`;
}


const calculatePercentage = (dataValue, min, max) => {
    return ((dataValue - min) / (max - min)) * 100;
};

</script>

<template>


    <div
        class="bg-white dark:bg-[#121a26] rounded-lg shadow-lg   cursor-pointer  transition-shadow duration-300 h-full ">
        <div class="relative">


            <div class="flex flex-col  md:flex-row mt-6 pt-8 md:space-x-0 ">
                <!-- Left Section: Logo and Entity Name -->
                <div class="flex flex-col items-start  md:mb-0 bg-gray-200 ml-6 mr-2 px-0.5 py-4">
                    <div v-if="job.entity?.logo" class=" mr-4 ml-36 md:ml-4 p-1 py-2   ">
                        <img :src="job.entity?.logo" :alt="job.entity.name" class="h-32 w-36 " />
                    </div>
                    <div v-else>
                        <img src="@/assets/img/logo_150.png" class="h-24 w-24 bg-gray-600 text-gray-500"
                            alt="Default Logo" />
                    </div>

                </div>


                <!-- Right Section: Job Details -->

                <div class="space-y-2  px-1  ">
                    <h2
                        class="text-lg  dark:text-white line-clamp-1 font-roboto font-bold text-gray-700 sm:text-center ml-36 md:ml-1">
                        {{
                            job.title }}
                    </h2>
                    <p
                        class="text-[0.7rem]  dark:text-white line-clamp-1 font-roboto  text-gray-500 sm:text-center md:text-start ml-36 md:ml-2">
                        {{
                            job.entity?.name }}</p>

                    <div class="flex dark:text-gray-300 items-center text-[0.7rem] text-gray-800 font-bold">
                        <Icon icon="majesticons:beaker" class="h-5 w-5 mr-4 text-primary" />
                        {{ job.sub_sector?.sector.name || 'sector not specified' }}
                    </div>
                    <div class="flex dark:text-gray-300  items-center text-[0.7rem] text-gray-800 font-bold">
                        <Icon icon="material-symbols:arrow-top-left-rounded"
                            class="h-5 w-5 rotate-180 mr-4 text-primary" />

                        <span v-if="Array.isArray(job.job_cities)">
                            {{ job.job_cities.map(jobCity => jobCity.city.name).join(', ') }}
                        </span>
                    </div>

                    hover:shadow

                    <div class="flex dark:text-gray-300  items-center text-[0.7rem] text-gray-800 font-bold">
                        <Icon icon="fa6-solid:unlock-keyhole" class="h-4 w-4 mr-4 text-primary" />
                        {{ job.years_of_experience }} - {{ job.max_years_of_experience || 'Any' }} years
                    </div>
                    <div class="flex dark:text-gray-300  items-center text-[0.7rem] text-gray-800 font-bold">
                        <Icon icon="akar-icons:people-group" class="h-4 w-4 mr-4 text-primary" />
                        {{ job.number_of_applicants }} Position
                    </div>
                    <div class="flex dark:text-gray-300  items-center text-[0.7rem] text-gray-800 font-bold">
                        <Icon icon="clarity:eye-show-solid" class="h-5 w-5 mr-4 text-primary" />
                        {{ formatViews(job.total_view_count) }} views
                    </div>

                </div>
            </div>

        </div>

        <div class=" px-6 ">
            <div class=" flex justify-between items-center space-x-5 mr-8 px-2 py-5 ml-8">
                <div v-if="job.type"
                    class="bg-primary rounded-full text-gray-200 flex  text-sm font-roboto py-0.5 px-2 text-center">
                    <Icon
                        icon="streamline:interface-user-block-actions-block-close-denied-deny-geometric-human-person-single-up-user"
                        class="h-5 w-4 mr-2 text-center " />
                    {{ job.type }}

                </div>


                <div
                    class="flex items-center font-bold border-2  rounded-xl text-sm px-4 hover:bg-primary hover:text-white  border-primary text-primary ">
                    <Icon icon="heroicons-solid:share" class="h-4 w-8  " />
                    Share
                </div>


            </div>
            <TabGroup>
                <!-- Tab Headers -->
                <TabList class="flex space-x-3  border-b rounded-b-sm border-gray-200">
                    <Tab v-for="category in Object.keys(categories)" as="template" :key="category"
                        v-slot="{ selected }">
                        <button :class="[
                            'w-[20%] rounded-none dark:text-white py-3  text-xs font-semibold text-gray-700 leading-5',
                            selected ? ' text-primary   border-b  border-primary outline-none focus:outline-none' : ''
                        ]">
                            {{ category }}
                        </button>
                    </Tab>
                </TabList>

                <!-- Tab Panels -->
                <TabPanels class=" mt-4">
                    <TabPanel v-for="category in Object.keys(categories)" :key="category" class="">
                        <!-- Check if category is 'Post' and there is no data -->
                        <p class="  w-full  my-4"></p>

                        <div v-if="category === 'Post'" class="
                          ">
                            <h4 class=" font-roboto dark:text-white items-start text-sm font-bold text-gray-700">Job
                                Description
                            </h4>
                            <div class="flex flex-col items-end m-2 ">


                                <p
                                    class="wrapper text-[0.8rem]   dark:text-white text-gray-600 leading-relaxed font-roboto">
                                    <span v-html="job.description"></span>
                                </p>


                                <button
                                    class="sticky mb-4 items-end px-10 py-2 bottom-4 bg-primary hover:bg-[#7fccc2] text-white font-bold  rounded hover:text-gray-700 text-[0.8rem]">
                                    Apply Now
                                </button>
                            </div>

                        </div>

                        <div v-if="category === 'KPI'" class=" rounded">
                            <h4 class="font-roboto ml-3 text-[0.7rem]  font-bold  text-primary">
                                <Icon class="inline mr-1 h-3 w-4" icon="ri:error-warning-line" />
                                About vacancies


                            </h4>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3  shadow-xl p-6 border-none ">

                                <p
                                    class="text-[0.63rem] p-2 dark:text-white text-gray-700 leading-relaxed font-roboto ">
                                    <span class="font-bold dark:text-white text-gray-600">Title:</span>
                                    {{ job.title }}

                                </p>
                                <p
                                    class="text-[0.63rem] p-2 dark:text-white text-gray-700 leading-relaxed font-roboto ">
                                    <span class="font-bold dark:text-white text-gray-600">Enterprise:</span>
                                    {{ job.entity.name }}

                                </p>
                                <p class="text-[0.63rem] p-2 dark:text-white text-gray-700 leading-relaxed font-roboto">
                                    <span class="
                                    font-bold text-gray-600 dark:text-white">City:</span> <span
                                        v-for="city in job.job_cities" :key="city"
                                        class="text-[0.63rem] p-2 dark:text-white text-gray-700 leading-relaxed font-roboto">

                                        {{ city.city?.name }}
                                    </span>
                                </p>
                                <p
                                    class="text-[0.63rem] p-2 dark:text-white text-gray-700 leading-relaxed font-roboto ">
                                    <span class="font-bold text-gray-600 dark:text-white">Feild of study:</span>
                                    {{ job.job_fields_of_study.field_of_study?.name }}

                                </p>
                                <p
                                    class="text-[0.63rem] p-2 dark:text-white text-gray-700 leading-relaxed font-roboto ">
                                    <span class="font-bold text-gray-600 dark:text-white">sector:</span>
                                    {{ job.sub_sector.sector?.name }}

                                </p>
                                <p
                                    class="text-[0.63rem] p-2 dark:text-white text-gray-700 leading-relaxed font-roboto ">
                                    <span class="font-bold text-gray-600 dark:text-white">sub_sector:</span>
                                    {{ job.sub_sector?.name }}

                                </p>
                                <p
                                    class="text-[0.63rem] p-2 dark:text-white text-gray-700 leading-relaxed font-roboto ">
                                    <span class="font-bold text-gray-600 dark:text-white">salary:</span>
                                    {{ job.salary }}

                                </p>
                                <p
                                    class="text-[0.63rem] p-2 dark:text-white text-gray-700 leading-relaxed font-roboto ">
                                    <span class="font-bold text-gray-600 dark:text-white">Min Education Level:</span>
                                    {{ job.years_of_experience }}

                                </p>
                                <p
                                    class="text-[0.63rem] p-2 dark:text-white text-gray-700 leading-relaxed font-roboto ">
                                    <span class="font-bold text-gray-600 dark:text-white">Max Education Level:</span>
                                    {{ job.max_years_of_experience }}

                                </p>

                                <p
                                    class="text-[0.63rem] p-2 dark:text-white text-gray-700 leading-relaxed font-roboto ">
                                    <span class="font-bold text-gray-600 dark:text-white">Skills:</span>
                                    {{ job.job_skills }}

                                </p>
                            </div>
                            <div
                                class="flex flex-col md:flex-row gap-2 items-center border-none justify-center p-3 mt-5">
                                <div class="dark:bg-[#121a26] bg-white flex flex-col items-center  border
                                  rounded-lg shadow-sm p-6 h-48 w-52  
                                  dark:shadow-green-600 ">
                                    <h2 class="text-[0.7rem] p-1 mb-2 font-bold  text-primary mx-auto">
                                        <Icon class="inline mr-1 h-3 w-4" icon="uil:calender" /> Vacancy
                                        relevance date
                                    </h2>
                                    <p class="text-gray-800 py-2 text-[0.7rem]  dark:text-white">
                                        Scraped on:<span class="text-gray-500 dark:text-white ">{{
                                            formatTimestampToTime(job.scraped_at)
                                        }}</span>
                                    </p>
                                    <p v-if="job.posted_on" class="text-gray-800 py-2 text-[0.7rem] dark:text-white">

                                        Vacancy Posted on:<span class="text-gray-500 dark:text-white ">{{
                                            formatTimestampToTime(job.posted_on) }}</span>
                                    </p>
                                    <p v-else class="text-gray-800 py-2 text-[0.7rem] dark:text-white">

                                        Vacancy Posted on:<span
                                            class="text-gray-800 dark:text-white font-bold">---</span>
                                    </p>
                                    <p class="text-gray-800 text-[0.7rem] py-2 dark:text-white">
                                        Deadline: <span class="text-gray-500 dark:text-white">{{
                                            formatTimestampToTime(job.deadline)
                                        }}</span>
                                    </p>
                                </div>

                                <div class="dark:bg-[#121a26] bg-white flex flex-col items-center  border
                                  rounded-lg shadow-sm p-2 h-48 w-52  
                                  dark:shadow-green-600 ">
                                    <h2 class="text-[0.7rem] p-2 mb-1 font-bold text-primary">
                                        <Icon class="inline mr-1 h-4 w-5"
                                            icon="material-symbols:contact-support-outline" />
                                        How to apply
                                    </h2>
                                    <p class="text-gray-800 py-1 text-[0.7rem] dark:text-white"> Application
                                        Method:<span class="text-gray-500 dark:text-white">{{
                                            job.application_method }}</span>
                                    </p>
                                    <p class="text-gray-800 py-2 text-[0.7rem] dark:text-white"> Application
                                        City: <span class="text-[0.7rem] text-gray-700 dark:text-white"
                                            v-for="city in job.job_cities" :key="city">

                                            {{ city.city?.name }},
                                        </span>
                                    </p>
                                    <p v-if="job.entity.woreda_town"
                                        class="text-gray-800 py-2 text-[0.7rem] dark:text-white">
                                        subcity/woreda:<span class="text-gray-500 dark:text-white">{{
                                            job.entity.woreda_town }}</span>
                                    </p>
                                    <p v-else class="text-gray-800 py-2 text-[0.7rem] dark:text-white">
                                        subcity/woreda:<span class="text-gray-500 dark:text-white">---</span>
                                    </p>
                                    <p class="text-gray-800 py-2 text-[0.7rem] dark:text-white">
                                        description :<span class="text-gray-500 dark:text-white">
                                            <Icon class="inline ml-2 h-4 w-4  text-blue-800"
                                                icon="ion:arrow-up-right-box-outline" />
                                        </span>
                                    </p>
                                </div>
                                <div class="dark:bg-[#121a26] bg-white flex flex-col items-center  border
                                  rounded-lg shadow-sm p-6 h-48 w-52  
                                  dark:shadow-green-600 ">
                                    <h2 class="text-[0.7rem] p-1 mb-2 font-bold text-primary mx-auto">
                                        <Icon class="inline w-4 h-4 mr-2" icon="material-symbols:database" /> vacancy
                                        meta data
                                    </h2>
                                    <p class="text-gray-800 py-2 text-[0.7rem] dark:text-white">
                                        Source:<span class="text-gray-500 dark:text-white">{{
                                            job.source }}</span>
                                    </p>

                                </div>
                            </div>
                            <div>

                                <TabGroup>
                                    <p class="ml-4 font-roboto text-xs font-extrabold dark:text-white text-gray-700">
                                        summary:</p>
                                    <!-- Tab Headers -->
                                    <TabList class="flex space-x-0.5  p-1">
                                        <Tab v-for="lan in Object.keys(language)" as="template" :key="lan"
                                            v-slot="{ selected }">
                                            <button :class="[
                                                'w-[20%] rounded-none py-3 text-gray-600 dark:text-white font-bold text-[0.7rem] leading-5',
                                                selected ? '  dark:text-white font-roboto font-extrabold  text-primary underline  border-none outline-none focus:outline-none' : ''
                                            ]">
                                                {{ lan }}
                                            </button>
                                        </Tab>
                                    </TabList>

                                    <!-- Tab Panels -->
                                    <TabPanels class="">
                                        <TabPanel v-for="category in Object.keys(language)" :key="category">
                                            <!-- Check if category is 'Post' and there is no data -->

                                            <div v-if="category === 'English'" class="p">
                                                <p
                                                    class="text-[0.8rem] dark:text-gray-300 pb-6 border-none text-gray-500  font-roboto">
                                                    {{
                                                        job.summary }}</p>

                                            </div>




                                            <div v-if="category === 'አማርኛ'" class="   rounded">

                                                <img src="@/assets/img/amharic1.png" class="h-40 w-40 mx-40 " />
                                            </div>
                                        </TabPanel>
                                    </TabPanels>
                                </TabGroup>
                            </div>

                        </div>
                        <div v-if="category === 'Analysis'" class="
                          ">
                            <div class="border border-gray-400 rounded mt-6 p-4 ">

                                <div>
                                    <h4 class="font-roboto text-[0.7rem] p-2 font-bold mb-3  text-primary">
                                        <Icon icon="mdi:star" class="w-4 h-4 inline mr-1" /> Vacancy match
                                        with
                                        ISCO
                                        08
                                    </h4>
                                    <p class="font-roboto text-[0.7rem] p-1 font-bold  mb-3 text-blue-500">Electrical
                                        Mechanics and
                                        Fitters / የኤሌክትሪካል መካኒኮችና ገጣጣሚዎች /fitters/ (7412)</p>
                                </div>

                                <div class="flex space-x-4 mt-4">
                                    <!-- First Card: Description and Exclusion -->
                                    <div class="shadow-lg w-[300px] p-4">
                                        <h4 class="text-primary text-[0.7rem] font-bold mb-2">
                                            <Icon icon="material-symbols:description" class="w-4 h-4 inline mr-1" />
                                            Description
                                        </h4>
                                        <p class="text-[0.7rem] text-gray-600 dark:text-gray-300 p-2 mb-2">
                                            {{ jobAnalysis.isco_08.definition || "no description" }}

                                        </p>
                                        <h4 class="text-primary text-[0.7rem] font-bold mb-2">
                                            <Icon icon="ic:sharp-remove-circle-outline" class=" w-4 h-4 inline mr-1" />
                                            Exclusion
                                        </h4>
                                        <p v-if="jobAnalysis.isco_08.parent.excluded_occupations"
                                            class="text-[0.7rem] dark:text-gray-300  text-gray-600 p-2">
                                            {{ jobAnalysis.isco_08.parent.excluded_occupations }}
                                        </p>
                                        <p v-else class="text-[0.7rem] text-gray-600 dark:text-gray-300  p-2">
                                            There are no exclusions for this job.
                                        </p>
                                    </div>

                                    <!-- Second Card: Structure -->
                                    <div class="shadow-lg  w-[500px] p-3 pb-8 ">
                                        <h4 class="text-primary text-[0.7rem] font-bold mb-5">
                                            <Icon icon="hugeicons:pyramid-structure-01" class="w-4 h-4 inline mr-1" />
                                            Structure
                                        </h4>
                                        <div class="flex flex-col gap-1">
                                            <p
                                                class="text-[0.7rem]  text-gray-700 bg-gray-100 dark:text-white dark:bg-gray-600  rounded-md px-4 py-3 ">
                                                <span class="text-white bg-primary px-2 py-1  text-sm mr-2 font-bold">{{
                                                    jobAnalysis.isco_08.parent.isco_08_code }}</span>
                                                {{ jobAnalysis.isco_08.parent.title_en }}/{{
                                                    jobAnalysis.isco_08.parent.title_am }}
                                            </p>

                                            <div class="flex justify-center ">
                                                <span>
                                                    <Icon class="text-gray-600" icon="hugeicons:arrow-down-02" />
                                                </span>
                                            </div>

                                            <p
                                                class="text-[0.7rem] text-gray-600 bg-gray-100 dark:text-white dark:bg-gray-600 rounded-md px-4 py-3">
                                                <span class="text-white bg-primary px-2 py-1  text-sm mr-2 font-bold">{{
                                                    jobAnalysis.isco_08.parent.parent.isco_08_code }}</span>
                                                {{ jobAnalysis.isco_08.parent.parent.title_en }}/{{
                                                    jobAnalysis.isco_08.parent.parent.title_am }}
                                            </p>
                                            <div class="flex justify-center">
                                                <span>
                                                    <Icon class="text-gray-600" icon="hugeicons:arrow-down-02" />
                                                </span>
                                            </div>
                                            <p
                                                class="text-[0.7rem] text-gray-600 bg-gray-100 dark:text-white dark:bg-gray-600 rounded-md px-4 py-3">
                                                <span class="text-white bg-primary px-2 py-1  text-sm mr-2 font-bold">{{
                                                    jobAnalysis.isco_08.parent.parent.parent.isco_08_code }}</span>
                                                {{ jobAnalysis.isco_08.parent.parent.parent.title_en }}/{{
                                                    jobAnalysis.isco_08.parent.parent.parent.title_am }}
                                            </p>


                                        </div>


                                    </div>


                                </div>

                                <p class="text-[0.7rem] text-gray-500 dark:text-gray-300 m-2 p-4">The International
                                    Standard Classification
                                    of
                                    Occupations (ISCO) is one of the
                                    main international classifications for which ILO is responsible. It belongs
                                    to the international family of economic and social classifications. ISCO is
                                    a tool for organizing jobs into a clearly defined set of groups according to
                                    the tasks and duties are undertaken in the job.</p>



                            </div>
                            <div class="border rounded mt-10  p-4 ">

                                <div>
                                    <h4 class="font-roboto text-[0.7rem] p-2 font-bold mb-1  text-primary">
                                        <Icon icon="mdi:star" class="w-4 h-4 inline mr-1" />Vacancy
                                        Analysis
                                    </h4>
                                    <p class="font-roboto text-[0.7rem]  ml-2 font-bold  text-blue-500">Electrical
                                        and Electronics Installers and Repairers, Transportation Equipment (49-2093.00)

                                    </p><span class="text-[0.68rem] ml-2 text-gray-700 dark:text-gray-300">Also Called:
                                        Body Wirer, Control
                                        Troubleshooter,
                                        Critical Power Install
                                        Technician</span>
                                </div>

                                <div class="flex space-x-2 mt-4">
                                    <!-- First Card: Description and Exclusion -->
                                    <div>
                                        <p class="text-xs ml-3 text-primary font-bold ">
                                            <Icon icon="mdi:star" class="w-4 h-4 inline mr-1" />Skill
                                        </p>
                                        <div class="shadow-lg max-h-[250px]   overflow-y-auto w-[220px] p-4  ">

                                            <div v-for="(skill, index) in jobAnalysis.soc_2010.skills" :key="index"
                                                class="">

                                                <!-- Display the skill name dynamically -->
                                                <p class="text-[0.6rem] text-gray-600 dark:text-gray-300">{{
                                                    skill.content_model_reference.element_name }}</p>

                                                <div class="relative pt-1">
                                                    <!-- Wrapper to align the percentage and progress bar inline -->
                                                    <div class="flex mb-2 items-center justify-between">
                                                        <!-- Progress bar container -->
                                                        <div class="w-full bg-gray-200 rounded-full">
                                                            <!-- Green progress bar, dynamically setting the width based on percentage -->
                                                            <div class="bg-primary text-[0.6rem] leading-none py-0.5 text-center text-white"
                                                                :style="{ width: calculatePercentage(skill.data_value, skill.scales_reference.minimum, skill.scales_reference.maximum) + '%' }">
                                                            </div>
                                                        </div>

                                                        <!-- Display percentage dynamically -->
                                                        <span
                                                            class="text-[0.6rem] font-semibold inline-block px-1 uppercase rounded-full text-primary">
                                                            {{ calculatePercentage(skill.data_value,
                                                                skill.scales_reference.minimum,
                                                                skill.scales_reference.maximum).toFixed(2) }}%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <p class="text-xs  text-primary font-bold  ml-3 mt-4 ">
                                            <Icon icon="ic:outline-dataset" class="w-4 h-4 inline  mr-1 scroll-mt-32" />
                                            Technology
                                        </p>

                                        <div class="shadow-lg max-h-[260px]  overflow-y-auto w-[220px] p-4">
                                            <div v-for="(tecno, index) in jobAnalysis.soc_2010.technology_skills"
                                                :key="index">
                                                <li class="text-[0.76rem]  text-gray-700 dark:text-gray-300">{{
                                                    tecno.example }}</li>
                                                <p class="text-[0.67rem] ml-3 p-1 text-gray-500 dark:text-gray-400">{{
                                                    tecno.unspsc_reference.commodity_title }}</p>


                                            </div>
                                        </div>
                                    </div>

                                    <!-- Second Card: Structure -->
                                    <div class="  ">
                                        <div>
                                            <p class="text-xs ml-2 mb-1 text-primary font-bold ">
                                                <Icon icon="game-icons:graduate-cap" class="w-4 h-4 inline mr-1" />
                                                Knowledge
                                            </p>
                                            <div class="shadow-lg max-h-[250px]  overflow-y-auto w-[220px] p-4 ">

                                                <div v-for="(knowledge, index) in jobAnalysis.soc_2010.knowledge"
                                                    :key="index" class="">

                                                    <!-- Display the knowledge name dynamically -->
                                                    <p class="text-[0.6rem] text-gray-600 dark:text-gray-300">{{
                                                        knowledge.content_model_reference.element_name }}</p>

                                                    <div class="relative pt-1">
                                                        <!-- Wrapper to align the percentage and progress bar inline -->
                                                        <div class="flex mb-2 items-center justify-between">
                                                            <!-- Progress bar container -->
                                                            <div class="w-full bg-gray-200 rounded-full">
                                                                <!-- Green progress bar, dynamically setting the width based on percentage -->
                                                                <div class="bg-primary text-[0.6rem] leading-none py-0.5 text-center text-white"
                                                                    :style="{ width: calculatePercentage(knowledge.data_value, knowledge.scales_reference.minimum, knowledge.scales_reference.maximum) + '%' }">
                                                                </div>
                                                            </div>

                                                            <!-- Display percentage dynamically -->
                                                            <span
                                                                class="text-[0.6rem] font-semibold inline-block px-1 uppercase rounded-full text-primary">
                                                                {{ calculatePercentage(knowledge.data_value,
                                                                    knowledge.scales_reference.minimum,
                                                                    knowledge.scales_reference.maximum).toFixed(2) }}%
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>
                                            <p class="text-xs  text-primary font-bold ml-3 mt-5">
                                                <Icon icon="mdi:star" class="w-4 h-4 inline mr-1" />Ability
                                            </p>

                                            <div class="shadow-lg max-h-[250px]  overflow-y-auto w-[220px] p-4  ">

                                                <div v-for="(abilitie, index) in jobAnalysis.soc_2010.abilities"
                                                    :key="index" class="">

                                                    <!-- Display the knowledge name dynamically -->
                                                    <p class="text-[0.6rem] text-gray-600 dark:text-gray-300">{{
                                                        abilitie.content_model_reference.element_name }}</p>

                                                    <div class="relative pt-1">
                                                        <!-- Wrapper to align the percentage and progress bar inline -->
                                                        <div class="flex mb-2 items-center justify-between">
                                                            <!-- Progress bar container -->
                                                            <div class="w-full bg-gray-200 rounded-full">
                                                                <!-- Green progress bar, dynamically setting the width based on percentage -->
                                                                <div class="bg-primary text-[0.6rem] leading-none py-0.5 text-center text-white"
                                                                    :style="{ width: calculatePercentage(abilitie.data_value, abilitie.scales_reference.minimum, abilitie.scales_reference.maximum) + '%' }">
                                                                </div>
                                                            </div>

                                                            <!-- Display percentage dynamically -->
                                                            <span
                                                                class="text-[0.6rem] font-semibold inline-block px-1 uppercase rounded-full text-primary">
                                                                {{ calculatePercentage(abilitie.data_value,
                                                                    abilitie.scales_reference.minimum,
                                                                    abilitie.scales_reference.maximum).toFixed(2) }}%
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>

                                    </div>

                                    <!-- Third Card: Structure -->
                                    <div class="  ">

                                        <div class="space-y-2 ">
                                            <div class="h-[230px] w-[220px] p-4">
                                                <h4 class="text-primary text-[0.8rem] font-bold ml-2">What they do:
                                                </h4>
                                                <p class="text-[0.7rem] text-gray-500 p-2 dark:text-gray-300 mb-2">
                                                    {{ jobAnalysis.soc_2010.description }}
                                                </p>

                                            </div>
                                            <div class=" w-[220px] p-2">
                                                <p class="text-[0.75rem] ml-6  text-primary font-bold  mt-2 ">
                                                    On
                                                    the
                                                    job
                                                    you
                                                    would:
                                                </p>

                                                <div class="shadow-lg max-h-[284px]  overflow-y-auto w-[220px] p-4">
                                                    <div v-for="(taskkey, index) in jobAnalysis.soc_2010.task_statements"
                                                        :key="index" class="">

                                                        <!-- Display the knowledge name dynamically -->
                                                        <li class="text-[0.7rem] text-gray-500 dark:text-gray-300">{{
                                                            taskkey.task }}</li>


                                                    </div>

                                                </div>
                                            </div>

                                        </div>




                                    </div>


                                </div>

                                <p class="text-[0.7rem] text-gray-500 dark:text-gray-300 m-2 p-4">The International
                                    Standard
                                    Classification
                                    of
                                    Occupations (ISCO) is one of the
                                    main international classifications for which ILO is responsible. It belongs
                                    to the international family of economic and social classifications. ISCO is
                                    a tool for organizing jobs into a clearly defined set of groups according to
                                    the tasks and duties are undertaken in the job.</p>



                            </div>
                            <p class="text-xs text-primary font-bold m-2 ">Context of our analysis</p>

                            <p class="text-[0.7rem] text-gray-500 m-2 p-4 dark:text-gray-300">The International Standard
                                Classification
                                of
                                Occupations (ISCO) is one of the
                                main international classifications for which ILO is responsible. It belongs
                                to the international family of economic and social classifications. ISCO is
                                a tool for organizing jobs into a clearly defined set of groups according to
                                the tasks and duties are undertaken in the job.</p>
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>

    </div>
</template>
<style>
.wrapper li {
    @apply list-disc list-inside;
}
</style>