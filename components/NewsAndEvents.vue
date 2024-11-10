<template>
    <div class="mx-auto text-center">
        <h1 class="dark:text-white text-4xl font-extrabold text-gray-600 mb-4 mt-16 font-sans">News & Events</h1>

        <div class="flex flex-wrap justify-center items-center mx-auto  space-x-4">
            <div class="flex-none w-1/7">
                <Event :image="stemeduImage" News="HahuJobs News" Date="29 Oct 2024"
                    ServiceName="HaHuJobs to Partner with Humber..."
                    Description="HaHuJobs will begin project implementation for the STEM Education for Empowerment Project (STEEP) in Ethiopia to provide vital education..." />

            </div>


            <div class="flex-none w-1/7">
                <Event :image="hahujobsemploymentImage" News="HahuJobs News" Date="29 Oct 2024"
                    ServiceName="HaHuJobs Addis Ababa Employmen..."
                    Description="We are launching our employment center services soon!! The establishment is intended..." />
            </div>

            <div class="flex-none w-1/7">
                <Event :image="vacancy_post_ps61tzImage" News="HahuJobs News" Date="29 Oct 2024"
                    ServiceName="How can you post a vacancy on HaHuJobs?"
                    Description="Take advantage of every job opportunity using our multi-platform vacancy notification services for jobseekers. Subscribe to a sector..." />
            </div>

        </div>

        <div class="flex justify-center mt-6">
            <button
                class="bg-[#009688] text-white font-bold text-sm mt-3 flex items-center justify-center h-10 w-28 rounded-md">
                More blogs
                <svg class="w-4 h-4 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M12.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 12H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
                </svg>
            </button>

        </div>
    </div>
</template>


<script setup>
import stemeduImage from '@/assets/img/stemedu.webp';
import hahujobsemploymentImage from '@/assets/img/hahujobs-employment.jpg';
import vacancy_post_ps61tzImage from '@/assets/img/vacancy_post_ps61tz.jpg';



</script>
