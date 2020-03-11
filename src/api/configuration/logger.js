const winston = require ('winston')

const myFormat = winston.format.printf(({ level, message }) => {
    return `${new Date().toLocaleTimeString()} ${level}: ${message}`;
  });

const logger = winston.createLogger({
        format: winston.format.combine(
        winston.format.prettyPrint(),
        winston.format.colorize(),
        myFormat
    ),
    transports: [ new winston.transports.Console],
})

module.exports = logger