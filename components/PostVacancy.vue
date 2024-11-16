<template>
    <div class="flex flex-col items-center justify-center ">
        <h1 class="dark:text-white text-3xl font-extrabold text-gray-600 mb-3 font-sans">
            Post Vacancy
        </h1>
        <!-- class="dark:text-white text-sm sm:text-base font-bold text-gray-500 mb-3 font-robot text-center max-w-full -->
        <!-- sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] mx-auto px-4" -->
        <p
            class="dark:text-white  text-xs text-gray-500 mb-3 font-robot text-center max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]  px-4 font-bold   font-robot w-[780px] mx-auto ">
            HaHuJobs offers dedicated enterprise cloud services for a full human resource management platform with an
            affordable price package. Posting a vacancy is completely free, and only requires following the below listed
            steps.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 w-full max-w-screen-lg">
            <div class="dark:bg-gray-800 p-6 rounded-lg flex flex-col justify-between">
                <div class="flex items-center justify-center bg-[#7fcac5] text-white w-8 h-8 rounded-full mb-3 mx-auto">
                    <h2 class="text-sm font-bold">1</h2>
                </div>
                <button class="dark:text-white px-6 py-2 rounded-lg mb-3 text-sm text-gray-700">
                    Receive
                </button>
                <p class="text-gray-500 dark:text-gray-300 text-xs">
                    You contact us through one of our outlets with the details of your vacancy. You can click the button
                    below to review ways to share your vacancy and review the required information we need to publish
                    your vacancy on all our outlets.
                </p>
            </div>

            <div class="dark:bg-gray-800 p-6 rounded-lg flex flex-col justify-between">
                <div class="flex items-center justify-center bg-[#7fcac5] text-white w-8 h-8 rounded-full mb-3 mx-auto">
                    <h2 class="text-sm font-bold">2</h2>
                </div>
                <button class="dark:text-white px-6 py-2 rounded-lg mb-3 text-sm text-gray-700">
                    Validate
                </button>
                <p class="text-gray-500 dark:text-gray-300 text-xs">
                    Our service officers will receive the details from your organization via the channel you
                    communicated it in. They will review the details provided to validate all required information and
                    ensure the legitimacy of the vacancy.
                </p>
            </div>

            <div class="dark:bg-gray-800 p-6 rounded-lg flex flex-col justify-between">
                <div class="flex items-center justify-center bg-[#7fcac5] text-white w-8 h-8 rounded-full mb-3 mx-auto">
                    <h2 class="text-sm font-bold">3</h2>
                </div>
                <button class="dark:text-white px-6 py-2 rounded-lg mb-3 text-gray-700 text-sm">
                    Publish
                </button>
                <p class="text-gray-500 dark:text-gray-300 text-xs">
                    All vacancy details will then go through our standardized categorization process for taxonomy
                    identification and reorganization of information, if required, to fit the publishing structure of
                    our outlets. Once everything is validated, the vacancy will be approved for publishing.
                </p>
            </div>
        </div>

        <div class="mt-6">
            <button
                class="px-4 py-2 bg-[#009688] hover:bg-[#8fcec8] transition duration-700 ease-in-out hover:text-secondary text-white rounded-md text-xs">
                Post Vacancy
            </button>
        </div>



        <div class="flex justify-center space-x-20 text-gray-700 mt-16">
            <div class="flex flex-col items-center">
                <span class="text-3xl font-extrabold text-[#009688] font-sans">623</span> <span
                    class="dark:text-white font-sans text-sm font-extrabold ">Enterprises</span>

            </div>
            <div class="flex flex-col items-center">
                <span class="text-3xl font-extrabold text-[#009688] font-sans">15.8K</span>
                <span class="dark:text-white font-sans  font-extrabold text-sm">Users</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="text-3xl font-extrabold text-[#009688] font-sans">89</span>
                <span class="dark:text-white font-sans text-sm font-extrabold">Opportunities</span>

            </div>
        </div>

    </div>
</template>

<script setup>

</script>
