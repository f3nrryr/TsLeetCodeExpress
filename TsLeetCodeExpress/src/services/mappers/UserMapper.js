"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const User_1 = require("../dto/response/User");
const User_2 = require("../../repositories/dto/out/User");
const TaskMapper_1 = require("./TaskMapper");
class UserMapper {
    static toBLL(user) {
        var _a;
        const userSolvedTasks = (_a = user.solvedTasks) === null || _a === void 0 ? void 0 : _a.map(TaskMapper_1.TaskMapper.toBLL);
        return new User_1.User(user.id, user.login, user.email, user.isActive, user.createdAt, userSolvedTasks);
    }
    static toRepo(user) {
        const userSolvedTasks = user.solvedTasks.map(TaskMapper_1.TaskMapper.toRepo);
        return new User_2.User(user.id, user.login, user.email, "", user.isActive, user.createdAt, userSolvedTasks);
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=UserMapper.js.map