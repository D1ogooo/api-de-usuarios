const mongoose = require('mongoose');
mongoose.Promise = global.Promise

main().catch(error => console.log(error));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Usuarios');
  try {
    console.log("Conectado ao banco de dados")
  } catch (error) {
    console.log("Falha ao se conectar com o banco de dados")
  }
}

module.exports = mongoose

