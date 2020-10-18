const app = require("./app");
const server = require("http").Server(app);
const io = require("socket.io")(server);
const path = require("path");
const PORT = process.env.PORT || 4000;

io.on("connection", (socket) => {
    console.log("Socket connected...");
});

io.listen(PORT);
console.log(`Listening on port ${PORT}`);
