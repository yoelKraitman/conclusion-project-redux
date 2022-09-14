import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: String,
    food:Array<String>,
    id:String    
});


const Customer = mongoose.model("customer", customerSchema);

export default Customer;