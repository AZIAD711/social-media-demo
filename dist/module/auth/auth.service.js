"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../../model/user.model"));
class AuthService {
    constructor() { }
    // SIGN UP 
    async signup(user) {
        const findEmail = await user_model_1.default.findOne({ email: user.email });
        if (findEmail) {
            throw new Error("User with this email already exists");
        }
        const newUser = await user_model_1.default.create(user);
        return newUser;
    }
}
exports.default = new AuthService(); // one copy of class 
