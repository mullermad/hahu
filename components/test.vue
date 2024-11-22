<template>
    <div class=" h-screen flex  bg-[#009688]  ">
        <!-- left  half - images -->

        <AuthImage />
        <!-- right half  login forms -->

        <div
            class="min-h-screen overflow-y-auto w-full lg:w-1/2 flex relative py-6 justify-center bg-white dark:bg-[#011812] px-4  sm:px-6 lg:px-8 ">

            <!-- Dot image positioned on the left side and made small -->
            <div class="absolute  -left-3 top-0">
                <img src="@/assets/img/dotImage.svg" alt="dot svg" class="w-24 h-24 lg:w-28 lg:h-24" />
            </div>

            <div class="w-full   max-w-md space-y-8">


                <div class="">


                    <div class="absolute right-5">
                        <ThemeToggle />
                    </div>
                </div>


                <CustomSignup />
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
                        Already Have an account?
                        <NuxtLink to="/login" class="font-roboto text-[#009688]">
                            Login here
                        </NuxtLink>
                    </p>


                </div>
                <!-- Dot image positioned on the left side and made small -->
                <div class="absolute  bottom-0 right-0 ">
                    <img src="@/assets/img/dotImage.svg" alt="dot svg" class="w-24 h-24 lg:w-28 lg:h-24" />
                </div>
            </div>


        </div>



    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


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