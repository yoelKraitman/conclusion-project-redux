import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCustomers = createAsyncThunk(
    "customer/get-customer",
    async () => {
        const { data } = await axios.get("/customer/get-customers")    // localhost:3000/reservation/....    

        const { customers } = data;

        return customers;
    }

);
export const saveCustomer = createAsyncThunk(
    "customer/save-customer",
    async ({ customerName }: any) => {
        const { data } = await axios.post('/customer/save-name', { customerName });    // localhost:3000/reservation/....    

        const { customersSave } = data;
        return customersSave;
    }

);
export const deleteCustomerFromTheServer = createAsyncThunk(
    "customer/delete-customer",
    async ({ id }: any) => {
        const { data } = await axios.post('/customer/delete-name', { id });    // localhost:3000/reservation/....    
        if (data.ok) {
            return id;
        }
    }
);
export const saveFood = createAsyncThunk(
    "customer/save-food",
    async ({ inputCustomerFood, id }: any) => {
        const { data } = await axios.post('/customer/save-food', { inputCustomerFood, id });    // localhost:3000/reservation/....    

        const { allCustomers, ok } = data;

        if (ok) {
            return allCustomers;
        }

    }

);

export const deleteFoodFromCustomer = createAsyncThunk(
    "customer/delete-food",
    async ({ id, customerId }: any) => {

        const { data } = await axios.delete('/customer/delete-food', { data: { id, customerId } })

        const { allCustomer, ok } = data;

        if (ok) {
            return allCustomer;
        }


    }

);

