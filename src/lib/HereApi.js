const axios = require('axios');
const querystring = require('querystring');

const host = process.env.HEREAPI_HOST;
const path = process.env.HEREAPI_PATH;
const apiKey = process.env.HEREAPI_KEY;

async function getLocation({ coordinates, search }) {
  const queryObj = {
    at: coordinates,
    apiKey
  };
  if (search) {
    queryObj.q = search
  }
  const query = querystring.encode(queryObj);
  try {
    const response = await axios({
      method: 'get',
      url: `${host}/${path}?${query}`,
      responseType: 'application/json'
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

module.exports = { getLocation };