"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddTaskComponent = void 0;
var core_1 = require("@angular/core");
var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(restUtils, ar) {
        this.restUtils = restUtils;
        this.ar = ar;
        this.showAddTask = false;
        this.userId = '';
        this.notify = new core_1.EventEmitter();
    }
    AddTaskComponent.prototype.backToTask = function () {
        this.showAddTask = false;
        this.notify.emit(this.showAddTask);
    };
    AddTaskComponent.prototype.addTask = function (title) {
        var _this = this;
        if (title != '') {
            var obj_1 = {
                title: title
            };
            this.sub = this.ar.params.subscribe(function (data) {
                _this.userId = data['id'];
                _this.sub2 = _this.restUtils
                    .createTask('http://localhost:8000/user', _this.userId, obj_1)
                    .subscribe(function (data) {
                    console.log(data);
                });
            });
            this.backToTask();
        }
        else {
            alert('task title must not be empty');
        }
    };
    AddTaskComponent.prototype.ngOnDestroy = function () {
        var _a, _b;
        (_a = this.sub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.sub2) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    };
    __decorate([
        core_1.Output()
    ], AddTaskComponent.prototype, "notify");
    AddTaskComponent = __decorate([
        core_1.Component({
            selector: 'app-add-task',
            templateUrl: './add-task.component.html',
            styleUrls: ['./add-task.component.scss']
        })
    ], AddTaskComponent);
    return AddTaskComponent;
}());
exports.AddTaskComponent = AddTaskComponent;
