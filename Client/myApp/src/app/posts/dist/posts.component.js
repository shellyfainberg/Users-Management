"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsComponent = void 0;
var core_1 = require("@angular/core");
var PostsComponent = /** @class */ (function () {
    function PostsComponent(ar, restUtils) {
        this.ar = ar;
        this.restUtils = restUtils;
        this.userId = '';
        this.showAddPost = false;
        this.notify = new core_1.EventEmitter();
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    PostsComponent.prototype.getPosts = function () {
        var _this = this;
        this.sub = this.ar.params.subscribe(function (data) {
            _this.userId = data['id'];
            _this.sub2 = _this.restUtils
                .getData('http://localhost:8000/user/', _this.userId)
                .subscribe(function (userPosts) {
                _this.posts = userPosts['posts'];
            });
        });
    };
    PostsComponent.prototype.switchToAdd = function () {
        this.showAddPost = true;
        this.notify.emit(this.showAddPost);
    };
    PostsComponent.prototype.ngOnDestroy = function () {
        var _a, _b;
        (_a = this.sub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.sub2) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    };
    __decorate([
        core_1.Output()
    ], PostsComponent.prototype, "notify");
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'app-posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.scss']
        })
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
