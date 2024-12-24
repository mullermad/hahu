<script setup>
const selectedJobType = ref([])

const emit = defineEmits(["update:modelValue"])

// watch(selectedJobType, () => {
//     emit("update:modelValue", selectedJobType.value)
// }, { deep: true })
emit("update:modelValue", selectedJobType.value);

const setSelectedJobType = (type) => {
    const index = selectedJobType.value.findIndex((i) => i == type)

    if (index < 0) { selectedJobType.value.push(type) }

    else { selectedJobType.value.splice(index, 1); }
} </script>


<template>
    <div class="2xl:py-6 ">
        <label class="block text-sm text-gray-700 dark:text-white mb-2 2xl:text-lg font-lightbold ml-1">Type</label>
        <div class="flex flex-wrap gap-2">
            <button @click="setSelectedJobType('bid')"
                :class="['flex items-center px-4 py-1 text-gray-700 rounded-lg border text-[0.65rem] hover:bg-green-200 border-primary dark:text-white']"
                :style="selectedJobType.includes('bid') ? { backgroundColor: '#009688' } : {}">

                <span class="mr-1 xl:text-sm">Bid</span>
                <Icon class="h-3" :name="selectedJobType.includes('bid') ? 'tabler:x' : 'ic:twotone-plus'" />
            </button>




            <button @click="setSelectedJobType('contract')"
                :class="['flex items-center px-4 py-1 text-gray-700 rounded-lg border text-[0.65rem] hover:bg-green-200 border-primary dark:text-white']"
                :style="selectedJobType.includes('contract') ? { backgroundColor: '#009688' } : {}">

                <span class="mr-1 xl:text-sm">Contract</span>
                <Icon class="h-3" :name="selectedJobType.includes('contract') ? 'tabler:x' : 'ic:twotone-plus'" />
            </button>

            <button @click="setSelectedJobType('full_time')"
                :class="['flex items-center px-4 py-1 text-gray-700 rounded-lg border text-[0.65rem] hover:bg-green-200 border-primary dark:text-white']"
                :style="selectedJobType.includes('full_time') ? { backgroundColor: '#009688' } : {}">


                <span class="mr-1 xl:text-sm">Full Time
                </span>
                <Icon class="h-3" :name="selectedJobType.includes('full_time') ? 'tabler:x' : 'ic:twotone-plus'" />


            </button>
            <button @click="setSelectedJobType('internship')"
                :class="['flex items-center px-4 py-1 text-gray-700 rounded-lg border text-[0.65rem] hover:bg-green-200 border-primary dark:text-white']"
                :style="selectedJobType.includes('internship') ? { backgroundColor: '#009688' } : {}">


                <span class="mr-1 xl:text-sm">Internship
                </span>
                <Icon class="h-3" :name="selectedJobType.includes('internship') ? 'tabler:x' : 'ic:twotone-plus'" />

            </button>
            <button @click="setSelectedJobType('part_time')"
                :class="['flex items-center px-4 py-1 text-gray-700 rounded-lg border text-[0.65rem] hover:bg-green-200 border-primary dark:text-white']"
                :style="selectedJobType.includes('part_time') ? { backgroundColor: '#009688' } : {}">

                <span class="mr-1 xl:text-sm"> Part Time
                </span>
                <Icon class="h-3" :name="selectedJobType.includes('part_time') ? 'tabler:x' : 'ic:twotone-plus'" />

            </button>
        </div>
        <!-- <p class="mt-4">Selected Job Type: {{ selectedJobType }}</p> -->

    </div>
</template>

<style>
:root,
:before,
:after,
* {
    --vf-primary: #009688;
    --vf-secondary: #babebe;
}
</style>