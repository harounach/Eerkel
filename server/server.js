require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRoute = require("./routes/users.route");

// Connect to database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error(err);
  });

// Apply middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world");
});

// Register api routes
app.use("/api/v1/user", usersRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server listening on port " + 5000);
});
