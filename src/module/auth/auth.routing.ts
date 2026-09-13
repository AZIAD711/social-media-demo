import{signupController} from "./auth.controller"
import express from "express"
const userRouter = express.Router()
userRouter.post("/signup",signupController)
export default userRouter