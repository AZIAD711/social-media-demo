import { Request , Response } from "express";
import authService from "./auth.service";

// SIGN UP 
export const signupController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const data = request.body;
        const result = await authService.signup(data);
        return response.status(201).json({ message: "User created successfully", user: result });
    }
    catch (error) {
        return response.status(500).json({ message: "Internal Server Error", error: error });
    }
};
export const loginController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const data = request.body;
        const result = await authService.login(data);
        return response.status(200).json({ message: "Login successful", ...result });
    }
    catch (error) {
        return response.status(500).json({ message: "Internal Server Error", error: error });
    }
};