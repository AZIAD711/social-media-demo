"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.signupController = void 0;
const auth_service_1 = __importDefault(require("./auth.service"));
// SIGN UP 
const signupController = async (request, response) => {
    try {
        const data = request.body;
        const result = await auth_service_1.default.signup(data);
        return response.status(201).json({ message: "User created successfully", user: result });
    }
    catch (error) {
        return response.status(500).json({ message: "Internal Server Error", error: error });
    }
};
exports.signupController = signupController;
const loginController = async (request, response) => {
    try {
        const data = request.body;
        const result = await auth_service_1.default.login(data);
        return response.status(200).json({ message: "Login successful", ...result });
    }
    catch (error) {
        return response.status(500).json({ message: "Internal Server Error", error: error });
    }
};
exports.loginController = loginController;
