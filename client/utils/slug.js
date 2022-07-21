const createSlug = (username) => {
  username = username + Math.floor(Math.random() * 100).toString();
  return username.replace(" ", "-").toLowerCase();
};

export default createSlug;
