import express from 'express'
const router = express.Router();


import {getReservations , insertReservation , removeReservation} from '../controller/reservationController'  

router
.get("/get-reservations", getReservations)
.post("/insert-reservation", insertReservation)
.post("/remove-reservation" , removeReservation)

export default router;
