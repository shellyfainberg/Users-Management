let User = require("../models/userModel");

// GET - Get All - Read
const getAllUsers = () => {
  return User.find({});
};
// GET - Get By ID - Read
const getUserById = (id) => {
  return User.findById({ _id: id });
};

// POST - Create a new user - Create
const addUser = async (obj) => {
  const user = new User(obj);
  await user.save();
  return "Created!";
};

// PUT - Update a user - Update
const updateUser = async (id, obj) => {
  await User.findByIdAndUpdate(id, obj);
  return "Updated!";
};

// DELETE - Delete a user - Delete
const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return "Deleted!";
};
module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
