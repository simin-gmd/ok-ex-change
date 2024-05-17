import { createServer } from "http";
import { Server } from "socket.io";
import axios from "axios";

const {
  public: { API_URL },
} = useRuntimeConfig();

const httpServer = createServer();
const io = new Server(httpServer, {
  path: "/io",
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("get_ticker_update", async () => {
    // update data
    const updatedData = {
      response: await axios.get(`${API_URL}/oapi/v1/market/tickers`),
    };

    console.log(updatedData , "updatedData");
    // send data to client
    socket.emit("get_ticker_update", updatedData);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

httpServer.listen(3000);
