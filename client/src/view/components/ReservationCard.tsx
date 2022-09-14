import { useDispatch } from 'react-redux'
import { addCustomer } from '../../feature/customer/customersSlice'

import { removeName } from '../../feature/reservation/reservationSlice'
import { v4 as uuid } from "uuid";
import { removeReservation } from '../../feature/reservation/reservationThunk';
import { AppDispatch } from '../../app/store';
import { saveCustomer } from '../../feature/customer/customerThunk';


interface ReservationType {
    reserve: any // need to replace it
    _id?: string
    // name: string,
    index: number
}
//I need to call the function "Re.. and send him a index"


const ReservationCard = ({ reserve, index }: ReservationType) => {

    const dispatch = useDispatch<AppDispatch>();
    const id = uuid()
    // console.log('is reserve ' , reserve);
    const reservation = reserve
    const name = reservation.reservationName;
    const customer = { food: [], name, id }
    return (

        <div className='card-res'>
            <div onClick={() => {
                // want to push this element to the customerSlice before we deleted

                dispatch(addCustomer({ food: [], name, id }))
                dispatch(saveCustomer({ customer }))

            }} className='reservation-card-container'>
                {reserve.reservationName}
            </div>
            <div>
                <button onClick={() => {
                    dispatch(removeReservation({ reservation }))
                    dispatch(removeName(index))
                }} className='nameButton' >X</button>
            </div>

        </div>
    )
}

export default ReservationCard