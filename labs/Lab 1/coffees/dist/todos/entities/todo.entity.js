"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.todoSchema = new mongoose_1.default.Schema({
    todaoName: String,
    duration: Number,
    isImportant: Boolean,
    user: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User' }],
});
//# sourceMappingURL=todo.entity.js.map