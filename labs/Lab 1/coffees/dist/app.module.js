"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const coffees_controller_1 = require("./coffees/coffees.controller");
const coffees_service_1 = require("./coffees/coffees.service");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const todos_module_1 = require("./todos/todos.module");
const mongoose_1 = require("@nestjs/mongoose");
const new_users_module_1 = require("./new-users/new-users.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [todos_module_1.TodosModule, mongoose_1.MongooseModule.forRoot("mongodb://localhost:27017/"), new_users_module_1.NewUsersModule],
        controllers: [app_controller_1.AppController, coffees_controller_1.CoffeesController, users_controller_1.UsersController],
        providers: [app_service_1.AppService, coffees_service_1.CoffeesService, users_service_1.UsersService,],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map