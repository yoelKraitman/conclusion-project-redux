import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    foods:[String],
    id:String
})
const customerSchema = new mongoose.Schema({
    name: String ,// it's need to be the same ( not name => reservationName)
    food:foodSchema
});


const Customer = mongoose.model("customers" , customerSchema);

export default Customer;