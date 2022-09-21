import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { addNewReservation, getReservation, removeReservation } from "./reservationThunk";

export enum Status {
    IDEL = "idel",
    LOADING = "loading",
    FAILED = 'failed'
}

interface reservationState {
    value: string[],
    status: string

}
// interface foodType {
//    food:{
//     foods:string[]
//     id:string
//    },
//    name:string,
//    _id:string
// }

const initialState: reservationState = {
    value: [], // initial
    status: Status.IDEL
}

export const reservationsSlice = createSlice({
    name: "reservation",// we can call how we want
    initialState,
    reducers: {
        addName: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload);
        },
        removeName: (state, action: PayloadAction<number>) => {
            // we can remove it in two way 
            //1_ by _id 2_ by the index we can pass in the map() and after that remove it by splice() and that we gonna do 
            state.value.splice(action.payload, 1)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getReservation.pending, (state) => {
                state.status = Status.LOADING
            })
            .addCase(getReservation.fulfilled, (state, action: any) => {
                state.status = Status.IDEL

                state.value = action.payload;
            })
            .addCase(getReservation.rejected, (state) => {
                state.status = Status.FAILED
            })
            .addCase(addNewReservation.pending, (state) => {
                state.status = Status.LOADING
            })
            .addCase(addNewReservation.fulfilled, (state, action: any) => {

                state.value.push(action.payload);
                // = [...state.value, action.payload];
            })
            .addCase(addNewReservation.rejected, (state) => {
                state.status = Status.FAILED
            })
            .addCase(removeReservation.pending, (state) => {
                state.status = Status.LOADING
            })
            .addCase(removeReservation.fulfilled, (state, action: any) => {

                // something is messing here 

            })
            .addCase(removeReservation.rejected, (state) => {
                state.status = Status.FAILED
            })
    },

})
// const reservations = useSelector((state: RootState) => state.reservation.value)
//  const reservation = state => state.reservation.value;

export const { addName, removeName } = reservationsSlice.actions;
export default reservationsSlice.reducer; // we need to export the all slice