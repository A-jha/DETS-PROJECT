const handleError = (err) => {
  let errors = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  //incorrect email
  if (err.message === "incorrect email") {
    errors.email = "sorry email is not registered";
  }
  //incorrect password
  if (err.message === "incorrect password") {
    errors.password = "password did not match";
  }
  //if during signup registered email is entered
  if (err.code === 11000) {
    errors.email = "this email is already registered";
  }

  //validation error defined in model
  if (err.message.includes("users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  //finally return the errors
  return errors;
};

module.exports = handleError;
