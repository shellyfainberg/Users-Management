"use strict";

var User = require("../models/userModel"); // GET - Get All - Read


var getAllUsers = function getAllUsers() {
  return User.find({});
}; // GET - Get By ID - Read


var getUserById = function getUserById(id) {
  return User.findById({
    _id: id
  });
}; // POST - Create a new user - Create


var addUser = function addUser(obj) {
  var user;
  return regeneratorRuntime.async(function addUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          user = new User(obj);
          _context.next = 3;
          return regeneratorRuntime.awrap(user.save());

        case 3:
          return _context.abrupt("return", "Created!");

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}; // PUT - Update a user - Update


var updateUser = function updateUser(id, obj) {
  return regeneratorRuntime.async(function updateUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate(id, obj));

        case 2:
          return _context2.abrupt("return", "Updated!");

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // DELETE - Delete a user - Delete


var deleteUser = function deleteUser(id) {
  return regeneratorRuntime.async(function deleteUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(User.findByIdAndDelete(id));

        case 2:
          return _context3.abrupt("return", "Deleted!");

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports = {
  getAllUsers: getAllUsers,
  getUserById: getUserById,
  addUser: addUser,
  updateUser: updateUser,
  deleteUser: deleteUser
};