const createSlug = (username) => {
  return username.replace(" ", "-").toLowerCase();
};

export default createSlug;
