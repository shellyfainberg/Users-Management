"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RestutilsService = void 0;
var core_1 = require("@angular/core");
var RestutilsService = /** @class */ (function () {
    function RestutilsService(http) {
        this.http = http;
    }
    RestutilsService.prototype.getAllData = function (url) {
        return this.http.get(url);
    };
    RestutilsService.prototype.getData = function (url, id) {
        return this.http.get(url + "/" + id);
    };
    RestutilsService.prototype.getTasks = function (url, id) {
        return this.http.get(url + "/" + id + "/tasks");
    };
    RestutilsService.prototype.createItem = function (url, obj) {
        return this.http.post("" + url, obj);
    };
    RestutilsService.prototype.createTask = function (url, id, obj) {
        return this.http.post(url + "/" + id, obj);
    };
    RestutilsService.prototype.createPost = function (url, id, obj) {
        return this.http.post(url + "/" + id + "/post", obj);
    };
    RestutilsService.prototype.updateData = function (url, id, obj) {
        return this.http.put(url + "/" + id, obj);
    };
    RestutilsService.prototype.completedData = function (url, UserId, taskId, obj) {
        return this.http.put(url + "/" + UserId + "/tasks/" + taskId, obj);
    };
    RestutilsService.prototype.deleteData = function (url, id) {
        return this.http["delete"](url + "/" + id);
    };
    RestutilsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RestutilsService);
    return RestutilsService;
}());
exports.RestutilsService = RestutilsService;
