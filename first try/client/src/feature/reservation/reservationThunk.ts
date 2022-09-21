import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// now you build which function you want
export const getReservation = createAsyncThunk(
    // whice name I want the he will save
    "reservation/get-reservation",
    // now I start to build the function
    async () => {
        const { data } = await axios.get("/reservations/get-reservations")    // localhost:3000/reservation/....    
        const { reservation } = data;
        // console.log(reservation);
        //valitation
        if (!reservation) return new Error("missing reservation")
        //The action we return becomes the "fulfiled" action payload
        return reservation;
    }
);

export const addNewReservation = createAsyncThunk("reservation/addNewReservation", async ({ reservationName }: any) => {
    try {

        const { data }: any = await axios.post("/reservations/insert-reservation", { reservationName })

        const { newReservation } = data;
        return newReservation // he add it to our state 
    } catch (error) {
        console.log(error)
    }
})
export const removeReservation = createAsyncThunk("reservation/removeReservation", async ({ reservation }: any) => {
    try {
        console.log(reservation);
        
        const { data } = await axios.post("/reservations/remove-reservation", { reservation })

        //filter the data out 
    } catch (error) {
        console.log(error)
    }
})