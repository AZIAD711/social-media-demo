import { Gender } from "../enum/gender"
import { Role } from "../enum/role"
import { StatusAccount } from "../enum/status-account"

export interface IUser{
        firstName: string
        username: string
        email: string
        password: string
        address?: string
        phoneNumber: string
        age:number
        profileImage?: string
        confirmEmail: boolean
        gender: Gender
        role: Role
        statusAccount: StatusAccount
}