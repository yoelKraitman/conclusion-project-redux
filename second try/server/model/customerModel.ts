import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    foods: [
        {
            item: {
                type: String
            },
            id: {
                type: String
            }
        }
    ],
})
const customerSchema = new mongoose.Schema({
    name: String,
    food: foodSchema
});

const Customer = mongoose.model("customers", customerSchema);

export default Customer;