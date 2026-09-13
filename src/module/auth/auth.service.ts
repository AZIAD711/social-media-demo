import { HydratedDocument } from "mongoose";
import { IUser } from "../../common/interface/user.interface";
import userModel from "../../model/user.model";
import { LoginDto, LoginReturnDto } from "./auth.dto";
import { generateToken } from "../../common/token/token";
class AuthService {
    constructor() {}
    // SIGN UP 
    async signup(user:IUser):Promise<HydratedDocument<IUser>> {
        const findEmail = await userModel.findOne({email:user.email})
        if (findEmail) {
            throw new Error("User with this email already exists")
        }
        const newUser:HydratedDocument<IUser> = await userModel.create(user)
        return newUser
    }
    // LOGIN 
    async login(data:LoginDto):Promise<LoginReturnDto>{
    const findEmail = await userModel.findOne({email:data.email,password:data.password})
        if (!findEmail) {
            throw new Error("Invalid email or password !")
        }
        const accessToken = generateToken({
            payload:{id:findEmail._id, role:findEmail.role},
            secretKey: process.env.ACCESS_TOKEN_SECRET as string,
            options: {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRE as unknown as number,
            }
        })
        const refreshToken = generateToken({
            payload:{id:findEmail._id, role:findEmail.role},
            secretKey: process.env.REFRESH_TOKEN_SECRET as string,
            options: {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRE as unknown as number,
            }
        })

        return { accessToken, refreshToken } 
    }
}
export default new AuthService() // one copy of class 