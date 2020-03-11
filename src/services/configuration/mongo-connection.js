const mongoose = require("mongoose")
const promisse = require("promice");

mongoose.promisse = promisse;

class MongoConnection{
    constructor(host, port, database, username, password){
        this.host = host
        this.port = port
        this.database = database
        this.username = username
        this.password = password
    }

    _getConnectionString(){
        if (!this.host) this.host = 'localhost'
        if (!this.port) this.port = '27017'
        if (!this.username) this.username = 'admin'
        if (!this.password) this.password = 'm0ng04dm1n1997'
        if (!this.database) this.database = 'gestao-de-gases'
        let returnString
        (!this.username||!this.password)? returnString = `mongodb://${this.host}:${this.port}/${this.database}`:
        returnString = `mongodb://${this.username}:${this.password}@${this.host}:${this.port}/${this.database}?authSource=admin`

        return returnString
    }
    _registerConnectionEvents() {
        let mongoUrl = this.host + ':' + this.port

        mongoose.connection.once('open', () => {
          console.info(`Conectado ao MongoDB [${mongoUrl}] `)
    
          if (process.send) process.send('ready')
        
          mongoose.connection.on('disconnected', () => console.info(`Desconectado do MongoDB.`))
          mongoose.connection.on('reconnected', () => console.info(`MongoDB reconectado.`))
          mongoose.connection.on('error', err => console.error(`Ocorreu um erro com o MongoDB: `, err))
        })
        mongoose.connection.on('connecting', () => console.info(`Tentando se conectar ao MongoDB [${mongoUrl}]`))
    }
    async connect(){
        mongoose.connection.on('connecting', () => console.info(`Tentando se conectar ao MongoDB [${this.host}:${this.port}]`))
        await mongoose.connect(this._getConnectionString(), {useNewUrlParser: true, useUnifiedTopology: true}).then(this._registerConnectionEvents())
    }
}

module.exports = new MongoConnection()