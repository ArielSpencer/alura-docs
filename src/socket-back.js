import io from "./servidor.js";

io.on('connection', (socket) => {
  console.log('Um usuário conectado! ID:', socket.id);

  socket.on('selecionar_documento', (nomeDocumento) => {
    socket.join(nomeDocumento);
  });

  socket.on('textoAtualizado', ({ texto, nomeDocumento }) => {
    socket.to(nomeDocumento).emit('textoAtualizado:', texto);
  });

  socket.on("disconnect", (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado!
    Motivo: ${motivo}`);
  });
});