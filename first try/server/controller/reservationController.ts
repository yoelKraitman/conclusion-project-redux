
import Reservation from "../model/reservationModel"
// import insertReservation from "../"

export async function getReservations(req, res) {
    try {
        const reservation = await Reservation.find({})

        if (!reservation) return;

        res.send({ ok: true, reservation })
    } catch (error) {
        console.log(error.error);
        res.send({ error: error.message })
    }
}
export async function insertReservation(req, res) {
    try {
        const reservationName = req.body;
        const newReservation = new Reservation(reservationName)

        await newReservation.save();
        // result and newReservation here is the same

        res.send({ ok: true, newReservation })
    } catch (error) {
        console.error(error.message);
        res.send({ error: error.message })
    }
}
export async function removeReservation(req, res) {
    try {
        const { reservation } = req.body;

        // console.log(reservation);
        
        const newReservationId = await Reservation.deleteOne({_id:reservation._id})
        
        

        // res.send({newReservationId})
    } catch (error) {
        console.log(error);
    }
}