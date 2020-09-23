const axios = require('axios');
const querystring = require('querystring');

const host = process.env.HEREAPI_HOST;
const path = process.env.HEREAPI_PATH;
const apiKey = process.env.HEREAPI_KEY;

async function getLocation({ latitude, longitude, search }) {
  const queryObj = {
    at: `${latitude},${longitude}`,
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
    console.log(err);
  }
  return null;
}

module.exports = { getLocation };