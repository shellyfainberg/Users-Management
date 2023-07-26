"use strict";

var userBL = require("../BLL/userBL");

var taskBL = require("../BLL/taskBL");

var postBL = require("../BLL/postBL");

var express = require("express");

var router = express.Router(); //Get all users

router.get("/", function _callee(req, resp) {
  var users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(userBL.getAllUsers());

        case 2:
          users = _context.sent;
          return _context.abrupt("return", resp.json(users));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Get User By ID

router.get("/:id", function _callee2(req, res) {
  var id, user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id; // Destructuring

          _context2.next = 3;
          return regeneratorRuntime.awrap(userBL.getUserById(id));

        case 3:
          user = _context2.sent;
          res.json(user);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //Get all user tasks

router.get("/:id/tasks", function _callee3(req, resp) {
  var id, tasks;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id; // Destructuring

          _context3.next = 3;
          return regeneratorRuntime.awrap(taskBL.getAllTasks(id));

        case 3:
          tasks = _context3.sent;
          return _context3.abrupt("return", resp.json(tasks));

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // Get Task By ID from user id
// router.get("/:id/tasks/:taskId", async (req, resp) => {
//   const { id } = req.params; // Destructuring
//   const { taskId } = req.params; // Destructuring
//   console.log("taskId", taskId);
//   const task = await taskBL.getTaskById(id, taskId);
//   console.log("from route", task);
//   return resp.json(task);
// });
// Update a task - to completed

router.put("/:id/tasks/:taskId", function _callee4(req, resp) {
  var id, taskId, obj, result;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          taskId = req.params.taskId;
          obj = req.body;
          _context4.next = 5;
          return regeneratorRuntime.awrap(taskBL.updateTask(id, taskId, obj));

        case 5:
          result = _context4.sent;
          return _context4.abrupt("return", resp.json(result));

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // Add a new user

router.post("/", function _callee5(req, res) {
  var obj, result;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          obj = req.body;
          _context5.next = 4;
          return regeneratorRuntime.awrap(userBL.addUser(obj));

        case 4:
          result = _context5.sent;
          res.status(201).json(result);
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json(_context5.t0.message); // status 500 - Internal Server Error

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); //Add a new Task

router.post("/:id", function _callee6(req, res) {
  var obj, id, result;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          obj = req.body;
          id = req.params.id;
          _context6.next = 5;
          return regeneratorRuntime.awrap(taskBL.addTask(id, obj));

        case 5:
          result = _context6.sent;
          res.status(201).json(result);
          _context6.next = 12;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json(_context6.t0.message); // status 500 - Internal Server Error

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); //Add a new Post

router.post("/:id/post", function _callee7(req, res) {
  var obj, id, result;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          obj = req.body;
          id = req.params.id;
          _context7.next = 5;
          return regeneratorRuntime.awrap(postBL.addPost(id, obj));

        case 5:
          result = _context7.sent;
          res.status(201).json(result);
          _context7.next = 12;
          break;

        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          res.status(500).json(_context7.t0.message); // status 500 - Internal Server Error

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); // Update a user

router.put("/:id", function _callee8(req, resp) {
  var id, obj, result;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          id = req.params.id;
          obj = req.body;
          _context8.next = 4;
          return regeneratorRuntime.awrap(userBL.updateUser(id, obj));

        case 4:
          result = _context8.sent;
          return _context8.abrupt("return", resp.json(result));

        case 6:
        case "end":
          return _context8.stop();
      }
    }
  });
}); // Delete a user

router["delete"]("/:id", function _callee9(req, res) {
  var id, result;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          id = req.params.id;
          _context9.next = 3;
          return regeneratorRuntime.awrap(userBL.deleteUser(id));

        case 3:
          result = _context9.sent;
          return _context9.abrupt("return", res.json(result));

        case 5:
        case "end":
          return _context9.stop();
      }
    }
  });
}); // Delete a task
// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   const result = await taskBL.deleteTask(id,taskId);
//   return res.json(result);
// });

module.exports = router;