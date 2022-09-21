import Customer from "../model/customerModel";

export async function getCustomers(req, res) {
    try {
        const customers = await Customer.find({})
        if (customers) {
            res.send({customers})
        }
    } catch (error) {
        console.log(error.message);
    }
}


export async function saveCustomer(req, res) {
    try {
        const customer = req.body;

        const customersSave = new Customer(customer)

        if(customersSave){

            customersSave.save()
            res.send({ok:true , customersSave})
        }

    } catch (error) {
        console.log(error.message);
    }
}