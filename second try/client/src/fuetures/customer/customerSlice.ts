import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { deleteCustomerFromTheServer, deleteFoodFromCustomer, getCustomers, saveCustomer, saveFood } from "./customerThunk";

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
    name: "customer",
    initialState,
    reducers: {
      
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
            })
            .addCase(deleteCustomerFromTheServer.rejected, (state) => {
                state.status = Status.FAILED
            })

            .addCase(saveFood.pending, (state) => {
                state.status = Status.LOADING
            })
            .addCase(saveFood.fulfilled, (state, action: any) => {
                state.status = Status.IDEL

                state.value = action.payload;

            })
            .addCase(saveFood.rejected, (state) => {
                state.status = Status.FAILED
            })
            .addCase(deleteFoodFromCustomer.pending, (state) => {
                state.status = Status.LOADING
            })
            .addCase(deleteFoodFromCustomer.fulfilled, (state, action: any) => {
                state.status = Status.IDEL

                state.value = action.payload;

            })
            .addCase(deleteFoodFromCustomer.rejected, (state) => {
                state.status = Status.FAILED
            })
    }
})
export const customers = (state: RootState) => state.customers.value;
export default customersSlice.reducer; 