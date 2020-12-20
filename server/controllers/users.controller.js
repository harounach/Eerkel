const usersController = {
  signin: (req, res) => {
    res.json({ message: "Congratulations! user are signin" });
  },
  signup: (req, res) => {
    res.json({ message: "Welcome to Eerkel app" });
  },
  signout: (req, res) => {
    res.json({ message: "Signed out!" });
  },
  updateAccount: (req, res) => {
    res.json({ message: "Your account has been updated" });
  },
  removeAccount: (req, res) => {
    res.json({ message: "Your account has been removed" });
  },
};

module.exports = usersController;
