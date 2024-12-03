<script setup>
import { ref, watch } from 'vue';

const colorMode = useColorMode(); // Reactive, updates dynamically
const isDarkMode = ref(colorMode.value);

// Watch for system preference changes
if (process.client) {
    // Initial check on load
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    colorMode.value = prefersDarkMode ? "dark" : "light";

    // Listen for system preference changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
        colorMode.value = event.matches ? "dark" : "light";
    });
}

// Watch the colorMode to update the dark mode state
watch(isDarkMode, (newValue) => {
    handleDarkModeChange(newValue);
});

// Handler for the dark mode change
function handleDarkModeChange(newDarkModeState) {
    isDarkMode.value = newDarkModeState;
    if (process.client) {
        document.documentElement.classList.toggle('dark', isDarkMode.value);
    }
}

// Theme toggle function
const toggleTheme = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>
<template>
    <div class="absolute right-5">
        <NuxtLink @click="toggleTheme"
            class="dark:text-white dark:hover:text-primary font-roboto focus:font-extrabold active:font-extrabold text-gray-600 text-xs hover:text-primary focus:text-primary">

            <!-- Dark Mode Icon -->
            <svg v-if="colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" width="32" height="18"
                viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M11 3V2q0-.425.288-.712T12 1t.713.288T13 2v1q0 .425-.288.713T12 4t-.712-.288T11 3m0 19v-1q0-.425.288-.712T12 20t.713.288T13 21v1q0 .425-.288.713T12 23t-.712-.288T11 22m11-9h-1q-.425 0-.712-.288T20 12t.288-.712T21 11h1q.425 0 .713.288T23 12t-.288.713T22 13M3 13H2q-.425 0-.712-.288T1 12t.288-.712T2 11h1q.425 0 .713.288T4 12t-.288.713T3 13m16.75-7.325l-.35.35q-.275.275-.687.275T18 6q-.275-.275-.288-.687t.263-.713l.375-.375q.275-.3.7-.3t.725.3t.288.725t-.313.725M6.025 19.4l-.375.375q-.275.3-.7.3t-.725-.3t-.288-.725t.313-.725l.35-.35q.275-.275.688-.275T6 18q.275.275.288.688t-.263.712m12.3.35l-.35-.35q-.275-.275-.275-.687T18 18q.275-.275.688-.287t.712.262l.375.375q.3.275.3.7t-.3.725t-.725.288t-.725-.313M4.6 6.025l-.375-.375q-.3-.275-.3-.7t.3-.725t.725-.288t.725.313l.35.35q.275.275.275.688T6 6q-.275.275-.687.288T4.6 6.025M12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18m0-2q1.675 0 2.838-1.162T16 12t-1.162-2.838T12 8T9.162 9.163T8 12t1.163 2.838T12 16m0-4" />
            </svg>

            <!-- Light Mode Icon -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" width="32" height="28" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" aria-hidden="true"
                class="w-6 h-5 transition-colors duration-200 outlineReactiveIcon hover:stroke-primary">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
                </path>
            </svg>

        </NuxtLink>
    </div>
</template>