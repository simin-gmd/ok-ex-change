<template>
    <div class="px-0 md:px-3 lg:px-5">
        <CardSection>
            <div class="border rounded-lg p-0 lg:p-4">
                <CardDataTable title="" search @change="handleSearchItems">
                    <template #table>
                        <v-data-table :loading="loading" loading-text="لطفا صبر کنید!..."
                            no-data-text="داداه ای موجود نیست" fixed-header :search="search" :items="orderedData"
                            :headers="headers">
                            <!-- creat costom culmn for change 24 houres -->
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
    </div>
</template>
<script setup>

// initial data
const loading = ref(true);
const orderedData = ref([]);

const { fetchTickersList } = useApi()

const studentSearch = useState("search", () => "");
const handleSearchItems = (value) => {
    studentSearch.value = value;
};

// table headers
const headers = [
    { title: "قیمت", align: "center", key: "price" },
    { title: "تغییر 24 ساعته", align: "center", key: "change24H" },
    { title: "جفت ارز", align: "center", key: "title" },
];

// handle create table rows
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

// get tickers list from internal api
const tickersList = await useAsyncData("tickersList", () =>
    $fetch(fetchTickersList.url)
);
if (tickersList.data.value.code == '100') {
    orderedData.value = tickersList.data.value.tickers.map((i) => createRows(i));
    loading.value = false;
} else {
    loading.value = false;
}

// func for handle gange 24 houres
function percentage(x, y) {
    const change = y - x;
    return Number((change / x) * 100).toFixed(3)
}

// socket.io section
import io from 'socket.io-client'
const socket = ref(null)
const data = ref({})
onMounted(() => {
    socket.value = io(
    //     'wss://wsg.ok-ex.io/ws',
    // { transports: ['websocket'] }
)
    socket.value.on('connect', () => {
        console.log('Connected WebSocket ')
        socket.value.emit('get_ticker_update')
    })
    // Handle response from server
  socket.value.on('get_ticker_update', (data) => {
    console.log('Received data:', data)  
  })
    socket.value.on('disconnect', () => {
        console.log('Disconnected WebSocket ')
    })
})
onBeforeUnmount(() => {
  if (socket.value) {
    socket.value.disconnect()
  }
})

</script>