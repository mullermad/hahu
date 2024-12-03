<template>
    <div
        class="font-roboto h-screen overflow-y-scroll scrollbar-thin bg-gray-300 bg-opacity-50  text-black dark:bg-[#011812] dark:text-white">
        <NavBar />
        <LargreNavBar />
        <slot></slot>
        <Footer />
    </div>
</template>
