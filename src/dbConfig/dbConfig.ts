import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected..")
        })

        connection.on('error', () => {
            console.log("MongoDB connection error")
            process.exit();
        })
    } catch (err) {
        console.log("something went wrong");
        console.log(err);
    }
}