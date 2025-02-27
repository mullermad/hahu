<script setup>

</script>

<template>
    <div class="h-screen overflow-hidden hidden lg:flex lg:w-1/2 flex-col py-4 2xl:py-12 ">
        <div class="ml-52 space-y-4 ">
            <IconLoginLogo class="ml-8 2xl:ml-1" />
            <IconMotoLogin class="ml-10 " />
        </div>

        <div class="2xl:mt-10 ml-8">
            <img src="@/assets/img/login_illustration.png" alt="Login illustration"
                class="w-[60%] h-full ml-44 -mt-6" />
        </div>
        <div className="text-white font-roboto  text-center -mt-14">
            <p className="2xl:text-[34px] mt-8 lg:text-2xl uppercase font-semibold 2xl:leading-[3.75rem]">
                Your Dream Jobs are Waiting
            </p>
            <div className="w-[50%] mx-auto mt-2 2xl:mt-4 2xl:mb-6 border-2 border-b border-white"></div>
            <p className="mx-auto w-[70%] text-lg 2xl:text-[1.2rem] p-3">
                Enhance your professional trajectory with HaHuJobs, a premier platform that provides access to a
                diverse spectrum of thousands of open vacancies. Seamlessly pursue and apply for your aspirations
                across all levels of your job search.
            </p>
        </div>
    </div>
</template>
