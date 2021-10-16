const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//post new notification
module.exports.notice_post = (req, res) => {
  console.log(req.body);
  res.send("Notification posted");
};

//fetch all notification

module.exports.notice_get = (req, res) => {
  res.send("All Notifications will be here");
};

//update notice
// 1. update your own notice only
// 2. update if you are admin
module.exports.notice_update = (req, res) => {
  console.log(req.params);
  res.send("Trying to update");
};

//delete one notice
//1. delete notice if it is yours
//2. other wise not allowed to delete
module.exports.notice_delete = (req, res) => {
  console.log(req.params);
  res.send("Trying to delete");
};
