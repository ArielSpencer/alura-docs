import { emitirTextoAtualizado, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get('nome');

const textoEditor = document.getElementById('editor-texto');
const tituloDocumento = document.getElementById('titulo-documento');

tituloDocumento.textContent = nomeDocumento || 'Documento sem título';

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener('keyup', () => {
  emitirTextoAtualizado({
    texo: textoEditor.value,
    nomeDocumento,
  });
})

function atualizarTexto(texto) {
  textoEditor.value = texto;
}

export { atualizarTexto };