
const messages = require("../utils/constant.js");
const axios = require('axios');

const fetchWeather = async (req) => {
  const { lat, lon } = req.query;
  const apiKey = 'd0f514c57f9015f3a66e586ebee48147'; // Replace with your API key

  if (!lat || !lon) {
    throw messages.error.LATLONGRQD
  }

  const weatherApi = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(weatherApi);
   
    if (!response.data) {
      throw messages.error.INVDRES;
    }

    return response.data;
  } catch (error) {
    if (error.response) {

      throw `Weather API returned an error: ${error.response.status} ${error.response.statusText}`;
    } else if (error.request) {

      throw 'No response received from the weather API';
    } else {
      throw 'Error setting up the weather API request';
    }
  }
};
module.exports = { fetchWeather };
