const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");
const app = express();

//middleware to parse data encoded in url
app.use(express.urlencoded({ extended: false }));

//middleware to use json
app.use(express.json());

//connect to database
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT | 5000;

console.log(PORT);

app.use("/auth", authRoutes);
app.listen(PORT, () => {
  console.log(
    `server is listening to Port:${PORT}\nVisit:http://localhost:${PORT}`
  );
});
