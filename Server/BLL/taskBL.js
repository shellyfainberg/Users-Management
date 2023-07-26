const { default: mongoose } = require("mongoose");
let User = require("../models/userModel");

// GET - Get All - Read
const getAllTasks = (userId) => {
  return User.findById({ _id: userId }, "tasks");
};
// GET - Get By ID - Read
// const getTaskById = async (userId, taskId) => {
//   const user = await User.findById({ _id: userId });
//   const taskIndex = user.tasks.findIndex((task) => {
//     console.log("current id", task._id.toString());
//     console.log("my id :", taskId);
//     task._id.toString() === taskId;
//   });

//   console.log("taskIndex", taskIndex);
//   // console.log("user", user);
//   // console.log("from bl", user.tasks[taskIndex]);
//   return user.tasks[taskIndex];
// };


const updateTask = async (userId, taskId, updatedTask) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const taskIndex = user.tasks.findIndex(
    (task) => task._id.toString() === taskId
  );
  if (taskIndex === -1) {
    throw new Error("Task not found");
  }
  user.tasks[taskIndex].completed = updatedTask.completed;
  await user.save();
  return "Task Completed!";
};

const addTask = async (userId, obj) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  obj._id = new mongoose.Types.ObjectId();
  obj.completed = false;
  user.tasks.push(obj);
  await user.save();

  return "Task Added!";
};

const deleteTask = async (userId, id) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  await user.tasks.findByIdAndDelete(id);
  return " Task Deleted!";
};

module.exports = { getAllTasks, addTask, updateTask, deleteTask };
