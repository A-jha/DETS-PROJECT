import React, { useState } from "react";
let defaulUser = {
  firstName: "Login",
  lastName: "Login",
  email: "login",
  id: 1,
};
const User = () => {
  const [user, setUser] = useState(defaulUser);
  return <div>User</div>;
};

export default User;
