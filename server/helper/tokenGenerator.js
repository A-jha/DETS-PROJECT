const jwt = require("jsonwebtoken");
require("dotenv").config();

const maxAge = 60 * 60 * 24 * 1000;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
};

module.exports = createToken;
