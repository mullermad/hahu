<template>
    <div class=" h-screen flex  bg-primary  ">
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


                <slot />
                <div class="">





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