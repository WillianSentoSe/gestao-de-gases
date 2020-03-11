const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')

const dbConnection = require('./configuration/mongo-connection')

const server = express()
const apiPort = 3000

server.use(bodyParser.urlencoded({ extended: true }))
server.use(cors())
server.use(bodyParser.json())

dbConnection.connect()
requireDir('./models')

const Fornecedor = mongoose.model('fornecedores')

server.get('/database',(req, res) => {
    try{
        Fornecedor.create({
            telefone: '980028922',
            razao_social: 'telecurso-2000',
            nome_fantasia: 'vender alimento',
            email: 'em@il.com'
        })
        res.send('ola marilene')
    }
    catch(err){
        console.error(err)
        throw err
    }
})

server.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))