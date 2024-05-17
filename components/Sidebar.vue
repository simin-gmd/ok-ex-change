<template>
  <div class="">
    <div class="h-screen overflow-y-auto" dir="ltr">
      <v-card class="h-100 p-0 pl-3 pt-3 !flex flex-col justify-between !items-center md:w-[220px] !border-none"
        dir="rtl" :width="$props.expandSidebar ? 220 : 51">
        <div class="flex flex-col justify-between h-full w-full">
          <div class="flex gap-y-3 flex-col items-start w-full">
            <div v-for="(item, i) in lists" :key="i">
              <nuxt-link :to="item.link" class="menu-item flex items-center gap-x-2 my-0 rounded-lg w-full mr-2"
                :class="{ active: item.title == 'داشبورد' }">
                <img :src="item.icon" class="menu-icon p-2 rounded-lg"/>
                 
                
                <span> {{ item.title }}</span>
              </nuxt-link>
            </div>
          </div>
          <div class="flex flex-col">
            <v-spacer class="w-5"></v-spacer>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script setup>
// sidebar items
let lists = [
  {
    title: "جوایز",
    link: "/",
    icon: "/diamond.svg",
    activeRute: false,
    child: [],
  },
  {
    title: "بازار حرفه ای",
    link: "/",
    icon: "/candle_active.svg",
    activeRute: "human-resource",

  },
  {
    title: "تبادل سریع",
    link: "/",
    icon: "/bulk-arrow.svg",
    activeRute: "poll",

  },
  {
    title: "کمیسیون",
    link: "/",
    icon: "/dollar-circle.svg",
    activeRute: false,
    child: [],
  },
  {
    title: "تماس با ما",
    link: "/",
    icon: "/call.svg",
    activeRute: "ticket",

  },
];

const props = defineProps(["expandSidebar"]);


</script>
