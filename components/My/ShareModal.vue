<script setup>
import telegramImage from '@/assets/img/telegram.svg';
import xImage from '@/assets/img/x.svg';
import linkedin_colorImage from '@/assets/img/linkedin_color.svg';
import facebookcircularImage from '@/assets/img/facebook-circular.svg';

const jobUrlInput = ref("")
const isvisible = ref(false)
const iscopied = ref(false)

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
    JobId: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['close'])
// Emit close event when the 'X' button is clicked
const handleClose = () => emit('close')

const copy = () => {
    // Get the input element using ref
    const copyText = jobUrlInput.value;
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value)
        .then(() => {
            iscopied.value = true;
            isvisible.value = true;

            setTimeout(() => {
                isvisible.value = false;
            }, 2000);
        })
        .catch((err) => {
            console.error('Failed to copy text: ', err);
        });
}

</script>

<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50  ">
        <!-- Modal backdrop -->
        <div class="fixed inset-0 bg-black opacity-50"></div>
        <!-- Modal content -->
        <div class="bg-white rounded-lg  overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
            <div class="relative px-4">
                <div class="flex justify-between px-4 pt-6">
                    <h3 class="text-md font-lightbold text-secondary ">
                        Share
                    </h3>
                    <!-- X button to close the modal -->
                    <button @click.stop.prevent="handleClose" class=" text-gray-500 px-
                        hover:bg-green-100">
                        <span class="sr-only">Close</span>
                        <Icon name="ic:round-clear" class="w-6 h-6" />
                    </button>
                </div>

                <!-- Modal content body -->
                <div class=" p-8 ">

                    <div class=" px-4 ">
                        <div class=" flex justify-between items-center py-6">
                            <div class="flex flex-col justify-start items-start space-y-2"><a
                                    href="https://telegram.org/" target="_blank" class="social-icon">
                                    <img :src="telegramImage" alt="Telegram" class="w-6 h-6 2xl:w-8 2xl:h-8" />
                                </a>
                                <span class="text-[0.8rem] -ml-2 2xl:-ml-1 ">Telegram</span>
                            </div>
                            <div class="flex flex-col justify-start items-start space-y-2"> <a
                                    href="https://web.facebook.com/" target="_blank" class="social-icon">
                                    <img :src="facebookcircularImage" alt="Facebook" class="w-6 h-6 2xl:w-8 2xl:h-8" />
                                </a><span class="text-[0.8rem] -ml-2 2xl:-ml-1 ">Facebook</span></div>
                            <div class="flex flex-col justify-start items-start space-y-2"><a href="https://x.com"
                                    target="_blank" class="social-icon">
                                    <img :src="xImage" alt="X" class="w-6 h-6 2xl:w-8 2xl:h-8" />
                                </a><span class="text-[0.8rem] -ml-2 2xl:-ml-1">Twitter</span></div>
                            <div class="flex flex-col justify-start items-start space-y-2"> <a
                                    href="https://linkdin.com/" target="_blank" class="https://linkedin.com">
                                    <img :src="linkedin_colorImage" alt="LinkedIn" class="w-6 h-6 2xl:w-8 2xl:h-8" />
                                </a><span class="text-[0.8rem] -ml-2 2xl:-ml-1 ">LinkedIn</span></div>



                        </div>
                        <div @click.stop.prevent="copy"
                            class="  border-[1px] px-4 mt-4  my-4 flex justify-between space-x-2 items-center text-center">


                            <input v-if="JobId" type="text" :value="'https://www.hahu.jobs/jobs/' + JobId" readonly
                                ref="jobUrlInput"
                                class="text-gray-600 text-sm bg-transparent border-none hover:cursor-pointer outline-none py-2 w-full" />
                            <input v-else type="text" :value="'https://www.hahu.jobs/jobs'" readonly ref="jobUrlInput"
                                class="text-gray-600 text-sm bg-transparent border-none hover:cursor-pointer outline-none py-2 w-full" />

                            <Icon name="iconamoon:copy"
                                class="w-4 h-4 2xl:w-6 2xl:h-6 px-2  text-gray-600 hover:bg-primary"
                                @click.stop.prevent="copy" />
                        </div>
                        <p v-if="iscopied" v-show="isvisible" class="px-48 text-xs text-light fixed text-primary">
                            Copied </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
/* Additional styles for your modal, if needed */
</style>
