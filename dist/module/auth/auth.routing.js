"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("./auth.controller");
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
userRouter.post("/signup", auth_controller_1.signupController);
userRouter.post("/login", auth_controller_1.loginController);
exports.default = userRouter;
