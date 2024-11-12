<template>
    <div class="text-center">
        <h1 class="dark:text-white text-4xl font-extrabold text-gray-600 mb-4 mt-16">News & Events</h1>

        <!-- Event containers (responsive to screen sizes) -->
        <div class="flex gap-[3rem] items-center justify-center">
            <!-- Event List -->
            <div v-for="(event, index) in visibleEvents" :key="index" class="flex justify-center">
                <Event :image="event.image" News="HahuJobs News" Date="29 Oct 2024" :ServiceName="event.ServiceName"
                    :Description="event.Description" />
            </div>
        </div>

        <!-- Dots for navigation -->
        <div class="flex justify-center mt-3 space-x-3">
            <button class="w-2 h-1 rounded-full"
                :class="{ 'bg-[#009688]': currentIndex === 0, 'bg-gray-300': currentIndex !== 0 }"
                @click="setCurrentIndex(0)"></button>
            <button class="w-2 h-1 rounded-full"
                :class="{ 'bg-[#009688]': currentIndex === 1, 'bg-gray-300': currentIndex !== 1 }"
                @click="setCurrentIndex(1)"></button>
            <button class="w-2 h-1 rounded-full"
                :class="{ 'bg-[#009688]': currentIndex === 2, 'bg-gray-300': currentIndex !== 2 }"
                @click="setCurrentIndex(2)"></button>
        </div>

        <div class="flex justify-center mt-6">
            <button
                class="bg-[#009688] hover:bg-[#a1d1cc] hover:text-black text-white font-bold text-sm mt-3 flex items-center justify-center h-10 w-28 rounded-md">
                More blogs
                <svg class="w-4 h-4 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M12.293 5.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 12H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
                </svg>
            </button>
        </div>
    </div>
</template>
and training, mentorship,
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import stemeduImage from '@/assets/img/stemedu.webp';
import hahujobsemploymentImage from '@/assets/img/hahujobs-employment.jpg';
import vacancy_post_ps61tzImage from '@/assets/img/vacancy_post_ps61tz.jpg';

const events = [
    { image: stemeduImage, ServiceName: 'HaHuJobs to Partner with Humber...', Description: 'HaHuJobs will begin project implementation for the STEM Education for Empowerment Project (STEEP) in Ethiopia to provide vital education and training, mentorship...' },
    { image: hahujobsemploymentImage, ServiceName: 'HaHuJobs Addis Ababa Employment...', Description: 'We are launching our employment center services soon!! The establishment is intended to serve jobseekers via scheduled visits ...' },
    { image: vacancy_post_ps61tzImage, ServiceName: 'How can you post a vacancy on HaHuJobs?', Description: 'Take advantage of every job opportunity using our multi-platform vacancy notification services for jobseekers.' },
    { image: vacancy_post_ps61tzImage, ServiceName: 'Post a Job Opportunity', Description: 'Post job opportunities using our multi-platform notification services for jobseekers.' },
    { image: vacancy_post_ps61tzImage, ServiceName: 'Career Guidance', Description: 'Get career advice and job-seeking tips to help you land your next role.' },

];

const currentIndex = ref(0);
const screenWidth = ref(0);

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
