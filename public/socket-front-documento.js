import { alertarERedirecionar, atualizarTexto } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
  socket.emit('selecionar_documento', nome, (texto) => {
    atualizarTexto(texto);
  });
}

function emitirTextoAtualizado(dados) {
  socket.emit('textoAtualizado', dados);
}

socket.on('textoAtualizado_clientes', (texto) => {
  atualizarTexto(texto);
})

function emitirExcluirDocumento(nome) {
  socket.emit('excluir_documento', nome);
}

socket.on('excluir_documento_interface', (nome) => {
  alertarERedirecionar(nome);
})

export { emitirTextoAtualizado, selecionarDocumento, emitirExcluirDocumento };