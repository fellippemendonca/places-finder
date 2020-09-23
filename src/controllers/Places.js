const logger = require('../lib/Logger');
const apiResponse = require('../utils/apiResponse');
const HereApi = require('../lib/HereApi');


/**
 * @class
 * @hideconstructor
 */
class Places {
  /**
   * Method to get places
   * @param {object} req Express Request Object
   * @param {object} res Express Response Object
   */
  static async getPlaces(req, res) {
    const correlationId = res.locals.correlationId;
    try {
      const input = req.params;
      input.search = req.query.search;
      const result = await HereApi.getLocation(input);
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

module.exports = Places;
