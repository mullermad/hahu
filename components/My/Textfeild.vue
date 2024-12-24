<script setup>
import { ref } from 'vue';
import { onClickOutside } from "@vueuse/core";

const searchQuery = ref('');
const showDropdown = ref(false);
const selectedItems = ref("");
const dropdownRef = ref(null);


const props = defineProps({
    items: {
        type: Array,
        default: () => [],
    },
    placeholder: {
        type: String,
        default: 'Search',
    },
    modelValue: {
        type: Object,
    },
});

const emit = defineEmits(['update:modelValue', 'updateSearch']);
watch(searchQuery, () => {
    emit("updateSearch", searchQuery.value)

})
// Select only one item
const selectItem = (item) => {
    selectedItems.value = item;
    emit('update:modelValue', selectedItems.value);
    searchQuery.value = '';
    showDropdown.value = false;
};

// Remove the selected item
const removeItem = (item) => {
    if (selectedItems.value === item) {
        selectedItems.value = "";
        emit('update:modelValue', selectedItems.value);
    }
};

// Toggle dropdown visibility
const toggleDropdown = (visible) => {
    showDropdown.value = visible;
};

onClickOutside(dropdownRef, () => {
    showDropdown.value = false;
});

const unwatch = watch(() => props.items, () => {

    props.items.forEach((value) => {

        if (props.modelValue?.id === value.id) {

            selectItem(value)
            //controlling watch effects
            unwatch()
        }
    })

}, {
    deep: true

})


</script>


<template>
    <div ref="dropdownRef" class="relative ">
        <!-- Selected Items and Dropdown Trigger -->
        <div class="px-4 py-1 hover:border-primary dark:bg-slate-600 dark:text-white bg:text-white border rounded bg-white cursor-pointer focus:ring-2 focus:ring-primary transition-all duration-200"
            @click="toggleDropdown(!showDropdown)" :aria-expanded="showDropdown">
            <div class="flex items-center justify-between  dark:text-white">
                <!-- Selected Item -->
                <div v-if="selectedItems" class="flex items-center gap-2">
                    <span class="line-clamp-1 px-3 dark:text-white  text-sm text-gray-600  rounded">
                        {{ selectedItems.name }}
                    </span>
                </div>

                <!-- Placeholder -->
                <span v-else class="dark:text-white text-sm text-gray-500">{{ placeholder }}</span>

                <!-- Remove Icon for selected item -->
                <span v-if="selectedItems" class="ml-2 dark:text-white cursor-pointer text-gray-500 "
                    @click.stop="removeItem(selectedItems)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>

                <!-- Dropdown Icon -->
                <span v-if="!selectedItems" class="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06 0L10 10.92l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </div>
        </div>

        <!-- Dropdown -->
        <div v-if="showDropdown"
            class="absolute dark:bg-slate-600 bg:text-white z-10 w-full mt-1 bg-white border rounded shadow-md max-h-40 overflow-y-auto">
            <!-- Search Field -->
            <input v-model="searchQuery" type="text" placeholder="Search"
                class="w-[90%] mx-2 mt-2 border  border-primary px-3 py-1 rounded-md text-gray-600 dark:bg-slate-600 dark:focus:border focus:ring-2 focus:ring-primary focus:outline-none" />

            <!-- display Items -->
            <div v-if="props.items.length > 0" class="mt-2">
                <div v-for="(item, index) in props.items" :key="index" @mousedown.prevent="selectItem(item)"
                    class="px-4 py-3 cursor-pointer dark:text-white text-gray-700 line-claim-1 font-bold text-xs hover:bg-gray-100  border-b border-gray-300  dark:hover:bg-gray-500">
                    {{ item.name }}
                </div>
            </div>
            <div v-else class="px-4 py-1 text-gray-500">No items found</div>
        </div>
    </div>
</template>
