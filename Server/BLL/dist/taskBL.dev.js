"use strict";

var _require = require("mongoose"),
    mongoose = _require["default"];

var User = require("../models/userModel"); // GET - Get All - Read


var getAllTasks = function getAllTasks(userId) {
  return User.findById({
    _id: userId
  }, "tasks");
}; // GET - Get By ID - Read
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


var updateTask = function updateTask(userId, taskId, updatedTask) {
  var user, taskIndex;
  return regeneratorRuntime.async(function updateTask$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(User.findById(userId));

        case 2:
          user = _context.sent;

          if (user) {
            _context.next = 5;
            break;
          }

          throw new Error("User not found");

        case 5:
          taskIndex = user.tasks.findIndex(function (task) {
            return task._id.toString() === taskId;
          });

          if (!(taskIndex === -1)) {
            _context.next = 8;
            break;
          }

          throw new Error("Task not found");

        case 8:
          user.tasks[taskIndex].completed = updatedTask.completed;
          _context.next = 11;
          return regeneratorRuntime.awrap(user.save());

        case 11:
          return _context.abrupt("return", "Task Completed!");

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
};

var addTask = function addTask(userId, obj) {
  var user;
  return regeneratorRuntime.async(function addTask$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(User.findById(userId));

        case 2:
          user = _context2.sent;

          if (user) {
            _context2.next = 5;
            break;
          }

          throw new Error("User not found");

        case 5:
          obj._id = new mongoose.Types.ObjectId();
          obj.completed = false;
          user.tasks.push(obj);
          _context2.next = 10;
          return regeneratorRuntime.awrap(user.save());

        case 10:
          return _context2.abrupt("return", "Task Added!");

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var deleteTask = function deleteTask(userId, id) {
  var user;
  return regeneratorRuntime.async(function deleteTask$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(User.findById(userId));

        case 2:
          user = _context3.sent;

          if (user) {
            _context3.next = 5;
            break;
          }

          throw new Error("User not found");

        case 5:
          _context3.next = 7;
          return regeneratorRuntime.awrap(user.tasks.findByIdAndDelete(id));

        case 7:
          return _context3.abrupt("return", " Task Deleted!");

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports = {
  getAllTasks: getAllTasks,
  addTask: addTask,
  updateTask: updateTask,
  deleteTask: deleteTask
};