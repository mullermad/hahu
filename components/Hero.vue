<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Importing useRouter

const searchTerm = ref("");

const router = useRouter();

// Handle form submission 
const onSearchSubmit = (event) => {
    if (searchTerm.value) {
        // Update the URL to reflect the search term as a query parameter
        router.push({ path: '/jobs', query: { search: searchTerm.value } });
    } else {
        router.push({ path: '/jobs' });
    }
};
</script>

<template>
    <section class="py-20 2xl:py-36 relative">
        <!-- Dot image positioned on the left side and made small -->
        <div class="absolute  left-0 top-8">
            <img src="@/assets/img/dotImage.svg" alt="dot svg" class="w-24 h-36 md:w-37 md:h-56 lg:w-48 lg:h-72" />
        </div>


        <div class="container mx-auto text-center ">
            <div class="flex items-center text-center justify-center">
                <h1
                    class="prose text-4xl 2xl:text-5xl font-body font-black mb-2 text-secondary dark:text-white text-center">
                    All Ethiopian Jobs in One Place
                </h1>

            </div>

            <p class="dark:text-white text-md  font-bold py-1  text-gray-700 mb-4  ">Find career
                opportunities in Ethiopia</p>

            <div>
                <form @submit.prevent="onSearchSubmit" class="flex justify-center mb-4">
                    <input type="text" v-model="searchTerm" placeholder="Job title, city or keyword..."
                        class="hover:border-[rgb(32,134,124)]  border border-gray-300 dark:placeholder-white text-gray-500 rounded-l-md px-1 py-2 2xl:py-3 2xl:px-2 w-1/5 2xl:w-1/4 focus:w-1/4 2xl:focus:w-1/3  focus:border focus:outline-none text-center placeholder-gray-500 font-semibold text-sm 2xl:text-lg dark:text-white transition-all duration-1000 focus:transition-all ease-in-out focus:duration-1000" />
                    <button type="submit"
                        class="ml-1 bg-[rgb(32,134,124)] text-white rounded-r-md px-5 flex items-center whitespace-nowrap">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2">
                            <circle cx="10.5" cy="11.5" r="8.5"></circle>
                            <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                        </svg>
                        <span class="font-bold text-[0.8rem] 2xl:font-extrabold 2xl:text-[1rem]">Find Job</span>
                    </button>
                </form>




            </div>

            <div class="flex justify-center space-x-14 text-gray-700 ">
                <div class="flex flex-col items-center">
                    <span class="text-xl font-black 2xl:text-2xl font-sans text-primary ">723</span>
                    <span class="dark:text-white 2xl:text-xl  text-sm font-extrabold">Jobs</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-xl font-black font-sans text-primary 2xl:text-2xl ">256</span>
                    <span class="dark:text-white  text-sm font-extrabold 2xl:text-xl">Companies</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-xl font-extrabold font-sans text-primary 2xl:text-2xl ">14</span>
                    <span class="dark:text-white  text-sm font-extrabold 2xl:text-xl">Sectors</span>
                </div>
            </div>

            <div class="2xl:mt-12">
                <img src="@/assets/img/homeImage.svg" alt="home image" />
            </div>
        </div>
    </section>
</template>
