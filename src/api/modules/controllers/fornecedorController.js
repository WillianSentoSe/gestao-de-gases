const mongoose = require('mongoose')
const Fornecedor = mongoose.model('fornecedores')

module.exports = {
    async find(req, res) {
        let fornecedor = await Fornecedor.find(req.body)
        return res.json(fornecedor)
    }
}