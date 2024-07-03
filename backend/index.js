import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import storeRoute from "../backend/route/store.route.js";
import connectDB from "./db.js";



const app = express();

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect ot mongodb

connectDB();
// defining routes
app.use("/store",storeRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})