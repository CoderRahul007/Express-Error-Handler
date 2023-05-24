const winston = require('winston');
const { combine, timestamp, printf } = winston.format;

// Configure Winston logger
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message} `;
});

const logger = winston.createLogger({
 levels: winston.config.npm.levels,
  format: combine(timestamp(), logFormat),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log' })
  ]
});

module.exports.logger = logger;
