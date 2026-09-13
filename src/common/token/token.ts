import jwt from "jsonwebtoken";
import { TokenType } from "../enum/token-type";
import { Role } from "../enum/role";
import { GenerateTokenParams } from "../interface/token.interface";

// Generate Token
export const generateToken = ({
    payload,
    secretKey,
    options = {
        expiresIn: "1h",
        notBefore: 0,
        audience: [],
        issuer: "social-media-demo",
    },
}:GenerateTokenParams) => {
    return jwt.sign(payload, secretKey, options);
};

// Verify Token
export const verifyToken = (token:string, secretKey:string) => {
    return jwt.verify(token, secretKey);
};

// Decode Token
export const decodeToken = (token:string) => {
    return jwt.decode(token);
};

// Login Credentials
export const loginCredentials = (role:Role) => {
    switch (role) {
        case Role.USER:
            return {
                [TokenType.ACCESS]: process.env.USER_ACCESS_SECRET,
                [TokenType.REFRESH]: process.env.USER_REFRESH_SECRET,
            };

        case Role.ADMIN:
            return {
                [TokenType.ACCESS]: process.env.ADMIN_ACCESS_SECRET,
                [TokenType.REFRESH]: process.env.ADMIN_REFRESH_SECRET,
            };

        default:
            throw new Error("Invalid role");
    }
};