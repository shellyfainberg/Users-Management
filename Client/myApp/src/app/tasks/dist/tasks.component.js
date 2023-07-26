"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TasksComponent = void 0;
var core_1 = require("@angular/core");
var TasksComponent = /** @class */ (function () {
    function TasksComponent(ar, restUtils) {
        this.ar = ar;
        this.restUtils = restUtils;
        this.userId = '';
        this.tasks = [];
        this.selectedTask = {};
        this.showAddTask = false;
        this.notify = new core_1.EventEmitter();
    }
    TasksComponent.prototype.switchToAdd = function () {
        this.showAddTask = true;
        this.notify.emit(this.showAddTask);
    };
    TasksComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    TasksComponent.prototype.getTasks = function () {
        var _this = this;
        this.sub = this.ar.params.subscribe(function (data) {
            _this.userId = data['id'];
            _this.sub2 = _this.restUtils
                .getData('http://localhost:8000/user/', _this.userId)
                .subscribe(function (userTasks) {
                _this.tasks = userTasks['tasks'];
            });
        });
    };
    TasksComponent.prototype.markCompleted = function (taskId) {
        var _this = this;
        this.sub3 = this.ar.params.subscribe(function (data) {
            var obj = {
                completed: true
            };
            _this.userId = data['id'];
            _this.sub4 = _this.restUtils
                .completedData('http://localhost:8000/user/', _this.userId, taskId, obj)
                .subscribe(function (userTasks) {
                console.log('userTasks', userTasks);
            });
        });
    };
    TasksComponent.prototype.ngOnDestroy = function () {
        var _a, _b, _c, _d;
        (_a = this.sub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.sub2) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.sub3) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        (_d = this.sub4) === null || _d === void 0 ? void 0 : _d.unsubscribe();
    };
    __decorate([
        core_1.Output()
    ], TasksComponent.prototype, "notify");
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'app-tasks',
            templateUrl: './tasks.component.html',
            styleUrls: ['./tasks.component.scss']
        })
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
