const mongoose = require("mongoose");

const { isURL } = require("validator");

const NoticeSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title Must Not Be empty"],
  },
  description: {
    type: String,
    required: [true, "Please Write a description"],
  },
  link: {
    type: String,
    validate: [isURL, "Please enter a valid URL"],
  },
  username: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

const Notice = mongoose.model("notice", NoticeSchema);
module.exports = Notice;
