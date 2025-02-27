<templete>
<form @submit.prevent="searchDone" class="flex-none w-full lg:w-1/3 mb-2 lg:mr-2 relative">
                            <input type="text" v-model="titleSearch" placeholder="Search"
                                class="hover:border-primary 2xl:py-3 w-full mt-2 dark:text-white text-sm px-4 py-1 placeholder-gray-600 bg-white dark:bg-slate-600 border text-gray-600 dark:placeholder-white rounded-l-md focus:ring-primary focus:border-primary focus:outline-none pr-10" />

                            <!-- X Icon for clearing the search term -->
                            <span v-if="titleSearch"
                                class="ml-2 dark:text-white cursor-pointer text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2"
                                @click.stop="clearSearch">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                            <!-- Search Icon -->
                            <Icon v-else name="material-symbols:search-rounded" size="24"
                                class="absolute right-4 top-2/3 transform -translate-y-1/2 text-gray-400 hover:text-primary cursor-pointer"
                                aria-label="Search" @click="searchDone" />

                        </form></templete>