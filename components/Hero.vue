<template>
    <section class="py-20 relative">
        <!-- Dot image positioned on the left side and made small -->
        <div class="absolute  left-0 top-12">
            <img src="@/assets/img/dotImage.svg" alt="dot svg" class="w-24 h-36 md:w-37 md:h-56 lg:w-48 lg:h-72" />
        </div>


        <div class="container mx-auto text-center">
            <h1 class="dark:text-white text-4xl font-black text-secondary  text-center mb-1 ">
                All Ethiopian Jobs in One Place
            </h1>

            <p class="dark:text-white text-[0.85rem] font-extrabold py-1  text-gray-700 mb-4  ">Find career
                opportunities
                in
                Ethiopia</p>
            <div class="flex justify-center mb-4">
                <input type="text" placeholder="Job title, city or keyword..."
                    class="dark:bg-slate-600 focus:border-[rgb(32,134,124)] border dark:placeholder-white text-gray-500  rounded-l-md px-1 py-2 w-1/5  focus:w-1/4 focus:border  focus:outline-none text-center placeholder-gray-600  font-semibold text-sm dark:text-white" />
                <button class="ml-1 bg-[rgb(32,134,124)] text-white rounded-r-md px-5  flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2">
                        <circle cx="10.5" cy="11.5" r="8.5"></circle>
                        <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                    </svg>
                    <span class=" font-bold text-[0.8rem]">Find Job</span>
                </button>
            </div>

            <div class="flex justify-center space-x-14 text-gray-700">
                <div class="flex flex-col items-center">
                    <span class="text-xl font-black font-sans text-[#009688] ">723</span>
                    <span class="dark:text-white  text-sm font-extrabold">Jobs</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-xl font-black font-sans text-[#009688] ">256</span>
                    <span class="dark:text-white  text-sm font-extrabold">Companies</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-xl font-extrabold font-sans text-[#009688] ">14</span>
                    <span class="dark:text-white  text-sm font-extrabold">Sectors</span>
                </div>
            </div>

            <div>
                <img src="@/assets/img/homeImage.svg" alt="home image" />
            </div>
        </div>
    </section>
</template>

<script setup>


</script>
