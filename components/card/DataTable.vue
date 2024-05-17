<!-- data table component -->
<template>
  <v-card flat class="space-y-2 !border-0">
    <v-card-title
      class="d-flex justify-between align-center items-center !p-0 px-0 lg:px-5"
    >
      <v-icon v-if="icon" :icon="icon"></v-icon>
      <span v-if="title" class="text-base font-semibold title-text">
        {{ title }}</span
      >

      <div v-if="search">
        <div class="relative">
          <input
            type="text"
            name="search"
            id="searchTable"
            class="datatable-search w-full  text-xs  placeholder:!text-sm"
            placeholder="جستجو..."
            @change="($event) => emit('change', $event.target.value)"
          />
          <label
            for="searchTable"
            class="absolute left-0 top-0 w-full h-full flex justify-end items-center !text-sm"
          >
            <div class="border-r px-2 text-muted">
              <v-icon class="">mdi-magnify</v-icon>
            </div>
          </label>
        </div>
      </div>
    </v-card-title>

    <!-- <tbody> -->
    <div class="p-0 lg:p-5">
      <slot name="table" />
    </div>
  </v-card>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  search: {
    type: Boolean,
    required: false,
  },
});
const { title, icon, search } = props;
const emit = defineEmits(["change"]);
</script>
