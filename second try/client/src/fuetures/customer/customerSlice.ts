import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { deleteCustomerFromTheServer, getCustomers, saveCustomer } from "./customerThunk";

export enum Status {
    IDEL = "idel",
    LOADING = "loading",
    FAILED = 'failed'
}
export interface FoodType {
    food: {
        foods?: string[]
        id?: string
    },
    name: string,
    _id: string
}
export interface CustomerState {
    value: FoodType[]
    status: string
}
const initialState: CustomerState = {
    status: Status.IDEL,
    value: []
}
export const customersSlice = createSlice({
    name: "customer",// we can call how we want
    initialState,
    reducers: {
        AddCustomer(state, action: any){
                
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCustomers.pending, (state) => {
                state.status = Status.LOADING
            })
            .addCase(getCustomers.fulfilled, (state, action: any) => {
                state.status = Status.IDEL
                state.value = action.payload;
            })
            .addCase(getCustomers.rejected, (state) => {
                state.status = Status.FAILED
            })
            .addCase(saveCustomer.pending, (state) => {
                state.status = Status.LOADING
            })
            .addCase(saveCustomer.fulfilled, (state, action: any) => {
                state.status = Status.IDEL

                state.value = [...state.value, action.payload];

            })
            .addCase(saveCustomer.rejected, (state) => {
                state.status = Status.FAILED
            })

            .addCase(deleteCustomerFromTheServer.pending, (state) => {
                state.status = Status.LOADING
            })
            .addCase(deleteCustomerFromTheServer.fulfilled, (state, action: any) => {
                state.status = Status.IDEL
                state.value = state.value.filter((customer => customer._id != action.payload))
                // we're going to get the elements that we want to delete from the state 
            })
            .addCase(deleteCustomerFromTheServer.rejected, (state) => {
                state.status = Status.FAILED
            })

    }
})
export const customers = (state: RootState) => state.customers.value;
export const { AddCustomer } = customersSlice.actions;
export default customersSlice.reducer; // we need to export the all slice
