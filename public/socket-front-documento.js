import { atualizarTexto } from "./documento.js";

const socket = io();

function emitirTextoAtualizado(texto) {
  socket.emit('textoAtualizado', texto);
}

socket.on('textoAtualizado_clientes', (texto) => {
  atualizarTexto(texto);
})

export { emitirTextoAtualizado };