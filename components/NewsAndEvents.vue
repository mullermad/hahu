<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import stemeduImage from '@/assets/img/stemedu.webp';
import hahujobsemploymentImage from '@/assets/img/hahujobs-employment.jpg';
import vacancy_post_ps61tzImage from '@/assets/img/vacancy_post_ps61tz.jpg';

const currentIndex = ref(0);
const screenWidth = ref(0);

const events = [
    { image: stemeduImage, ServiceName: 'HaHuJobs to Partner with Humber Polytechnic to Empower Adolescent Girls in Ethiopia', Description: 'HaHuJobs will begin project implementation for the STEM Education for Empowerment Project (STEEP) in Ethiopia to provide vital education and training, mentorship...' },
    { image: hahujobsemploymentImage, ServiceName: 'HaHuJobs Addis Ababa Employment Center Launch', Description: 'We are launching our employment center services soon!! The establishment is intended to serve jobseekers via scheduled visits ...' },
    { image: vacancy_post_ps61tzImage, ServiceName: 'How can you post a vacancy on HaHuJobs?', Description: 'We are launching our employment center services soon!! The establishment is intended to serve jobseekers via scheduled visits ...' },
    { image: vacancy_post_ps61tzImage, ServiceName: 'Post a Job Opportunity', Description: 'We are launching our employment center services soon!! The establishment is intended to serve jobseekers via scheduled visits ...' },
    { image: vacancy_post_ps61tzImage, ServiceName: 'Career Guidance', Description: 'We are launching our employment center services soon!! The establishment is intended to serve jobseekers via scheduled visits ...' },

];


// Function to update screen width
const updateScreenWidth = () => {
    if (typeof window !== 'undefined') {
        screenWidth.value = window.innerWidth;
    }
};

// Compute visible events based on the screen width
const visibleEvents = computed(() => {
    let numberOfVisibleEvents = 1; // Default to mobile size

    if (screenWidth.value > 1024) {
        numberOfVisibleEvents = 3; // Large screen (desktop)
    } else if (screenWidth.value > 600) {
        numberOfVisibleEvents = 2; // Tablet size
    }

    return events.slice(currentIndex.value, currentIndex.value + numberOfVisibleEvents);
});

// Set current index when dot is clicked
const setCurrentIndex = (index) => {
    currentIndex.value = index;
};

// Handle resize event in mounted lifecycle hook
onMounted(() => {
    updateScreenWidth(); // Set initial width
    window.addEventListener('resize', updateScreenWidth); // Listen for resize
});

// Clean up event listener when component is unmounted
onBeforeUnmount(() => {
    if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateScreenWidth); // Clean up on unmount
    }
});
</script>


<template>
    <div class="text-center">
        <h1 class="dark:text-white text-4xl font-extrabold text-gray-600 mb-4 mt-16">News & Events</h1>

        <!-- Event containers (responsive to screen sizes) -->
        <div class="flex gap-[3rem] items-center justify-center">
            <!-- Event List -->
            <div v-for="(event, index) in visibleEvents" :key="index" class="flex justify-center">
                <Event :image="event.image" News="HahuJobs News" Date="29 september 2024"
                    :ServiceName="event.ServiceName" :Description="event.Description" />
            </div>
        </div>

        <!-- Dots for navigation -->
        <div class="flex justify-center mt-3 space-x-3">
            <button class="w-2 h-1 rounded-full"
                :class="{ 'bg-primary': currentIndex === 0, 'bg-gray-300': currentIndex !== 0 }"
                @click="setCurrentIndex(0)"></button>
            <button class="w-2 h-1 rounded-full"
                :class="{ 'bg-primary': currentIndex === 1, 'bg-gray-300': currentIndex !== 1 }"
                @click="setCurrentIndex(1)"></button>
            <button class="w-2 h-1 rounded-full"
                :class="{ 'bg-primary': currentIndex === 2, 'bg-gray-300': currentIndex !== 2 }"
                @click="setCurrentIndex(2)"></button>
        </div>

        <div class="flex justify-center mt-6">
            <button
                class="bg-primary transition duration-700 ease-in-out hover:bg-[#a1d1cc] hover:text-gray-700 text-white  text-[0.68rem] mt-3 flex items-center justify-center h-8 w-28 rounded-md">
                More blogs
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="12" height="22" viewBox="0 0 20 20">
                    <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                        <path
                            d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" />
                        <path
                            d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" />
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>
