"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const gender_1 = require("../common/enum/gender");
const role_1 = require("../common/enum/role");
const status_account_1 = require("../common/enum/status-account");
const noData = "no Data Provided !";
// USER SCHMEA
const userSchema = new mongoose_1.Schema({
    // FIRST NAME 
    firstName: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 80,
        require: true
    },
    // LAST NAME 
    lastName: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 80,
        require: true
    },
    // USERNAME 
    username: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 80,
        require: true,
        unique: true
    },
    // EMAIL
    email: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    // PASSWORD
    password: {
        type: String,
        trim: true,
        minlength: 6,
        maxlength: 6,
        require: true,
        get() {
            return "******";
        }
    },
    // ADDRESS 
    address: {
        type: String,
        trim: true,
        default: noData
    },
    // PHONE NUMBER 
    phoneNumber: {
        type: String,
        minlength: 11,
        maxlength: 11,
        require: true
    },
    // AGE 
    age: {
        type: Number,
        min: 16,
        max: 120,
        default: 16
    },
    // PROFILE IMAGE 
    profileImage: {
        type: String,
        default: noData // null 
    },
    // CONFIRM EMAIL 
    confrimEmail: {
        type: Boolean,
        default: false
    },
    // GENDER
    gender: {
        type: String,
        enum: Object.values(gender_1.Gender),
        default: gender_1.Gender.MALE
    },
    // ROLE 
    role: {
        type: String,
        enum: Object.values(role_1.Role),
        default: role_1.Role.USER
    },
    // STATUS ACCOUNT 
    statusAccount: {
        type: String,
        enum: Object.values(status_account_1.StatusAccount),
        default: status_account_1.StatusAccount.ACTIVE,
    }
}, {
    timestamps: true, // CREATED AT && UPDATED AT ( AUTOMATIC ) 
    strict: true, // ADD RECORD 
    strictQuery: true, // FIND OR UPDATE 
    versionKey: "version", // version : 0 
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
    collection: "user_data"
});
// FULL NAME 
userSchema.virtual("fullName").get(function () {
    return `${this.firstName} + " " + ${this.lastName}`;
});
const userModel = (0, mongoose_1.model)("User", userSchema);
exports.default = userModel;
