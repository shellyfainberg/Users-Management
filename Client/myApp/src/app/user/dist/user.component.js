"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserComponent = void 0;
var core_1 = require("@angular/core");
var user_1 = require("../user");
var UserComponent = /** @class */ (function () {
    function UserComponent(restUtils, selectedUserService) {
        this.restUtils = restUtils;
        this.selectedUserService = selectedUserService;
        this.user = new user_1.User();
        this.selectedUserId = null;
        this.isSelected = false;
        this.userTasksCompleted = true;
        this.showData = false;
        this.dynamicStyles = {};
        this.posts = [];
        this.tasks = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.user.tasks) {
            for (var _i = 0, _a = this.user.tasks; _i < _a.length; _i++) {
                var task = _a[_i];
                if (!task.completed) {
                    this.userTasksCompleted = false;
                }
            }
        }
        this.selectedUserService.selectedUserId$.subscribe(function (selectedUserId) {
            _this.isSelected = selectedUserId === _this.user._id;
        });
    };
    UserComponent.prototype.updateUser = function (name, email) {
        var _a, _b, _c;
        var obj = {};
        var street = (_a = this.streetInput) === null || _a === void 0 ? void 0 : _a.nativeElement.value;
        var city = (_b = this.cityInput) === null || _b === void 0 ? void 0 : _b.nativeElement.value;
        var zipcode = (_c = this.zipcodeInput) === null || _c === void 0 ? void 0 : _c.nativeElement.value;
        if (this.showData) {
            obj = {
                name: name,
                email: email,
                street: street,
                city: city,
                zipcode: zipcode
            };
        }
        else {
            obj = {
                name: name,
                email: email
            };
        }
        this.sub = this.restUtils
            .updateData('http://localhost:8000/user', this.user._id, obj)
            .subscribe(function (data) {
            alert(data);
        });
    };
    UserComponent.prototype.deleteUser = function () {
        this.sub2 = this.restUtils
            .deleteData('http://localhost:8000/user', this.user._id)
            .subscribe(function (data) {
            alert(data);
        });
    };
    UserComponent.prototype.coloredSelectedUser = function () {
        this.selectedUserService.setSelectedUser(this.user._id || '');
        this.isSelected = true;
    };
    UserComponent.prototype.ngOnDestroy = function () {
        var _a, _b, _c, _d, _e;
        (_a = this.sub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.sub2) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.sub3) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        (_d = this.sub4) === null || _d === void 0 ? void 0 : _d.unsubscribe();
        (_e = this.sub5) === null || _e === void 0 ? void 0 : _e.unsubscribe();
    };
    __decorate([
        core_1.Input()
    ], UserComponent.prototype, "user");
    __decorate([
        core_1.ViewChild('street')
    ], UserComponent.prototype, "streetInput");
    __decorate([
        core_1.ViewChild('city')
    ], UserComponent.prototype, "cityInput");
    __decorate([
        core_1.ViewChild('zipcode')
    ], UserComponent.prototype, "zipcodeInput");
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.scss']
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
