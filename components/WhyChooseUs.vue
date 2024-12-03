<script setup>
import keyboardImg from "@/assets/img/keyboard.svg"; // Update with your image path
</script>


<template>
  <section class="about-section p-6">
    <div
      class="dark:text-white  mr-auto flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-4 space-x-8 lg:space-y-0 max-w-screen-lg">
      <!-- Images  -->
      <div class="robot-image lg:w-1/2 text-center mt-32 lg:text-left">
        <img :src="keyboardImg" alt="keyboard image" class="w-full h-auto lg:w-full mx-auto lg:mx-0 rounded-md" />
      </div>

      <div class="text-content lg:w-1/2 lg:pl-8 text-center lg:text-left">
        <h2 class="dark:text-white text-4xl font-extrabold text-gray-600 mb-2 p-3 font-Roboto">
          Why choose us
        </h2>

        <h3 class="text-xl font-bold font-Roboto text-primary mb-2">
          Convenience
        </h3>
        <h5 class="text-primary text-md font-bold mb-2 font-Roboto">
          You no longer look for jobs, jobs look for you.
        </h5>
        <p class="dark:text-white text-gray-600 mb-6 leading-relaxed text-sm font-Roboto">
          We offer aggregated, standardized, and quality-assured vacancy and
          career-related information from various digital as well as manual
          sources to set them into one searchable database.
        </p>

        <h3 class="text-xl font-bold font-Roboto text-primary mb-2">
          Accessibility
        </h3>
        <h5 class="text-primary text-md font-bold mb-2 font-Roboto">
          Reachable across multiple channels and platforms
        </h5>
        <p class="dark:text-white text-gray-600 mb-6 leading-relaxed text-sm font-Roboto">
          Use your mobile, tablet, or desktop to access our website, mobile app,
          Telegram, or Facebook bots and also get personalized job alerts via
          your designated medium.
        </p>

        <h3 class="text-primary text-xl font-bold mb-2">Ease of use</h3>
        <h5 class="text-primary text-md font-bold mb-2 font-Roboto">
          Both online and offline service options.
        </h5>
        <p class="dark:text-white text-gray-600 mb-6 leading-relaxed text-sm font-Roboto">
          HaHuJobs offers both in-person as well as virtual models for all its
          career-related service components through its employment offices
          across the nation and capital Addis Ababa.
        </p>
      </div>
    </div>
  </section>
</template>
