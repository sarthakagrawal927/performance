import io from "socket.io-client";
let socket = io.connect("http://localhost:8181", { transports: ["websocket"] });
console.log(socket);
socket.emit("clientAuth", "sadasd");
export default socket;
