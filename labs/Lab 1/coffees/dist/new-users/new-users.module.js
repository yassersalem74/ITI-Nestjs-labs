"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewUsersModule = void 0;
const common_1 = require("@nestjs/common");
const new_users_service_1 = require("./new-users.service");
const new_users_controller_1 = require("./new-users.controller");
const mongoose_1 = require("@nestjs/mongoose");
const new_user_entity_1 = require("./entities/new-user.entity");
let NewUsersModule = class NewUsersModule {
};
exports.NewUsersModule = NewUsersModule;
exports.NewUsersModule = NewUsersModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "Todo", schema: new_user_entity_1.UserSchema }])],
        controllers: [new_users_controller_1.NewUsersController],
        providers: [new_users_service_1.NewUsersService],
    })
], NewUsersModule);
//# sourceMappingURL=new-users.module.js.map