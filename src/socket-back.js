import io from "./servidor.js";

io.on('connection', (socket) => {
  console.log('Um usuário conectado! ID:', socket.id);
});