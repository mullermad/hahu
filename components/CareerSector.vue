<template>
    <div class="mx-auto text-center">
        <h1 class="dark:text-white text-4xl font-extrabold text-gray-600 mb-1 ">Career Sectors</h1>
        <p class="dark:text-white text-sm font-bold text-gray-500 mb-4 font-robot">
            Based on the local labor market trend in Ethiopia, we categorize our vacancies into fourteen sectors.
        </p>
        <div class="flex flex-wrap justify-center  items-center   space-x-6">
            <div class="flex-none w-1/8">
                <Sector :image="naturalScienceImage" sectorName="Natural Science" :openPositions="5" />
            </div>
            <div class="flex-none w-1/8">
                <Sector :image="businessImage" sectorName="Business" :openPositions="54" />
            </div>
            <div class="flex-none w-1/8">
                <Sector :image="creativeImage" sectorName="Creative Arts" :openPositions="5" />
            </div>
            <div class="flex-none w-1/8">
                <Sector :image="educationImage" sectorName="Education" :openPositions="54" />
            </div>
            <div class="flex-none w-1/8">
                <Sector :image="hospitalityImage" sectorName="Hospitality" :openPositions="5" />
            </div>
            <div class="flex-none w-1/8">
                <Sector :image="financeImage" sectorName="Finance" :openPositions="5" />
            </div>
            <div class="flex-none w-1/8">
                <Sector :image="naturalScienceImage" sectorName="Natural Science" :openPositions="5" />
            </div>
            <div class="flex-none w-1/8">
                <Sector :image="businessImage" sectorName="Business" :openPositions="54" />
            </div>
            <div class="flex-none w-1/8">
                <Sector :image="creativeImage" sectorName="Creative Arts" :openPositions="5" />
            </div>
            <div class="flex-none w-1/8">
                <Sector :image="educationImage" sectorName="Education" :openPositions="54" />
            </div>
            <div class="flex-none w-1/8">
                <Sector :image="hospitalityImage" sectorName="Hospitality" :openPositions="5" />
            </div>
            <div class="flex-none w-1/8">
                <Sector :image="financeImage" sectorName="Finance" :openPositions="5" />
            </div>
            <div class="flex-none w-1/8">
                <Sector :image="hospitalityImage" sectorName="Hospitality" :openPositions="5" />
            </div>
            <div class="flex-none w-1/8">
                <Sector :image="financeImage" sectorName="Finance" :openPositions="5" />
            </div>


        </div>


    </div>
</template>


<script setup>
import naturalScienceImage from '@/assets/img/natural-science.svg';
import businessImage from '@/assets/img/business.svg';
import creativeImage from '@/assets/img/creative-art.svg';
import educationImage from '@/assets/img/education.svg';
import hospitalityImage from '@/assets/img/hospitality.svg';
import financeImage from '@/assets/img/finance.svg';
</script>
