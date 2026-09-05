"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const databaseConnection = async () => {
    const databaseUrl = process.env.DATABASE_URL;
    try {
        await mongoose_1.default.connect(databaseUrl, {
            maxPoolSize: process.env.MAX_POOL_SIZE,
            serverSelectionTimeoutMS: process.env.SERVER_TIME_OUT
        });
        console.log("✅ DATABASE IS CONNECTED WITH MONGOOSE ");
    }
    catch (databaseError) {
        console.log("❌ ERROR IN DATABASE CONNECTION : ", databaseError);
    }
};
exports.databaseConnection = databaseConnection;
