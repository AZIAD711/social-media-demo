"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../../model/user.model"));
const token_1 = require("../../common/token/token");
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
    // LOGIN 
    async login(data) {
        const findEmail = await user_model_1.default.findOne({ email: data.email, password: data.password });
        if (!findEmail) {
            throw new Error("Invalid email or password !");
        }
        const accessToken = (0, token_1.generateToken)({
            payload: { id: findEmail._id, role: findEmail.role },
            secretKey: process.env.ACCESS_TOKEN_SECRET,
            options: {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
            }
        });
        const refreshToken = (0, token_1.generateToken)({
            payload: { id: findEmail._id, role: findEmail.role },
            secretKey: process.env.REFRESH_TOKEN_SECRET,
            options: {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
            }
        });
        return { accessToken, refreshToken };
    }
}
exports.default = new AuthService(); // one copy of class 
