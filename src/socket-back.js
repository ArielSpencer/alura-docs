import io from "./servidor.js";

const documentos = [
  {
    nome: "JavaScript",
    texto: "texto de JavaScript..."
  },
  {
    nome: "Node",
    texto: "texto de Node..."
  },
  {
    nome: "Socket.io",
    texto: "texto de Socket.io..."
  }
];

io.on('connection', (socket) => {
  console.log('Um usuário conectado! ID:', socket.id);

  socket.on('selecionar_documento', (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = encontrarDocumento(nomeDocumento);

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
  const documento = documentos.find((documento) => {
    return documento.nome === nome;
  });

  return documento
}