const winston = require('winston');

class LogController
{
    constructor()
    {
        this.logger = winston.createLogger({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            ),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({filename: 'log/error.log', level: 'error'}),
                new winston.transports.File({filename: 'log/info.log', level: 'info'})
            ]
        });
    }
}


module.exports = LogController;