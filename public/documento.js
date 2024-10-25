const socket = io();

const textoEditor = document.getElementById('editor-texto');

textoEditor.addEventListener('keyup', () => {
  socket.emit('textoAtualizado', textoEditor.value);
})

socket.on('textoAtualizado_clientes', (texto) => {
  textoEditor.value = texto;
})