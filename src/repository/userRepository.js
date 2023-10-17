const User = require("../model/userModel");

const UserRepository = {
  createUser: async (fullname, username, email, phonenumber, role) => {
    const user = await User.create({
      fullname,
      username,
      email,
      phonenumber,
      role,
    });
    return user;
  },

  getUserByEmail: async (email) => {
    const user = await User.findOne({ email });

    return user;
  },
  getUserByPhonenumber: async (phonenumber) => {
    const user = await User.findOne({ phonenumber });
    return user;
  },
};


module.exports = UserRepository;