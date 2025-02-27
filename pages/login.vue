<script setup>
definePageMeta({
    layout: "auth"
})

import { ref } from 'vue'

const showPassword = ref(false)
const emailPhone = ref('')
const password = ref('')


const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
}

const handleSubmit = () => {
    console.log('Login attempt with:', emailPhone.value, password.value)
    // After successful login, you might want to redirect the user
    // router.push('/dashboard')
}
</script>


<template>

    <div class="2xl:py-32">
        <form @submit.prevent="handleSubmit" class=" ">
            <div class="space-y-6 ">
                <div class=" pb-10">
                    <IconLogo class="mx-auto w-auto " />

                    <p class="mt-2 text-center mr-32 text-lg font-extralight text-gray-800 dark:text-gray-400">
                        primary
                    </p>
                </div>
                <div>
                    <label for="email-phone" class="block text-gray-600 text-lg font-roboto dark:text-gray-300">
                        Email or Phone Number
                    </label>
                    <input id="email-phone" v-model="emailPhone" type="text" required
                        class="mt-1 block border-primary text-gray-600  focus:border-primary focus:border-2 placeholder-gray-400  font-roboto w-full px-4 py-3 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary  dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Enter your email or phone number (251...)" />
                </div>

                <div>
                    <label for="password" class="block text-gray-600 text-lg font-roboto dark:text-gray-300">
                        Password
                    </label>
                    <div class="relative mt-1">
                        <input id="password" :type="showPassword ? 'text' : 'password'" v-model="password" required
                            class="mt-1 block border-primary text-gray-600 focus:border-primary focus:border-2 placeholder-gray-400 font-roboto w-full px-4 py-3 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Enter your password" />
                        <button type="button" @click="togglePasswordVisibility"
                            class="absolute right-[2%] top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none dark:text-gray-300"
                            aria-label="Toggle password visibility">
                            <Icon v-if="!showPassword" name="heroicons:eye" class="h-5 w-5" />
                            <Icon v-else name="heroicons:eye-slash" class="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-between">


                <div class="text-sm pt-8 pb-4">
                    <NuxtLink to="/forgot-password"
                        class="block text-primary ml-72 text-right text-[0.95rem] font-light font-roboto dark:text-gray-300">
                        Forgot your password?
                    </NuxtLink>
                </div>
            </div>

            <div>
                <button type="submit" class="w-full flex justify-center font-roboto py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 
           hover:bg-[#7fccc2] hover:text-gray-600 transition-colors duration-300 ease-in-out">
                    Log In
                </button>

            </div>
        </form>
        <div class="">


            <div class=" flex justify-center space-x-4  py-6">
                <!-- Google Sign-In Button -->
                <img src="@/assets/img/google.svg" alt="dot svg" class="w-6 h-8 mr-4" />


                <!-- LinkedIn Sign-In Button -->
                <img src="@/assets/img/linkdin.svg" alt="dot svg" class="w-7 h-8 " />

            </div>

        </div>

        <div class="flex justify-center font-light py-1 ">
            <p class="dark:text-primary-dark-2 text-center dark:text-white">
                Already Have an account?
                <NuxtLink to="/signup" class="font-roboto text-primary">
                    Sign up here
                </NuxtLink>
            </p>


        </div>
    </div>
</template>


<style>
/* width */
::-webkit-scrollbar {
    width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #009688;
    border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #009688;
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>