import Customer from '../model/customerModel';
import { v4 as uuidv4 } from 'uuid';


export const saveName = async (req, res) => {

    try {
        const { customerName } = req.body

        const name = customerName
        const customersSave = new Customer({ name, food: { foods: [] } });

        if (customersSave) {
            customersSave.save()
            res.send({ ok: true, customersSave })
        }
        else {
            res.send({ ok: false })
        }

    } catch (error) {
        console.error(error)
    }
}
export const getCustomers = async (req, res) => {

    try {
        const customers = await Customer.find();

        if (customers) {
            res.send({ ok: true, customers })
        }
    } catch (error) {
        console.error(error)
    }
}

export const deleteName = async (req, res) => {
    try {
        const { id } = req.body;
        const deletedCustomer = await Customer.deleteOne({ _id: id });
        if (deletedCustomer) {
            res.send({ ok: true, deletedCustomer })
        }
    } catch (error) {
        console.error(error)
    }
}

export const saveFood = async (req, res) => {
    try {


        const { inputCustomerFood, id } = req.body;

        const customer = await Customer.findById(id)

        console.log(customer.food.foods)
        const foods = customer.food.foods;
        foods.push({ item: inputCustomerFood, id: uuidv4() });
        await customer.save();

        const allCustomers = await Customer.find({});

        res.send({ allCustomers, ok: true });

    } catch (error) {
        console.error(error)
    }
}

export const deleteFood = async (req, res) => {
    try {
        const { id, customerId } = req.body;
        const customer = await Customer.findById(customerId)
        const foods = customer.food.foods.filter(item => item.id.toString() !== id.toString());

        customer.food = { foods }
        customer.save();

        const allCustomer = await Customer.find({});

        res.send({ ok: true, allCustomer });


    } catch (error) {
        console.error(error)
    }
}