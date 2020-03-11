const mongoose = require("mongoose")
const logger = require('./logger')

const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT
const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD
const database = process.env.MONGO_DATABASE


class MongoConnection{
    constructor(host, port, database, username, password){
        this.host = host
        this.port = port
        this.database = database
        this.username = username
        this.password = password
    }

    _getConnectionString(){
        if (!this.host) this.host = host
        if (!this.port) this.port = port
        if (!this.username) this.username = username
        if (!this.password) this.password = password
        if (!this.database) this.database = database
        let returnString
        (!this.username||!this.password)? returnString = `mongodb://${this.host}:${this.port}/${this.database}`:
        returnString = `mongodb://${this.username}:${this.password}@${this.host}:${this.port}/${this.database}?authSource=admin`

        return returnString
    }
    _registerConnectionEvents() {
        let mongoUrl = this.host + ':' + this.port

        mongoose.connection.once('open', () => {
            logger.info(`Conectado ao MongoDB [${mongoUrl}] `)
    
          if (process.send) process.send('ready')
        
          mongoose.connection.on('disconnected', () => logger.info(`Desconectado do MongoDB.`))
          mongoose.connection.on('reconnected', () => logger.info(`MongoDB reconectado.`))
          mongoose.connection.on('error', err => logger.error(`Ocorreu um erro com o MongoDB: `, err))
        })
        mongoose.connection.on('connecting', () => logger.info(`Tentando se conectar ao MongoDB [${mongoUrl}]`))
    }
    async connect(){
        mongoose.connection.on('connecting', () => logger.info(`Tentando se conectar ao MongoDB [${this.host}:${this.port}]`))
        await mongoose.connect(this._getConnectionString(), {useNewUrlParser: true, useUnifiedTopology: true}).then(this._registerConnectionEvents())
    }
}

module.exports = new MongoConnection()