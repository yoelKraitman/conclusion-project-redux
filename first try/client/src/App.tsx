import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReservationCard from './view/components/ReservationCard'
import CustomerCard from "./view/components/CustomerCard";

import { AppDispatch, RootState } from "./app/store";

// import "./App.css";
import "./view/style/App.css";
import { addNewReservation, getReservation } from "./feature/reservation/reservationThunk";
import { getCustomers } from "./feature/customer/customerThunk";


function App() {
  const [displayCustomerCard ,  setDisplayCustomerCard] = useState('non');
  const dispatch = useDispatch<AppDispatch>();
  const [reservationName, setReservationName] = useState('')
  const customers = useSelector((state: RootState) => state.customer.value)
  const reservations = useSelector((state: RootState) => state.reservation.value)

  useEffect(() => {
    
    dispatch(getReservation())
    dispatch(getCustomers())
  }, [])
  console.log(customers);

  async function handleAddName() {
    try {
      if (!reservationName) return;

      dispatch(addNewReservation({ reservationName }))
      setReservationName("");

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((reserve, index) => {
                return <ReservationCard setDisplayCustomerCard={setDisplayCustomerCard} reserve={reserve}
                  index={index}
                />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationName} onChange={(e) => {
              setReservationName(e.target.value)
            }} />
            <button onClick={handleAddName}>Add</button>
            {/* onclick I want with dispatch to puch the value from the input to the store/reservation */}
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((cust:any) => {
            reservations.map((reservation, index) => {
              return (
                <CustomerCard customerCard = {displayCustomerCard} food={cust.food} name={cust.name} id={cust.id} reserve = {reservation} index = {index}/> 
              )

            })
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
export default App;