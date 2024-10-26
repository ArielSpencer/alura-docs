import io from "./servidor.js";

io.on('connection', (socket) => {
  console.log('Um usuário conectado! ID:', socket.id);

  socket.on('textoAtualizado', (texto) => {
    socket.broadcast.emit('textoAtualizado:', texto);
  });

  socket.on("disconnect", (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado!
    Motivo: ${motivo}`);
  });
});