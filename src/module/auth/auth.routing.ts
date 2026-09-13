import{loginController, signupController} from "./auth.controller"
import express from "express"
const userRouter = express.Router()
userRouter.post("/signup",signupController)
userRouter.post("/login",loginController)
export default userRouter