import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const CLIENT_PORT = 5173;
const SERVER_PORT = 5000;

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://0.0.0.0:" + CLIENT_PORT,
        methods: ["GET", "POST"]
    }
});
io.on("connection", (socket) => {
    socket.on("join_room", (data) => {
        socket.join(data.message_sender + "_" + data.message_replicent);
    });
    socket.on("send_message", (data) => {
        socket.to(data.message_replicent + "_" + data.message_sender).emit("receive_message", data);
    });
    socket.on("typing_message", (data) => {
        socket.to(data.message_replicent + "_" + data.message_sender).emit("receive_typing_message", data.typing);
    });
});

server.listen(SERVER_PORT, () => {});