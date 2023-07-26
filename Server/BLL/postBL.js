const { default: mongoose } = require("mongoose");
let User = require("../models/userModel");

const addPost = async (userId, obj) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  obj._id = new mongoose.Types.ObjectId();
  user.posts.push(obj);
  await user.save();

  return "Post Added!";
};

module.exports = { addPost };
