import { io } from "socket.io-client";

const socket = io("https://goldapp-production-99bf.up.railway.app", {
  transports: ["websocket"],
});

export default socket;