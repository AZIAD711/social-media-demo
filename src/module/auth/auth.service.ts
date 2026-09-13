import { HydratedDocument } from "mongoose";
import { IUser } from "../../common/interface/user.interface";
import userModel from "../../model/user.model";
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
}
export default new AuthService() // one copy of class 