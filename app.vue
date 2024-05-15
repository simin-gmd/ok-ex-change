<template>
  <div>
    <v-app>
      <v-locale-provider rtl>
        <KeepAlive>
          <NuxtLayout v-if="isONLINE">
            <NuxtPage  class="pt-10"/>
          </NuxtLayout>
          <PublicOffline v-else />
        </KeepAlive>
      </v-locale-provider>
    </v-app>
  </div>
</template>
<script setup>

const isONLINE = ref(true);


onMounted(() => {
  window.addEventListener("online", () => {
    isONLINE.value = true;
  });
  window.addEventListener("offline", () => {
    isONLINE.value = false;
  });
});

definePageMeta({
  keepalive: {
    exclude: ["modal"],
  },
});
</script>
<style>
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
