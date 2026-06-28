import { io } from "socket.io-client";

const socket = io("https://api.dahbelarby.com", {
  transports: ["websocket"],
});

export default socket;

