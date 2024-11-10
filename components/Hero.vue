<template>
    <section class="py-24 relative">
        <!-- Dot image positioned on the left side and made small -->
        <div class="absolute -top-13 left-0">
            <img src="@/assets/img/dotImage.svg" alt="dot svg" class="w-37 h-56 " />
        </div>


        <div class="container mx-auto text-center">
            <h1 class="dark:text-white text-4xl font-extrabold text-gray-600 mb-1 font-sans">All Ethiopian Jobs in One
                Place</h1>
            <p class="dark:text-white text-sm font-bold text-gray-600 mb-4 font-robot">Find career opportunities in
                Ethiopia</p>
            <div class="flex justify-center mb-4">
                <input type="text" placeholder="Job title, city or keyword..."
                    class="dark:bg-slate-500 dark:placeholder-white font-serif font-black border border-gray-300 rounded-l-md p-2 w-1/4 transition-all duration-300 focus:w-1/3 focus:border focus:border-green-900 focus:outline-none text-center placeholder-gray-500 dark:text-white" />
                <button class="ml-2 bg-[#009688] text-white rounded-r-md px-8 font-sans flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2">
                        <circle cx="10.5" cy="11.5" r="8.5"></circle>
                        <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                    </svg>
                    <span class="font-serif font-bold">Find Job</span>
                </button>
            </div>

            <div class="flex justify-center space-x-14 text-gray-700">
                <div class="flex flex-col items-center">
                    <span class="text-xl font-extrabold text-[#009688] font-sans">723</span>
                    <span class="dark:text-white font-sans text-sm font-extrabold">Jobs</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-xl font-extrabold text-[#009688] font-sans">256</span>
                    <span class="dark:text-white font-sans text-sm font-extrabold">Companies</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-xl font-extrabold text-[#009688] font-sans">14</span>
                    <span class="dark:text-white font-sans text-sm font-extrabold">Sectors</span>
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
