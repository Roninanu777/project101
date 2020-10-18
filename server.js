const app = require("./app");
const server = require("http").Server(app);
const io = require("socket.io")(server);
const path = require("path");
const PORT = process.env.PORT || 4000;

io.on("connection", (socket) => {
    socket.on("subscribeToTimer", (interval) => {
        console.log(
            `Client is subscribing to timer with interval ${interval} with id ${socket.id}`
        );
        setInterval(() => {
            socket.emit("timer", new Date());
        }, interval);
    });
});

io.listen(PORT);
console.log(`Listening on port ${PORT}`);
