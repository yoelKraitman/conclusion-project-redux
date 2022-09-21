import Customer from '../model/customerModel';

export const saveName = async (req, res) => {

    try {
        const { customerName } = req.body

        const name = customerName
        const customersSave = new Customer({ name, food: { foods: [''], id: '' } });

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

        // to looking for all customers 

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
            res.send({ ok: true, deletedCustomer})
        }
    } catch (error) {
        console.error(error)
    }
}