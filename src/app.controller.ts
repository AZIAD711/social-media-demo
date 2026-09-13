import express from "express"
import dotenv, { config } from "dotenv"
import { databaseConnection } from "./database/mongo.db"
import userRouter from "./module/auth/auth.routing.js";
export const app = () => {
    dotenv.config();
    databaseConnection()
    const router = express()
    router.use(express.json())
    router.use("/auth", userRouter)
    return router
}
export default app