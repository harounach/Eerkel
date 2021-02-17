const bcrypt = require("bcrypt");

const saltRound = 10;

module.exports = {
  hashPassword: async function (password) {
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  },
};
