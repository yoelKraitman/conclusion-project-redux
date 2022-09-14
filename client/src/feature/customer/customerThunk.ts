import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface CustomerType {
    food: string[],
    name: string,
   _id: string
}
export const getCustomers = createAsyncThunk(
    // whice name I want the he will save
    "customer/get-customer",
    // now I start to build the function
    async () => {
        const { data } = await axios.get("/customer/get-customers")    // localhost:3000/reservation/....    

        const {customers} = data;
        
        return customers;
    }
);
export const saveCustomer = createAsyncThunk(
    // whice name I want the he will save
    "customer/save-customer",
    // now I start to build the function
    async ({ customer }: any) => {
        // console.log(customer);


        const { data } = await axios.post("/customer/save-customer", customer)    // localhost:3000/reservation/....    

        // console.log(data);
    }
);