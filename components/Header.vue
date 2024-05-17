<template>
    <header>
        <nav elevation="2" class="
         flex flex-wrap
         items-center
         justify-between
         w-full
         py-4
         md:py-0
         px-4
         text-lg text-gray-700
         bg-gray-100
         !shadow-inner
       ">
            <svg @click="showMenu = !showMenu" xmlns="http://www.w3.org/2000/svg" id="menu-button"
                class="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <div>
                <a href="#">
                    <img src="/public/headerLogo.png" alt="" srcset="">
                </a>
            </div>

            <div class=" w-full md:flex md:items-center md:w-auto" :class="{ 'hidden': showMenu }" id="menu">
                <ul class="
         pt-4
         text-base text-gray-700
         md:flex
         md:justify-between 
         md:pt-0">
                    <li>
                        <a class="md:p-4 py-2 block hover:text-purple-400" href="#">بازار حرفه ای</a>
                    </li>
                    <li>
                        <a class="md:p-4 py-2 block hover:text-purple-400" href="#">درباره ما</a>
                    </li>
                    <li>
                        <a class="md:p-4 py-2 block hover:text-purple-400" href="#">تماس با ما</a>
                    </li>
                    <li>
                        <a class="md:p-4 py-2 block hover:text-purple-400" href="#">تبادل سریع</a>
                    </li>
                </ul>
            </div>
            <div>
                <a class="md:p-4 py-2 block text-white rounded-full hover:bg-purple-400 bg-blue-500" href="#">ورود/ثبت
                    نام</a>
            </div>
        </nav>
    </header>

    <div class="flex">

        <div class="md:hidden">
            <v-navigation-drawer v-model="drawer" location="right" temporary>
                <Sidebar :expand-sidebar="drawer" />
            </v-navigation-drawer>
        </div>
        <div class="hidden md:block">
            <Sidebar :expand-sidebar="drawer" />
        </div>
        <v-app-bar-nav-icon class="toggleSidebar-icon" variant="text" @click="toggleSidebar"></v-app-bar-nav-icon>
        <div class=" w-full bg-[#f7f7f7f7] h-screen overflow-y-auto">
            <slot />
        </div>
    </div>
</template>
<script setup>
const showMenu = ref(true)

const drawer = ref(true);
function toggleSidebar() {
    drawer.value = !drawer.value;
}
</script>
<style>
.toggleSidebar-icon {
    position: relative;
}

@media only screen and (max-width: 500px) {
    .toggleSidebar-icon {
    position: baseline;
}
}
</style>