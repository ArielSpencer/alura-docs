import { documentosColecao } from "./dbConnect.js";

function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({ nome });

  return documento
}

function atualizarDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne({ nome }, { $set: { texto } });

  return atualizacao;
}

export { encontrarDocumento, atualizarDocumento };