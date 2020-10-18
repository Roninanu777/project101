const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
const axios = require("axios");

const PORT = process.env.PORT || 4000;
const index = require("./routes/index");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use("/", index);

const server = http.createServer(app);

const io = socketIo(server);

let interval;

const getApiAndEmit = async (socket) => {
    try {
        const res = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather?lat=20.59&lon=78.96&appid=d7255922b0c131013aaaefca0233ff13"
        );
        socket.emit("FromApi", res.data.main.temp);
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
};

io.on("connection", (socket) => {
    console.log(socket);
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 10000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});
