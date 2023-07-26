"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddPostComponent = void 0;
var core_1 = require("@angular/core");
var AddPostComponent = /** @class */ (function () {
    function AddPostComponent(restUtils, ar) {
        this.restUtils = restUtils;
        this.ar = ar;
        this.showAddPost = false;
        this.userId = '';
        this.notify = new core_1.EventEmitter();
    }
    AddPostComponent.prototype.addPost = function (title, body) {
        var _this = this;
        if (title != '' || body != '') {
            var obj_1 = {
                title: title,
                body: body
            };
            this.sub = this.ar.params.subscribe(function (data) {
                _this.userId = data['id'];
                _this.sub2 = _this.restUtils
                    .createPost('http://localhost:8000/user', _this.userId, obj_1)
                    .subscribe(function (data) {
                    console.log(data);
                });
            });
            this.backToPosts();
        }
        else {
            alert('post title and body must not be empty');
        }
    };
    AddPostComponent.prototype.backToPosts = function () {
        this.showAddPost = false;
        this.notify.emit(this.showAddPost);
    };
    AddPostComponent.prototype.ngOnDestroy = function () {
        var _a, _b;
        (_a = this.sub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.sub2) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    };
    __decorate([
        core_1.Output()
    ], AddPostComponent.prototype, "notify");
    AddPostComponent = __decorate([
        core_1.Component({
            selector: 'app-add-post',
            templateUrl: './add-post.component.html',
            styleUrls: ['./add-post.component.scss']
        })
    ], AddPostComponent);
    return AddPostComponent;
}());
exports.AddPostComponent = AddPostComponent;
