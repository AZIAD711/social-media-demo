import jwt from "jsonwebtoken";
// 
export interface GenerateTokenParams {
    payload: string | object | Buffer,
    secretKey: string,
    options: jwt.SignOptions
}