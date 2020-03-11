const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')
const logger = require('./configuration/logger')

const apiPort = process.env.API_PORT
const apiName = process.env.API_NAME

const dbConnection = require('./configuration/mongoConfig')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(cors())
server.use(bodyParser.json())

dbConnection.connect()
requireDir('../models')

server.use('/api', require('./modules/routers'))

server.listen(apiPort, () => logger.info(`[${apiName}] Server running on port ${apiPort}`))