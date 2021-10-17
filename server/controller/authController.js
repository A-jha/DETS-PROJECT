const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const createToken = require("../helper/tokenGenerator");
const errorHandler = require("../helper/errorHandler");

module.exports.signup_get = async (req, res) => {
  res.send("signp-get");
};

module.exports.signup_post = async (req, res) => {
  let {
    username,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    position,
  } = req.body;
  try {
    const user = await User.create({
      username,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      position,
    });
    const token = createToken(user._id);
    res.cookie("token", token, { httpOnly: true, maxAge: 60 * 60 * 1000 });
    console.log("User Created");
    res.status(201).json({ user });
  } catch (err) {
    const errors = errorHandler(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_get = async (req, res) => {
  res.send("login-get");
};
module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("token", token, { httpOnly: true, maxAge: 60 * 60 * 1000 });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = errorHandler(err);
    res.status(400).json({ errors });
  }
};
