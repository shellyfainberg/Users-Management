"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddUserComponent = void 0;
var core_1 = require("@angular/core");
var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(restUtils) {
        this.restUtils = restUtils;
        this.users = [];
        this.notify = new core_1.EventEmitter();
    }
    AddUserComponent.prototype.addNewUser = function (name, email) {
        var _this = this;
        var obj = {
            name: name,
            email: email
        };
        if (name != '' || email != '') {
            this.sub = this.restUtils
                .createItem('http://localhost:8000/user', obj)
                .subscribe(function (data) {
                _this.users = data;
            });
        }
        else {
            alert('name and email must not be empty');
        }
    };
    AddUserComponent.prototype.ngOnDestroy = function () {
        var _a;
        (_a = this.sub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    };
    __decorate([
        core_1.Output()
    ], AddUserComponent.prototype, "notify");
    AddUserComponent = __decorate([
        core_1.Component({
            selector: 'app-add-user',
            templateUrl: './add-user.component.html',
            styleUrls: ['./add-user.component.scss']
        })
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
