<template>
    <div :class="isDarkMode ? 'bg-[#011812] text-white' : 'bg-gray-100 text-black'">
        <NavBar @update-dark-mode="handleDarkModeChange" />
        <Hero />
        <CareerSector />
        <Services />
        <AllAbout />
        <PostVacancy />
        <NewsAndEvents />
        <Footer />
    </div>
</template>


<script setup>
const isDarkMode = ref(false);

// Handler for the dark mode 
function handleDarkModeChange(newDarkModeState) {
    isDarkMode.value = newDarkModeState;
    if (process.client) {
        document.documentElement.classList.toggle('dark', isDarkMode.value);
    }
}
</script>