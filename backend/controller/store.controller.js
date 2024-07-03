import Store from "../model/store.model.js"

export const getStore=async(req,res)=>{
    try {
        const store=await Store.find();
        res.status(200).json(store);
    } catch (error) {
        console.log("Error",error);
        res.status(500).json(error);
    }
}