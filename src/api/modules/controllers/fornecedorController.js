const mongoose = require('mongoose')
const Fornecedor = mongoose.model('fornecedores')

module.exports = {
    async find(req, res) {
        let fornecedor = await Fornecedor.find(req.json)
        return res.json(fornecedor)
    },
    async create(req, res) {
        let fornecedor = await Fornecedor.create(req.body)
        return res.json(fornecedor)
    }
}