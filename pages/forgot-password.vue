<script setup>
definePageMeta({
    layout: "auth"
})
import { ref } from 'vue'
const emailPhone = ref('')
const password = ref('')




const handleSubmit = () => {
    console.log('Login attempt with:', emailPhone.value, password.value)
    // After successful login, you might want to redirect the user
    // router.push('/dashboard')
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class=" ">
        <div class="space-y-6 ">
            <div class="flex justify-center items-center">
                <div class="w-20 h-20 rounded-full bg-[#afe7e3] flex items-center justify-center">
                    <Icon name="material-symbols:key-vertical-outline" class="mr-2 p-7 text-primary rotate-45 " />
                </div>
            </div>
            <div class="text-center dark:text-white font-roboto font-extrabold text-gray-700 mt-4 text-3xl">
                <h1>Forgot Password?

                </h1>
                <p
                    class="text-xl mt-4 line-clamp-2 text-center mb-4 text-gray-600 font-light font-roboto  dark:text-gray-400">
                    Please enter your email or mobile <span class="block"> number. to reset your password</span>
                </p>
            </div>
        </div>

        <div class="flex  flex-col ml-12 space-y-8 text-start">
            <div>
                <label for="email-phone" class="block text-gray-600 text-lg font-roboto dark:text-gray-300">
                    Email or Phone Number
                </label>
                <input id="email-phone" v-model="emailPhone" type="text" required
                    class="mt-1 block border-primary text-gray-600  focus:border-primary focus:border-2 placeholder-gray-400  font-roboto  w-[80%] px-4 py-3 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary  dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter your email or phone number (251...)" />
            </div>


            <div>
                <button type="submit"
                    class="w-[80%]  hover:text-gray-600 hover:bg-[#7fccc2] flex justify-center font-roboto py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                    Reset Password
                </button>
            </div>
            <div>
                <NuxtLink to="/login"
                    class="w-[50%] dark:text-white ml-12 text-gray-700 flex justify-center font-roboto py-2 px-4 text-md font-medium items-center rounded-md">
                    <!-- Back Arrow Icon using NuxtIcon with mdi:arrow-left-thin -->
                    <Icon name="mdi:arrow-left-thin" class="mr-2 p-3" />
                    Back to Log In
                </NuxtLink>
            </div>
        </div>
    </form>


</template>
