<template>
    <div class="h-screen overflow-hidden flex bg-[#009688]  ">
        <!-- left  half - images -->
        <div class="lg:flex lg:w-1/2 flex-col ">
            <img src="@/assets/img/login_illustration.png" alt="Login illustration"
                class="w-[80%] h-[63%] ml-12 -mt-10" />

            <div className="text-white font-roboto  text-center mt-6">
                <p className="3xl:text-[40px] lg:text-2xl uppercase font-semibold 2xl:leading-[3.75rem]">
                    Your Dream Jobs are Waiting
                </p>
                <div className="w-[50%] mx-auto mt-4 mb-6 border-2 border-b border-white"></div>
                <p className="mx-auto w-[60%] text-xl">
                    Enhance your professional trajectory with HaHuJobs, a premier platform that provides access to a
                    diverse spectrum of thousands of open vacancies. Seamlessly pursue and apply for your aspirations
                    across all levels of your job search.
                </p>
            </div>
        </div>

        <!-- right half - login forms -->

        <div class="w-full lg:w-1/2 flex relative py-6 justify-center bg-white dark:bg-gray-900 px-4  sm:px-6 lg:px-8">

            <!-- Dot image positioned on the left side and made small -->
            <div class="absolute  -left-3 top-0">
                <img src="@/assets/img/dotImage.svg" alt="dot svg" class="w-24 h-24 lg:w-28 lg:h-24" />
            </div>

            <div class="w-full   max-w-md space-y-8">


                <div class="">


                    <div class="absolute right-5">
                        <NuxtLink @click="toggleTheme"
                            class="dark:text-white dark:hover:text-[#009688] font-roboto focus:font-extrabold  active:font-extrabold text-gray-600 text-xs hover:text-[#009688] focus:text-[#009688]">
                            <svg v-if="colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" width="32"
                                height="18" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M11 3V2q0-.425.288-.712T12 1t.713.288T13 2v1q0 .425-.288.713T12 4t-.712-.288T11 3m0 19v-1q0-.425.288-.712T12 20t.713.288T13 21v1q0 .425-.288.713T12 23t-.712-.288T11 22m11-9h-1q-.425 0-.712-.288T20 12t.288-.712T21 11h1q.425 0 .713.288T23 12t-.288.713T22 13M3 13H2q-.425 0-.712-.288T1 12t.288-.712T2 11h1q.425 0 .713.288T4 12t-.288.713T3 13m16.75-7.325l-.35.35q-.275.275-.687.275T18 6q-.275-.275-.288-.687t.263-.713l.375-.375q.275-.3.7-.3t.725.3t.288.725t-.313.725M6.025 19.4l-.375.375q-.275.3-.7.3t-.725-.3t-.288-.725t.313-.725l.35-.35q.275-.275.688-.275T6 18q.275.275.288.688t-.263.712m12.3.35l-.35-.35q-.275-.275-.275-.687T18 18q.275-.275.688-.287t.712.262l.375.375q.3.275.3.7t-.3.725t-.725.288t-.725-.313M4.6 6.025l-.375-.375q-.3-.275-.3-.7t.3-.725t.725-.288t.725.313l.35.35q.275.275.275.688T6 6q-.275.275-.687.288T4.6 6.025M12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18m0-2q1.675 0 2.838-1.162T16 12t-1.162-2.838T12 8T9.162 9.163T8 12t1.163 2.838T12 16m0-4" />
                            </svg>

                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" width="32" height="28"
                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"
                                class="w-6 h-5 transition-colors duration-200 outlineReactiveIcon hover:stroke-[#009688]">
                                <!-- Moon Icon -->
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
                                </path>
                            </svg>

                        </NuxtLink>
                    </div>
                </div>


                <form @submit.prevent="handleSubmit" class=" ">
                    <div class="space-y-6 ">
                        <div class="">
                            <Logo class="mx-auto w-auto " />

                            <p class="mt-2 text-center mr-32 text-lg font-extralight text-gray-800 dark:text-gray-400">
                                primary
                            </p>
                        </div>
                        <div>
                            <label for="email-phone" class="block text-gray-600 text-lg font-roboto dark:text-gray-300">
                                Email or Phone Number
                            </label>
                            <input id="email-phone" v-model="emailPhone" type="text" required
                                class="mt-1 block border-[#009688]  focus:border-[#009688] focus:border-2 placeholder-gray-400  font-roboto w-[90%] px-4 py-3 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary  dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                placeholder="Enter your email or phone number (251...)" />
                        </div>

                        <div>
                            <label for="password" class="block text-gray-600 text-lg font-roboto dark:text-gray-300">
                                Password
                            </label>
                            <div class="relative mt-1">
                                <input id="password" :type="showPassword ? 'text' : 'password'" v-model="password"
                                    required
                                    class="mt-1 block border-[#009688] focus:border-[#009688] focus:border-2 placeholder-gray-400 font-roboto w-[90%] px-4 py-3 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    placeholder="Enter your password" />
                                <button type="button" @click="togglePasswordVisibility"
                                    class="absolute right-[12%] top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none dark:text-gray-300"
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
                                class="block text-[#009688] ml-64 text-right text-md font-light font-roboto dark:text-gray-300">
                                Forgot your password?
                            </NuxtLink>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            class="w-[90%] flex justify-center font-roboto py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-[#009688] hover:bg-[#009688] focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                            Log In
                        </button>
                    </div>
                </form>

                <div class="">


                    <div class=" flex justify-center space-x-4 ">
                        <!-- Google Sign-In Button -->
                        <img src="@/assets/img/google.svg" alt="dot svg" class="w-6 h-8 mr-4" />


                        <!-- LinkedIn Sign-In Button -->
                        <img src="@/assets/img/linkdin.svg" alt="dot svg" class="w-7 h-8 " />

                    </div>

                </div>

                <div class="flex justify-center font-light ">
                    <p class="dark:text-primary-dark-2 text-center dark:text-white">
                        New to HahuJobs?
                        <NuctLink to="/signup" class="font-roboto text-[#009688]">
                            Sign up here
                        </NuctLink>
                    </p>
                    <!-- Dot image positioned on the left side and made small -->
                    <div class="absolute   bottom-0 right-0">
                        <img src="@/assets/img/dotImage.svg" alt="dot svg" class="w-24 h-24 lg:w-28 lg:h-24" />
                    </div>
                </div>
            </div>


        </div>



    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const colorMode = useColorMode(); // Reactive, updates dynamically
const isDarkMode = ref(colorMode.value);

// Function to update color mode based on system preference
function updateColorMode() {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    colorMode.value = prefersDarkMode ? "dark" : "light";
}

// Watch for system preference changes
if (process.client) {
    // Initial check on load
    updateColorMode();

    // Add a listener for changes to system preference
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
        colorMode.value = event.matches ? "dark" : "light";
    });
}


console.log("colormode", colorMode.value);

// Reactive dark mode state tied to colorMode
watch(isDarkMode, (newValue) => {
    handleDarkModeChange(newValue);
});
// Handler for the dark mode 
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
const showPassword = ref(false)

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
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