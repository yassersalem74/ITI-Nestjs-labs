"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNewUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_new_user_dto_1 = require("./create-new-user.dto");
class UpdateNewUserDto extends (0, mapped_types_1.PartialType)(create_new_user_dto_1.CreateNewUserDto) {
}
exports.UpdateNewUserDto = UpdateNewUserDto;
//# sourceMappingURL=update-new-user.dto.js.map