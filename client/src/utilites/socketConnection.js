import io from "socket.io-client";
let socket = io.connect("http://localhost:8181", {
  transports: ["websocket"],
});
socket.emit("clientAuth", "sadasd");
export default socket;
