const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already exists"],
    required: [true, "Please enter your username"],
    lowercase: true,
    minlength: [2, "user name is too small"],
  },
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "This email is already registered"],
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: [6, "Password is too small"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Please enter password"],
    minlength: [6, "Password is too small"],
  },
  position: {
    type: String,
    required: [true, "Please Select Your Status"],
  },
  notification: [
    {
      username: String,
      position: String,
    },
  ],
});

//get info about the password entered by user if it is matching or not
userSchema.path("password").validate(function (v) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password do not matches");
  }
});

//fire this function before saving this doc to database
userSchema.pre("save", async function (next) {
  //generate a salt
  const salt = await bcrypt.genSalt();

  this.password = await bcrypt.hash(this.password, salt);
  this.confirmPassword = await bcrypt.hash(this.confirmPassword, salt);
  next();
});

//static method to login
userSchema.statics.login = async function (email, password) {
  //if email is registered or not
  const user = await this.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    //if auth is true
    if (auth) {
      return user;
    } else {
      throw new Error("incorrect password");
    }
  } else {
    throw new Error("incorrect email");
  }
};

const User = mongoose.model("users", userSchema);

module.exports = User;
