const mongoose = require("mongoose");
const promisse = require("promice");
const BaseLog = require('../base/log');

mongoose.promisse = promisse;
const Schema = mongoose.Schema;

//CLASS CONNECION
class DbConnection extends BaseLog{

    constructor(user, password, host, port, dataBase){
        super()
        this.host = host
        this.port = port
        this.dataBase = dataBase

        this.user = user
        this.password = password
    }

    //GETTERS AND SETTERS
    set(host, port, dataBase){
        if (!host || host == '') host = 'localhost'; else this.host = host;
        if (!port || port == '') port = '27017'; else this.port = port;
        if (!dataBase || dataBase == '') dataBase = 'gestaoDeGases'; else this.dataBase = dataBase;
    }

    get(){
        return{
            host: this.host,
            port: this.port,
            dataBase: this.dataBase
        }
    }


    //PUBLIC METHODS
    async connect(){
        try{
            this._registerConnectionEvents()
            await mongoose.connect(this._getMongoUrl(), {useUnifiedTopology: true, useNewUrlParser: true, authSource: 'admin'})
            let conn = mongoose.connection
            this.connection = conn;
        }
        catch(error){
            console.error(error)
        }
    }

    //PRIVATE METHODS
    _getMongoUrl(){ 
        let host, port, dataBase
        let user, password

        if (!this.host || this.host == '') host = 'localhost'; else host = this.host;
        if (!this.port || this.port == '') port = '27017'; else port = this.port;
        if (!this.dataBase || this.dataBase == '') dataBase = 'gestao-de-gases'; else dataBase = this.dataBase;

        if (!this.user || this.user == '') user = ''; else user = this.user;
        if (!this.password || this.password == '') password = ''; else password = this.password + "@";

        return `mongodb://${user}:${password}${host}:${port}/${dataBase}`
    }
    _registerConnectionEvents(id) {
        const logger = this.logger
        let mongoUrl = this.host + ':' + this.port
    
        mongoose.connection.once('open', () => {
          logger.info(`[${mongoUrl}] MongoDB is connected.`)
    
          if (process.send) process.send('ready')
        
          mongoose.connection.on('disconnected', () => logger.info(`[${mongoUrl}] MongoDB is disconnected.`))
          mongoose.connection.on('reconnected', () => logger.info(`[${mongoUrl}] MongoDB event reconnected.`))
          mongoose.connection.on('error', err => logger.info(`[${mongoUrl}] MongoDB event error: `, err))
        })
        mongoose.connection.on('connecting', () => logger.info(`Tryng to connect to MongoDB [${mongoUrl}]`))
      }
}

//CLASS FORNECEDOR
class Fornecedor{
    constructor(nome_fantasia, razao_social, telefone, email){
        this.nome_fantasia = nome_fantasia
        this.razao_social = razao_social
        this.telefone = telefone
        this.email = email
    }

    set (nome_fantasia, razao_social, telefone, email){
        this.nome_fantasia = nome_fantasia
        this.razao_social = razao_social
        this.telefone = telefone
        this.email = email
    }

    get(){
        return{
            nome_fantasia: this.nome_fantasia.toUpperCase(),
            razao_social: this.razao_social,
            telefone: this.telefone,
            email: this.email
        }
    }
    static findAll(){
        return fornecedor_model.find(function(err, result){
            if (err) console.error(err)
            console.log(result)
        })
    }
    static findBy(query){
        return fornecedor_model.find(query, function(err, result){
            if (err) console.error(err)
            console.info(result)
        })
    }
    find(){
        return fornecedor_model.find(this, function(err, res){
            if (err) this.logger.error(err)
            this.logger.info(res)
        })
    }
    saveToDb(){
        fornecedor_model.create(this)
    }
}
var fornecedor_schema = new Schema({
    telefone: String,
    nome_fantasia: String,
    razao_social: String,
    email: String
})
fornecedor_schema.loadClass(Fornecedor)
var fornecedor_model = mongoose.model('fornecedores', fornecedor_schema)

//API CLASS
class MongoApi{
    constructor(user, password, host, port, db){
        this.connection = new DbConnection(user, password, host, port, db)
        this.logger = this.connection.logger
    }
    //CONNECT TO DB
    async connect(){
        await this.connection.connect()
    }
    //FORNECEDOR METHODS
    getFornecedores(){
        return Fornecedor.findAll(function(err, res){
            if (err) this.logger.error(err)
            this.logger.info(res)
        })
    }
    getFornecedor(fornecedor){
        if (fornecedor instanceof Fornecedor)
            return fornecedor.getFornecedores()
        else
            this.logger.error('Parameter is not a instance of FORNECEDOR')
    }
    getFornecedorBy(query){
        let res = Fornecedor.findBy(query)
        if (res)
            return res
        else
            this.logger.info('No data found to Query "' + query + '"')
    }
    createFornecedor(fornecedor){
        if (fornecedor instanceof Fornecedor)
            return fornecedor.saveToDb()
        else
            this.logger.error('Parameter is not a instance of FORNECEDOR')
    }

}


//TESTS

const main = async () => {
    try{
        /*
        let mongoConnection = new DbConnection('admin', 'm0ng04dm1n1997', '127.0.0.1', '27017', 'gestao-de-gases')
        await mongoConnection.connect()

        stark_industries = new Fornecedor("Stark Industries", "Sell Weapons", "40028922", "Tonny.S@avengers.com")
        stark_industries.saveToDb()
        */
       let mongo_api = new MongoApi('admin', 'm0ng04dm1n1997', '127.0.0.1', '27017', 'gestao-de-gases')
       await mongo_api.connect()
       await mongo_api.createFornecedor(new Fornecedor('Veniso', 'Comprar alimento','21982152174', 'veniso@veniso.com'))
       await mongo_api.getFornecedorBy({nome_fantasia: 'Veniso'})
    }
    catch(error){
        console.error(error)
    }
}


//Mongo user: admin // password: myadminpassword OR m0ng04dm1n1997
//main()

module.exports = MongoApi