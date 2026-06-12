import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect (process.env.MONGO_URI);
        console.log("Database Connected !");
    } catch (error) {
        console.error("Database Connection error !");
        process.exit(1); //exit with failure
    }
};