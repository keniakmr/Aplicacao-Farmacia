const mongoose = require('mongoose')
 
const Cliente = mongoose.model('cliente', {
    nome: String,
    cpf: String,
    dt_nasc: String,
    telefone: String,
    email: String,
    cep: String,
    endereco: String,
    bairro: String,
    cidade: String,
    uf: String
})
 
module.exports = Cliente
