import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCustomers } from "./customerThunk";

import { Status } from "../reservation/reservationSlice"

interface AddFoodToCustomerType {
    id: string
    food: string,
}
interface Customer {
    food: string[],
    name: string,
    id: string
}
interface CustomerState {
    value: Customer[],
    status: string
}
const initialState: CustomerState = {
    value: []// initial
    ,
    status: Status.IDEL
}

export const customersSlice = createSlice({
    name: "customer",// we can call how we want
    initialState,
    reducers: {
        addCustomer: (state: any, action: PayloadAction<Customer>) => {
            state.value.push(action.payload)
        },
        addFoodToCustomer: (state: any, action: PayloadAction<AddFoodToCustomerType>) => {

            state.value.forEach((customer: Customer) => {

                // we don't need return in forEach
                if (customer.id === action.payload.id) {
                    customer.food.push(action.payload.food);
                }
            })
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
    
        }
})
// export const {} = customerSlice.actions;
export const { addCustomer, addFoodToCustomer } = customersSlice.actions;
// export default customerSlice.reducer; // we need to export the all slice
export default customersSlice.reducer;