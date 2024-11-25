<template>
    <div>


        <form @submit.prevent="handleSubmit" class=" ">
            <div class="space-y-6 ">
                <div class=" ">
                    <Logo class="mx-auto w-auto " />

                    <p class="mt-2 text-center mr-32 text-lg font-extralight text-gray-800 dark:text-gray-400">
                        primary
                    </p>
                </div>


                <div class="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                    <div class="w-full sm:flex-1">
                        <label for="first-name" class="block text-gray-600 text-lg  font-roboto dark:text-gray-300">
                            First Name
                        </label>
                        <input id="first-name" v-model="firstName" type="text" required
                            class="mt-1 block w-full  border-[#009688] focus:border-[#009688] focus:border-2 placeholder-gray-400 text-gray-600 font-roboto px-4 py-3 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Enter your first name" />
                    </div>
                    <div class="w-full sm:flex-1">
                        <label for="last-name" class="block text-gray-600 text-lg font-roboto dark:text-gray-300">
                            Last Name
                        </label>
                        <input id="last-name" v-model="lastName" type="text" required
                            class="mt-1 block w-full border-[#009688] text-gray-600 focus:border-[#009688] focus:border-2 placeholder-gray-400 font-roboto px-4 py-3 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Enter your last name" />
                    </div>
                </div>


                <div>
                    <label for="email-phone" class="block  text-gray-600 text-lg font-roboto dark:text-gray-300">
                        Email
                    </label>
                    <input id="email-phone" type="text" required
                        class="w-full  mt-1 block border-[#009688] text-gray-600  focus:border-[#009688] focus:border-2 placeholder-gray-400  font-roboto px-4 py-3 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary  dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Enter your email or phone number (251...)" />
                </div>
                <div>
                    <label for="email-phone" class="block text-gray-600 text-lg font-roboto dark:text-gray-300">
                        Phone Number
                    </label>
                    <div class="mt-1 flex items-center">
                        <span
                            class="inline-flex items-center px-3 border-gray-400 text-gray-500 focus:border-2 placeholder-gray-400 font-roboto py-3 bg-gray-100 border rounded-l-md shadow-sm focus:outline-none focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            +251
                        </span>
                        <input id="email-phone" type="Number" required
                            class="block w-full border-y-[#009688] text-gray-600 border-r-[#009688] focus:border-y-[#009688] focus:border-r-[#009688] focus:border-2 placeholder-gray-400 font-roboto px-4 py-3 bg-white border  rounded-r-md shadow-sm focus:outline-none focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Enter your phone number" />
                    </div>
                </div>


                <div>
                    <label for="password" class="block text-gray-600 text-lg font-roboto dark:text-gray-300">
                        Password
                    </label>
                    <div class="relative mt-1">
                        <input id="password" :type="showPassword ? 'text' : 'password'" required
                            class="mt-1 block border-[#009688] text-gray-600 focus:border-[#009688] focus:border-2 placeholder-gray-400 font-roboto w-full px-4 py-3 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Enter your password" />
                        <button type="button" @click="togglePasswordVisibility"
                            class="absolute right-[2%] top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none dark:text-gray-300"
                            aria-label="Toggle password visibility">
                            <Icon v-if="!showPassword" name="heroicons:eye" class="h-5 w-5" />
                            <Icon v-else name="heroicons:eye-slash" class="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div>
                    <label for="password" class="block text-gray-600 text-lg font-roboto dark:text-gray-300">
                        Confirm Password
                    </label>
                    <div class="relative mt-1">
                        <input id="password" :type="showCofirmPassword ? 'text' : 'password'" v-model="password"
                            required
                            class="mt-1 block border-[#009688] text-gray-600 focus:border-[#009688] focus:border-2 placeholder-gray-400 font-roboto w-full px-4 py-3 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Enter your password" />
                        <button type="button" @click="toggleConfirmPasswordVisibility"
                            class="absolute right-[2%] top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none dark:text-gray-300"
                            aria-label="Toggle password visibility">
                            <Icon v-if="!showCofirmPassword" name="heroicons:eye" class="h-5 w-5" />
                            <Icon v-else name="heroicons:eye-slash" class="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div class="">


                <div class="relative flex text-gray-600 text-lg font-roboto dark:text-gray-300 py-5">
                    <div>
                        <input id="accept-terms" name="accept-terms" type="checkbox" value="false"
                            class="w-6 h-6 text-gray-600 cursor-pointer appearance-none border-2 border-gray-300 rounded-sm checked:border-[#009688] checked:bg-[#009688] checked:before:content-['✔'] checked:before:text-white checked:before:text-md checked:before:my-auto" />
                    </div>
                    <div class="ml-3 text-md">
                        <label for="accept-terms" class="font-roboto text-secondary dark:text-gray-300">
                            <span>
                                I agree to the
                                <a href="https://hahu.jobs/privacy-policy" target="_blank"
                                    class="text-[#009688] underline cursor-alias">
                                    Terms and Conditions
                                </a>
                            </span>
                        </label>
                    </div>
                </div>


            </div>

            <div>
                <button type="submit" class="w-full flex justify-center font-roboto py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-[#009688] focus:outline-none focus:ring-2 focus:ring-offset-2 
               hover:bg-[#7fccc2] hover:text-gray-600 transition-colors duration-300 ease-in-out">
                    Sign Up
                </button>
            </div>
        </form>
        <div class=" flex justify-center space-x-4 py-6  ">
            <!-- Google Sign-In Button -->
            <img src="@/assets/img/google.svg" alt="dot svg" class="w-6 h-8 mr-4" />

            <!-- LinkedIn Sign-In Button -->
            <img src="@/assets/img/linkdin.svg" alt="dot svg" class="w-7 h-8 " />

        </div>
        <div class="flex justify-center font-light ">
            <p class="dark:text-primary-dark-2 py-1 text-center dark:text-white">
                Already Have an account?
                <NuxtLink to="/login" class="font-roboto text-[#009688]">
                    Login here
                </NuxtLink>
            </p>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "auth"
})

const showPassword = ref(false)
const showCofirmPassword = ref(false)

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
}
const toggleConfirmPasswordVisibility = () => {
    showCofirmPassword.value = !showCofirmPassword.value
}
const router = useRouter()
const emailPhone = ref('')
const password = ref('')

const handleSubmit = () => {
    console.log('Login attempt with:', emailPhone.value, password.value)
    // After successful login, you might want to redirect the user
    // router.push('/dashboard')
}
</script>

<style>
/* width */
::-webkit-scrollbar {
    width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #009688;
    border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #009688;
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>