"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCredentials = exports.decodeToken = exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token_type_1 = require("../enum/token-type");
const role_1 = require("../enum/role");
// Generate Token
const generateToken = ({ payload, secretKey, options = {
    expiresIn: "1h",
    notBefore: 0,
    audience: [],
    issuer: "social-media-demo",
}, }) => {
    return jsonwebtoken_1.default.sign(payload, secretKey, options);
};
exports.generateToken = generateToken;
// Verify Token
const verifyToken = (token, secretKey) => {
    return jsonwebtoken_1.default.verify(token, secretKey);
};
exports.verifyToken = verifyToken;
// Decode Token
const decodeToken = (token) => {
    return jsonwebtoken_1.default.decode(token);
};
exports.decodeToken = decodeToken;
// Login Credentials
const loginCredentials = (role) => {
    switch (role) {
        case role_1.Role.USER:
            return {
                [token_type_1.TokenType.ACCESS]: process.env.USER_ACCESS_SECRET,
                [token_type_1.TokenType.REFRESH]: process.env.USER_REFRESH_SECRET,
            };
        case role_1.Role.ADMIN:
            return {
                [token_type_1.TokenType.ACCESS]: process.env.ADMIN_ACCESS_SECRET,
                [token_type_1.TokenType.REFRESH]: process.env.ADMIN_REFRESH_SECRET,
            };
        default:
            throw new Error("Invalid role");
    }
};
exports.loginCredentials = loginCredentials;
