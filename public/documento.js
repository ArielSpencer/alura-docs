import { emitirExcluirDocumento, emitirTextoAtualizado, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get('nome');

const textoEditor = document.getElementById('editor-texto');
const tituloDocumento = document.getElementById('titulo-documento');
const botaoExcluir = document.getElementById('excluir-documento');

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

botaoExcluir.addEventListener('click', () => {
  if (confirm('Tem certeza que deseja excluir este documento?')) {
    emitirExcluirDocumento(nomeDocumento);
  }
});

function alertarERedirecionar(nome) {
  if (nome === nomeDocumento) {
    alert(`O documento "${nome}" foi deletado!`);
    window.location.href = '/';
  }
}

export { atualizarTexto, alertarERedirecionar };