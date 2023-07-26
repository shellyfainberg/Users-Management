"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersComponent = void 0;
var core_1 = require("@angular/core");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(restUtils) {
        this.restUtils = restUtils;
        this.searchByNameOrEmail = '';
        this.users = [];
        this.searchedUsers = [];
        this.showAddUser = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.sub = this.restUtils
            .getAllData('http://localhost:8000/user')
            .subscribe(function (data) {
            _this.users = data;
            _this.searchedUsers = data;
        });
    };
    UsersComponent.prototype.searchUser = function (data) {
        var _this = this;
        this.searchByNameOrEmail = data;
        this.searchedUsers = this.users.filter(function (user) {
            var _a, _b;
            return ((_a = user.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(_this.searchByNameOrEmail.toLocaleLowerCase())) || ((_b = user.email) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase().includes(_this.searchByNameOrEmail.toLocaleLowerCase()));
        });
    };
    UsersComponent.prototype.addNewUser = function () {
        this.showAddUser = !this.showAddUser;
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.scss']
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
