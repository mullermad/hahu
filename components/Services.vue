<script setup>
import build_career_profileImage from '@/assets/img/build_career_profile.svg';
import job_applicationImage from '@/assets/img/job_application.svg';
import vacancy_notificationImage from '@/assets/img/vacancy_notification.svg';
</script>



<template>
    <div class="mx-auto text-center mt-12">
        <h1 class="dark:text-white text-4xl 2xl:text-5xl font-extrabold text-secondary mb-2 ">Services</h1>
        <p
            class="dark:text-white text-xs 2xl:text-lg font-lightbold    text-gray-500 mb-3 leading-5 text-center max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[1200px] mx-auto p-4">
            HaHuJobs offers digital career profiling, job application and subscription-based relevant vacancy
            announcement notifications to job seekers that sign up on its primary service deployment.
        </p>


        <div class="flex flex-wrap justify-center items-center mx-auto  space-x-4 2xl:space-x-8">
            <div class="flex-none w-1/7">
                <ServiceCard :image="build_career_profileImage" ServiceName="Build Career Profile"
                    Description="Compose your career profile with context standards and identifiers to showcase your assessed competencies in the sector of your expertise.HaHuJobs offers you a simple, clear..." />
            </div>


            <div class="flex-none w-1/7">
                <ServiceCard :image="job_applicationImage" ServiceName="Job Application"
                    Description="Apply for jobs with just a few clicks, and track the progress of your applications through notifications on multiple platforms. Revolutionize your job applications with pre-prepared..." />
            </div>

            <div class="flex-none w-1/7">
                <ServiceCard :image="vacancy_notificationImage" ServiceName="Vacancy Notification"
                    Description="Take advantage of every job opportunity using our multi-platform vacancy notification services for jobseekers. Subscribe to a sector of your choice with various specific..." />
            </div>

        </div>


    </div>
</template>
