require("dotenv").config();
const express = require("express");
const app = express();
const usersRoute = require("./routes/users.route");

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
