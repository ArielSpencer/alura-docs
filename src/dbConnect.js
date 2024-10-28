import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const cliente = new MongoClient(process.env.MONGODB_URI)

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");

  console.log("Conectado com sucesso ao servidor!");

} catch (error) {
  console.log(error);
}

export { documentosColecao };