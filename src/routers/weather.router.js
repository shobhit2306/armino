const express = require("express");
const router = express.Router();
const weather = require("../controllers/weather.js");
const messages = require("../utils/constant.js");
const { successResponse, errorResponse } = require("../utils/response.js");

// router for user or customer registration
router.get("/current", async (req, res) => {
  try {
    const weatherData = await weather.fetchWeather(req);
    res.send(successResponse(201, messages.success.SUCCESS, weatherData));
  } catch (error) {
    console.log("error--------",error,"-----error");
    res.send(errorResponse(409, error));
  }
});


module.exports = router;
