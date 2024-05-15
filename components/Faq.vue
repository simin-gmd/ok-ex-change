<template>
  <div class="relative col-4">
    <div>
      <!-- @change="($event) => emit('change', $event.target.value)" -->
      <input type="text" name="search" id="searchTable" class="datatable-search w-full placeholder:!text-sm"
        placeholder="جستجو..."  />
      <label for="searchTable" class="absolute left-0 top-0 w-full h-full flex justify-end items-center !text-sm">
        <div class="border-r px-2 text-muted">
          <v-icon class="">mdi-magnify</v-icon>
        </div>
      </label>

    </div>
  </div>
  <div>
    <div class="text-subtitle-2 mb-2">Default</div>
    <v-expansion-panels>
      <v-expansion-panel v-for="i in 3" :key="i"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        title="Item"></v-expansion-panel>
    </v-expansion-panels>

    <div class="text-subtitle-2 mt-4 mb-2">Accordion</div>

    <v-expansion-panels variant="accordion">
      <v-expansion-panel v-for="i in 3" :key="i"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        title="Item"></v-expansion-panel>
    </v-expansion-panels>

    <div class="text-subtitle-2 mt-4 mb-2">Inset</div>

    <v-expansion-panels class="my-4" variant="inset">
      <v-expansion-panel v-for="i in 3" :key="i"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        title="Item"></v-expansion-panel>
    </v-expansion-panels>

    <div class="text-subtitle-2 mt-4 mb-2">Popout</div>

    <v-expansion-panels class="my-4" variant="popout">
      <v-expansion-panel v-for="i in 3" :key="i"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        title="Item"></v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>