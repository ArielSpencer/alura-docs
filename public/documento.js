import { emitirTextoAtualizado } from "./socket-front-documento.js";

const textoEditor = document.getElementById('editor-texto');

textoEditor.addEventListener('keyup', () => {
  emitirTextoAtualizado(textoEditor.value);
})

function atualizarTexto(texto) {
  textoEditor.value = texto;
}

export { atualizarTexto };