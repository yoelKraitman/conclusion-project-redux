import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    reservationName: String // it's need to be the same ( not name => reservationName)
});


const Reservation = mongoose.model("reservation" , reservationSchema);

export default Reservation;