import mongoose from "mongoose"

export const databaseConnection = async () => {
    const databaseUrl = process.env.DATABASE_URL as string
    try {
        await mongoose.connect(databaseUrl, {
            maxPoolSize: process.env.MAX_POOL_SIZE as unknown as number,
            serverSelectionTimeoutMS: process.env.SERVER_TIME_OUT as unknown as number
        })
        console.log("✅ DATABASE IS CONNECTED WITH MONGOOSE ")
    } catch (databaseError) {
        console.log("❌ ERROR IN DATABASE CONNECTION : ", databaseError)
    }
}