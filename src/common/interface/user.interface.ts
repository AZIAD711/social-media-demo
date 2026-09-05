import { Gender } from "../enum/gender"
import { Role } from "../enum/role"
import { StatusAccount } from "../enum/status-account"

export interface IUser{
        firstName: string
        username: string
        // EMAIL
        email: string
        // PASSWORD
        password: string
        // ADDRESS 
        address?: string
        // PHONE NUMBER 
        phoneNumber: string
        // AGE 
        age:number
        // PROFILE IMAGE 
        profileImage?: string
        // CONFIRM EMAIL 
        confrimEmail: boolean
        // GENDER
        gender: Gender
        // ROLE 
        role: Role
        // STATUS ACCOUNT 
        statusAccount: StatusAccount
}