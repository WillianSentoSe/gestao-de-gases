const mongoose = require("mongoose");
const promisse = require("promice");
const BaseLog = require('../base/log');

mongoose.promisse = promisse;
const Schema = mongoose.Schema;

//CLASS CONNECION
class DbConnection extends BaseLog{

    constructor(host, port, dataBase){
        super()
        this.host = host
        this.port = port
        this.dataBase = dataBase
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
            await mongoose.connect(this._getMongoUrl(), {useUnifiedTopology: true, useNewUrlParser: true})
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

        if (!this.host || this.host == '') host = 'localhost'; else host = this.host;
        if (!this.port || this.port == '') port = '27017'; else port = this.port;
        if (!this.dataBase || this.dataBase == '') dataBase = 'gestao-de-gases'; else dataBase = this.dataBase;

        return `mongodb://${host}:${port}/${dataBase}`
    }
    _registerConnectionEvents(id) {
        const logger = this.logger;
        let mongoUrl = this._getMongoUrl()
    
        mongoose.connection.once('open', () => {
          logger.info(`[${mongoUrl}] MongoDB is connected.`);
    
          if (process.send) process.send('ready');
    
          mongoose.connection.on('disconnected', () => logger.info(`[${mongoUrl}] MongoDB is disconnected.`));
          mongoose.connection.on('reconnected', () => logger.info(`[${mongoUrl}] MongoDB event reconnected.`));
          mongoose.connection.on('error', err => logger.info(`[${mongoUrl}] MongoDB event error: `, err));
        });
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
    static findAll(){
        return fornecedor_model.find(function(err, result){
            if (err) console.error(err)
            console.log(result)
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

//const Fornecedor = mongoose.model('fornecedores', Schema)

const createFornecedor = fornecedor =>{

}
const main = async () => {
    try{
        let mongoConnection = new DbConnection('localhost', '27017', 'gestao-de-gases')
        await mongoConnection.connect()

        stark_industries = new Fornecedor("Stark Industries", "Sell Weapons", "40028922", "Tonny.S@avengers.com")
        stark_industries.saveToDb()

        /*
        let novoforn = new model_fornecedor()
        novoforn.nome_fantasia = "Nome"
        novoforn.telefone = "Telefone"
        novoforn.razao_social = "Razao"

        novoforn.save()

        Fornecedor.find(function(err, result){
            if (err) mongoConnection.logger.error(err)
            mongoConnection.logger.info(result)
        })
        */
    }
    catch(error){
        console.error(error);
    }
}

//main();