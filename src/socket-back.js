import { documentosColecao } from "./dbConnect.js";
import io from "./servidor.js";

io.on('connection', (socket) => {
  console.log('Um usuário conectado! ID:', socket.id);

  socket.on('selecionar_documento', async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    console.log(documento);

    if (documento) {
      devolverTexto(documento.texto);
    }

  });

  socket.on('textoAtualizado', ({ texto, nomeDocumento }) => {
    const documento = encontrarDocumento(nomeDocumento);

    if (documento) {
      documento.texto = texto;

      socket.to(nomeDocumento).emit('textoAtualizado:', texto);
    }

  });

  socket.on("disconnect", (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado!
    Motivo: ${motivo}`);
  });
});

function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({ nome });

  return documento
}