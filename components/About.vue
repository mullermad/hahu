<script setup>
import hahu_robotImage from '@/assets/img/hahu_robot.svg';
import telegramImage from '@/assets/img/telegram.svg';
import xImage from '@/assets/img/x.svg';
import linkedin_colorImage from '@/assets/img/linkedin_color.svg';
import facebookcircularImage from '@/assets/img/facebook-circular.svg';
</script>


<template>
    <section class="about-section mt-12">
        <div class="dark:text-white px-24 flex flex-col lg:flex-row items-center space-x-4 lg:space-y-0">
            <!-- Text Content -->
            <div class="text-content w-full  lg:w-1/3  text-center lg:text-left">
                <h2 class="dark:text-white  text-4xl 2xl:text-5xl font-black text-gray-700 mb-2 p-2">
                    What makes us standout from the rest
                </h2>
                <div
                    class="dark:text-white text-gray-600 leading-relaxed text-[0.75rem] 2xl:text-lg mb-6 sm:max-w-lg lg:max-w-2xl px-4">
                    HaHuJobs Primary services are deployments targeting the needs of the Ethiopian jobseeker, with both
                    online and assisted models. The platform is a tool intended to assist the process of looking for a
                    job
                    at all levels of employment. It features vacancy aggregation and posting from various sources as
                    well as
                    enterprises, builds career profiles, apply for jobs, and subscribe to customized alerts for each
                    user
                    via a channel of their choice. HaHuJobs primary also offers standardized classification of all
                    vacancies
                    both sourced from HaHuJobs enterprise services and other manual and digital vacancy platforms.

                    <p class="p-2"></p>

                    Our vacancy classification follows a combination of ILO's ISCO 8 and the O*Net occupation
                    classification with modifications to the Ethiopian labor market trend. Each vacancy is given a
                    four-digit occupation taxonomy identification code to determine its overall standard requirements in
                    terms of skill, knowledge, ability, and expected activities.
                </div>
                <button
                    class="text-white bg-primary hover:bg-[#8fcec8] hover:text-secondary text-[0.62rem] ml-28 lg:ml-2 mt-3 md:mt-4 p-1 md:p-2 lg:px-3 lg:py-1 font-semibold flex transition duration-700 ease-in-out items-center border rounded-md">
                    Explore more <span class="lg:justify-start">
                        <svg class="w-2 h-2 ml-1 md:w-4 md:h-4 lg:w-4 lg:h-5" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M12.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 12H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
                        </svg></span>
                </button>
                <div class="social-links mt-4">
                    <h3 class="dark:text-white text-sm lg:ml-2 text-gray-600 font-semibold sm:mb-2">Get Social with Us!
                    </h3>
                    <ul class="flex mt-4 space-x-5 justify-center lg:ml-2 lg:justify-start">
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

            <!-- Image Section -->
            <div class="lg:w-2/3 mt-2 text-content text-center lg:text-left">
                <img :src="hahu_robotImage" alt="HaHuJobs Robot"
                    class="rounded-md mx-auto w-full lg:w-3/4 max-h-[400px] 2xl:max-h-[600px] object-contain" />
            </div>
        </div>
    </section>

</template>
