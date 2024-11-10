<template>
    <section class="about-section  p-6 ">
        <div
            class="dark:text-white  ml-24 mr-auto flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-4 space-x-8 lg:space-y-0 max-w-screen-lg">
            <div class="text-content lg:w-1/2 lg:pr-8 text-center lg:text-left">
                <h2 class="dark:text-white text-4xl font-extrabold text-gray-600 mb-2 p-3 font-Roboto">
                    What is unique about HaHuJobs
                </h2>
                <div class="dark:text-white text-md text-gray-600 mb-6 leading-relaxed font-bold text-sm font-Roboto">
                    HaHuJobs Primary services are deployments targeting the needs of the Ethiopian jobseeker, with both
                    online and assisted models the platform is tool intended to assist the process of looking for a job
                    at all levels of employment. It features vacancy aggregation and posting from various sources as
                    well as enterprises, builds career profiles, apply for jobs, and subscribe to customized alerts for
                    each user via a channel of their choice. HaHuJobs primary also offers standardized classification of
                    all vacancies both sourced from HaHuJobs enterprise services and other manual and digital vacancy
                    platforms.
                    <p class="p-2 "></p>
                    Our vacancy classification follows a combination of ILOs ISCO 8 and the O*Net occupation
                    classification with modifications to the Ethiopian labor market trend. Each vacancy will be given a
                    four-digit occupation taxonomy identification code to determine its overall standard requirements
                    in terms of skill, knowledge, ability, and expected activities.
                </div>
                <button class=" text-white bg-[#009688]  text-sm  mt-3 p-1 flex items-center border rounded-md">
                    Explore more
                    <svg class="w-3 h-3 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path
                            d="M12.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 12H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
                    </svg>
                </button>
                <div class="social-links mt-4">
                    <h3 class="dark:text-white text-sm  text-gray-600 font-bold font-sans">Get Social with Us!</h3>
                    <ul class="flex mt-4 space-x-4 justify-center lg:justify-start">
                        <li><a href="social_link" target="_blank" class="social-icon">
                                <img :src="facebookcircularImage" alt="Facebook" class="w-4 h-4" />
                            </a></li>
                        <li><a href="social_link" target="_blank" class="social-icon">
                                <img :src="xImage" alt="X" class="w-4 h-4" />
                            </a></li>
                        <li><a href="social_link" target="_blank" class="social-icon">
                                <img :src="linkedin_colorImage" alt="LinkedIn" class="w-4 h-4" />
                            </a></li>
                        <li><a href="social_link" target="_blank" class="social-icon">
                                <img :src="telegramImage" alt="Telegram" class="w-4 h-4" />
                            </a></li>
                    </ul>
                </div>
            </div>

            <!-- Images -->
            <div class="robot-image lg:w-1/2 text-center lg:text-right">
                <img :src="hahu_robotImage" alt="HaHuJobs Robot"
                    class="w-full h-auto lg:w-full mx-auto lg:mx-0 rounded-md" />
            </div>
        </div>
    </section>
</template>

<script setup>
import hahu_robotImage from '@/assets/img/hahu_robot.svg';
import telegramImage from '@/assets/img/telegram.svg';
import xImage from '@/assets/img/x.svg';
import linkedin_colorImage from '@/assets/img/linkedin_color.svg';
import facebookcircularImage from '@/assets/img/facebook-circular.svg';
</script>
