<template>
    <v-app>
      <v-card class="w-full h-full">
        <Header>
          <!-- <utilitiesLoading v-if="loading"> </utilitiesLoading> -->
          <slot />
        </Header>
      </v-card>
    </v-app>
  </template>
  <script setup>
  
  
  // // console.log(data.value);
  const loading = ref(true);
  onMounted(() => {
    loading.value = false;
  });
  
  
  
  </script>
  