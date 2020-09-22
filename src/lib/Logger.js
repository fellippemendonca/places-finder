const pino = require('pino');
const config = require('../config');

const logger = pino({ level: config.LOG_LEVEL || 'info' });

module.exports = logger;
