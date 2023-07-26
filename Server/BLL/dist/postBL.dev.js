"use strict";

var _require = require("mongoose"),
    mongoose = _require["default"];

var User = require("../models/userModel");

var addPost = function addPost(userId, obj) {
  var user;
  return regeneratorRuntime.async(function addPost$(_context) {
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
          obj._id = new mongoose.Types.ObjectId();
          user.posts.push(obj);
          _context.next = 9;
          return regeneratorRuntime.awrap(user.save());

        case 9:
          return _context.abrupt("return", "Post Added!");

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  addPost: addPost
};