const User = require("../models/user");

module.exports = {
  /** Creater user */
  createUser: function (userObj /*, done */) {
    let newUser = new User(userObj);
    // newUser.save((err, data) => {
    //   if (err) {
    //     /* FAILURE */
    //     console.error(err);
    //     done(err);
    //   } else {
    //     /* SUCCESS */
    //     done(null, data);
    //   }
    // });

    return newUser.save();
  },

  /** update user */
  updateUser: function (filter, updateObj, done) {
    User.findOneAndUpdate(
      /* filter */
      filter,
      /* update  */
      updateObj,
      /* options */
      { new: true },
      /* callback */
      (err, data) => {
        if (err) {
          /* FAILURE */
          console.error(err);
          done(err);
        } else {
          /* SUCCESS */
          done(null, data);
        }
      }
    );
  },

  /** remove user */
  removeUser: function (filter, done) {},
};
