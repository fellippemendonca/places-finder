const uuid = require('node-uuid');
const logger = require('../lib/Logger');
 
module.exports = (req, res, next) => {
  // try to retrieve correlation ID from headsers > queryParams > body json on root level
  let correlationId = req.get('x-txn-correlationid') || req.query.correlationId || null;
  if (!correlationId) {
    // generate a new correlationId when request didn't contain one.
    correlationId = uuid.v4();
    logger.info(`No incoming correlationId found. Generating a fresh correlationId: ${correlationId}`);
  }
  res.locals.correlationId = correlationId;
  res.header('X-TXN-CorrelationID', correlationId);
  next();
};