<template>
  <div class="relative col-4">
  {{ filteredItems }}
    <div>
      <input type="text" name="search" v-model="searchText" id="searchTable"
        class="datatable-search w-full placeholder:!text-sm" placeholder="جستجو..." />
      <label for="searchTable" class="absolute left-0 top-0 w-full h-full flex justify-end items-center !text-sm">
        <div class="border-r px-2 text-muted">
          <v-icon class="">mdi-magnify</v-icon>
        </div>
      </label>

    </div>
  </div>
  <div>
    <div class="flex flex-col" v-for="faqCategory in categories" :key="faqCategory._id" :id="faqCategory._id">
      <div class="flex gap-4 pt-8 pb-2 items-center">
        <img src="/okex.svg" class="w-8 h-8" alt="">
        <h2 class="font-semibold ">{{ faqCategory.category }}</h2>
      </div>

      <div class="flex flex-col" v-for="categoryChild in faqCategory.children" :key="categoryChild._id"
        :id="categoryChild._id">
        <h3 class="font-semibold py-6">{{ categoryChild.category }}</h3>
        <v-expansion-panels>
          <v-expansion-panel v-for="faq in categoryChild.rows" :key="faq._id" :id="faq_id" :text="faq.answer"
            :title="faq.question"></v-expansion-panel>
        </v-expansion-panels>
      </div>

    </div>


  </div>
</template>
<script setup>
const searchText = ref('')
const { fetchFAQList } = useApi()

const categories = ref([])
const faqList = await useAsyncData("faqList", () =>
  $fetch(fetchFAQList.url)
);
categories.value = faqList.data.value.data

// console.log(searchText.value);
watch(searchText, () => {
  console.log(searchText.value);
  const filteredItems = computed(() => {
    return faqList.data.value.data.filter(item =>
      item.category.includes(searchText.value)
    )
  })
  console.log(filteredItems.value,"jhvg")
  categories.value = filteredItems.value
  
})

</script>