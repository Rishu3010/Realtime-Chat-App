import mongoose from "mongoose";

export const connectToMongoDb = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`MongoDB is connected: ${response.connection.host}`);
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

