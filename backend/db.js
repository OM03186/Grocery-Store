import mongoose from "mongoose";


const URI = process.env.MongoDBURI;
const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/grocerystore");
        console.log("connected to mongodb");
    } catch (error) {
        console.log("error: ", error);
        
    }
    }

    export default connectDB;