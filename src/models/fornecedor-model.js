const mongoose = require('mongoose')

var fornecedor_schema = new mongoose.Schema({
    telefone: String,
    nome_fantasia: String,
    razao_social: String,
    email: String,
    createAt: {
        type: Date,
        default: Date.now
    }
})
mongoose.model('fornecedores', fornecedor_schema)