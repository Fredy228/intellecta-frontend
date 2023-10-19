import { io, ManagerOptions } from "socket.io-client";
import { SocketOptions } from "dgram";

const options: Partial<ManagerOptions & SocketOptions> = {
  forceNew: true,
  // reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

const SERVER_URL = process.env.SERVER_WEBSOCKET
  ? process.env.SERVER_WEBSOCKET
  : "http://localhost:4444";

const socket = io(SERVER_URL, options);

export default socket;
