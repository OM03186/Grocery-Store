import mongoose from "mongoose";

const storeSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})

const Store = mongoose.model("Store", storeSchema);

export default Store;