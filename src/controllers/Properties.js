const logger = require('../lib/Logger');
const apiResponse = require('../utils/apiResponse');
const HereApi = require('../lib/HereApi');


/**
 * @class
 * @hideconstructor
 */
class Properties {
  /**
   * Method to get Properties
   * @param {object} req Express Request Object
   * @param {object} res Express Response Object
   */
  static async getProperties(req, res) {
    const correlationId = res.locals.correlationId;
    try {
      const search = req.query.search;
      const coordinates = req.query.at;
      const result = await HereApi.getLocation({ coordinates, search });
      logger.info({ correlationId }, 'Success!!!');
      return apiResponse(res, 200, null, 'success', result);
    } catch (error) {
      logger.error({ error, correlationId }, 'Problem!!!');
      const statusCode = (error.name === 'TypeError' || error.name === 'Error')
        ? 400 : 500;
      const errorMessage = (error.name === 'TypeError' || error.name === 'Error')
        ? error.message : 'Could not retrieve the location.';
      return apiResponse(res, statusCode, errorMessage, 'error', null);
    }
  }
}

module.exports = Properties;
