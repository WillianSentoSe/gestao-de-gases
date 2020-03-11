const express = require('express')
const routes = express.Router()

const fornecedorController = require('./controllers/fornecedorController')

routes.get('/fornecedores', fornecedorController.find)

module.exports = routes