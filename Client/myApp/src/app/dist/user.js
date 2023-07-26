"use strict";
exports.__esModule = true;
exports.Post = exports.Task = exports.User = void 0;
var User = /** @class */ (function () {
    function User(_id, name, email, street, city, zipcode, tasks, posts) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
        this.tasks = tasks;
        this.posts = posts;
    }
    return User;
}());
exports.User = User;
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());
exports.Task = Task;
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());
exports.Post = Post;
