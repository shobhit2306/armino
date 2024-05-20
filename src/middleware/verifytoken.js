const jwt = require("jsonwebtoken");
const messages = require("../utils/constant");
const { successResponse, errorResponse } = require("../utils/response");

const verifytoken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.send(errorResponse(401, messages.error.NO_JWT));
  const token = authHeader.split(" ")[1];
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) return res.send(errorResponse(401, messages.error.INVALID_JWT));
      console.log(payload,"payload");
      req.email = payload.email;
      next();
    });
  } catch (error) {
    return res.send(errorResponse(400, messages.error.WRONG_WITH_JWT));
  }
};



module.exports = verifytoken;
