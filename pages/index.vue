<template>
    <v-container>
        <CardSection>
            <div class="p-4 border rounded-lg">
                <CardDataTable title="" search @change="handleSearchItems">
                    <template #table>
                        <v-data-table :loading="loading" loading-text="لطفا صبر کنید!..."
                            no-data-text="داداه ای موجود نیست" fixed-header :search="search" :items="orderedData"
                            :headers="headers">
                            <!-- <template v-slot:item.status="{ item }">
                                <div class="text-center">
                                    <v-chip :color="item.status == 'فعال' ? 'green' : 'red'" :text="item.status"
                                        class="text-uppercase w-full" label size="small"></v-chip>
                                </div>
                            </template> -->



                            <template v-slot:bottom>
                                <div class="text-center pt-2"></div>
                            </template>
                        </v-data-table>
                    </template>
                </CardDataTable>
            </div>
        </CardSection>
    </v-container>
</template>
<script setup>
const loading = ref(true);
const orderedData = ref([]);
const search = ref("");
const tickersList = useAsyncData("tickersList", () =>
    $fetch(`/api/tickers/list`)
);
const studentSearch = useState("search", () => "");
const handleSearchItems = (value) => {
    studentSearch.value = value;
};
const headers = [
    // { title: "", align: "center", key: "gradeTitle" },
    // { title: "وضعیت", align: "center", key: "status" },
    { title: "قیمت", align: "center", key: "price" },
    { title: "تغییر 24 ساعته", align: "center", key: "change24H" },
    { title: "جفت", align: "center", key: "title" },
];
function createRows(item) {
    return {
        // id: item.id,
        title: item.symbol,
        // image:item.image,
        // gradeTitle: gradeList.data.value.data.data.find((i) => i.id == item.grade_id).title,
        change24H: item.open_24h,
        price: item.last,
    };
}

watch(tickersList.data, async () => {
    if (tickersList.data.value.code == '100') {
        orderedData.value = tickersList.data.value.tickers.map((i) => createRows(i));
        
        console.log(orderedData.value, "bjfvbjbjfvbj");
        loading.value = false;
    } else {
        loading.value = false;
    }
})
</script>