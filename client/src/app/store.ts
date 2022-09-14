import {configureStore} from "@reduxjs/toolkit";
 import reservationReducer from "../feature/reservation/reservationSlice";
 import customersReducer from "../feature/customer/customersSlice";
// import customer
export const store = configureStore({
    reducer:{
        reservation : reservationReducer,
        customer: customersReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;