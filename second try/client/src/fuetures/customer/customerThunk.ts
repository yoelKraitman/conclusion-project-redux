import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// interface CustomerType {
//     name: string,
//     food: string[],
//    _id: string
// }
export const getCustomers = createAsyncThunk(
    // whice name I want the he will save
    "customer/get-customer",
    // now I start to build the function
    async () => {
        const { data } = await axios.get("/customer/get-customers")    // localhost:3000/reservation/....    


        const { customers } = data;

        // console.log('customer ' , customers);

        return customers;
    }

);
export const saveCustomer = createAsyncThunk(
    // whice name I want the he will save
    "customer/save-customer",
    // now I start to build the function
    async ({ customerName }: any) => {
        const { data } = await axios.post('/customer/save-name', { customerName });    // localhost:3000/reservation/....    

        const { customersSave } = data;
        return customersSave;
    }

);
export const deleteCustomerFromTheServer = createAsyncThunk(
    // whice name I want the he will save
    "customer/delete-customer",
    // now I start to build the function
    async ({ id }: any) => {
        const { data } = await axios.post('/customer/delete-name', { id });    // localhost:3000/reservation/....    
        if (data.ok) {
            return id;
        }
    }
);

