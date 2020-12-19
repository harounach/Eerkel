require("dotenv").config();
const mongoose = require("mongoose");

/** Define Database Schema */
const userSchema = new mongoose.Schema(
  // Schema definition
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_on: String,
    updated_on: String,
  },
  // options
  {
    collection: "eerkel_users",
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
