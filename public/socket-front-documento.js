import { atualizarTexto } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
  socket.emit('selecionar_documento', nome);
}

function emitirTextoAtualizado(dados) {
  socket.emit('textoAtualizado', dados);
}

socket.on('textoAtualizado_clientes', (texto) => {
  atualizarTexto(texto);
})

export { emitirTextoAtualizado, selecionarDocumento };