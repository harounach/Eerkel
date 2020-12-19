require("dotenv").config();
const express = require("express");
const app = express();

// Apply middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server listening on port " + 5000);
});
