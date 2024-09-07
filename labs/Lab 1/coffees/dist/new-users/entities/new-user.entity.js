"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.default.Schema({
    userName: String,
    age: Number,
    email: String,
    todos: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Todo' }],
});
//# sourceMappingURL=new-user.entity.js.map