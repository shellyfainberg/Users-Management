"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var user_component_1 = require("./user/user.component");
var tasks_component_1 = require("./tasks/tasks.component");
var posts_component_1 = require("./posts/posts.component");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var input_1 = require("@angular/material/input");
var users_component_1 = require("./users/users.component");
var user_details_component_1 = require("./user-details/user-details.component");
var add_task_component_1 = require("./add-task/add-task.component");
var add_user_component_1 = require("./add-user/add-user.component");
var add_post_component_1 = require("./add-post/add-post.component");
var appRoutes = [
    {
        path: 'user/:id',
        component: user_details_component_1.UserDetailsComponent
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                users_component_1.UsersComponent,
                user_component_1.UserComponent,
                tasks_component_1.TasksComponent,
                posts_component_1.PostsComponent,
                user_details_component_1.UserDetailsComponent,
                add_task_component_1.AddTaskComponent,
                add_user_component_1.AddUserComponent,
                add_post_component_1.AddPostComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                button_1.MatButtonModule,
                input_1.MatInputModule,
                card_1.MatCardModule,
                router_1.RouterModule.forRoot(appRoutes),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
