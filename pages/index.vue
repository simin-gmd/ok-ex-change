<template>
    <v-container>
        <CardSection>
            <div class="p-4 border rounded-lg">
                <CardDataTable title="" search @change="handleSearchItems">
                    <template #table>
                        <v-data-table :loading="loading" loading-text="لطفا صبر کنید!..."
                            no-data-text="داداه ای موجود نیست" fixed-header :search="search" :items="orderedData"
                            :headers="headers">
                            <template v-slot:item.change24H="{ item }">
                                <div class="text-center">
                                    <v-chip dir="ltr" :color="item.change24H > 0 ? 'green' : 'red'"
                                        :text="item.change24H + '%'" class="text-uppercase " label
                                        size="small"></v-chip>
                                </div>
                            </template>
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

const { fetchTickersList } = useApi()

const loading = ref(true);
const orderedData = ref([]);


const studentSearch = useState("search", () => "");
const handleSearchItems = (value) => {
    studentSearch.value = value;
};
const headers = [
    { title: "قیمت", align: "center", key: "price" },
    { title: "تغییر 24 ساعته", align: "center", key: "change24H" },
    { title: "جفت ارز", align: "center", key: "title" },
];
function createRows(item) {
    const str = item.symbol;
    const parts = str.split("-");
    const firstPart = parts[0];
    const secondPart = parts[1];
    return {
        title: firstPart,
        change24H: percentage(item.open_24h, item.last),
        price: secondPart + " " + item.last,
    };
}

const tickersList = await useAsyncData("tickersList", () =>
    $fetch(fetchTickersList.url)
);
if (tickersList.data.value.code == '100') {
    orderedData.value = tickersList.data.value.tickers.map((i) => createRows(i));
    loading.value = false;
} else {
    loading.value = false;
}

// onMounted(() => {
function percentage(x, y) {
    const change = y - x;
    return Number((change / x) * 100).toFixed(3)
}
// })
</script>