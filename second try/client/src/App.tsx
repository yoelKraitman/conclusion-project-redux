// import './view/style/global.scss';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './app/store';
import Customer from './view/components/Customer';
import './view/style/global.scss';
import axios from 'axios';
import { getCustomers, saveCustomer } from './fuetures/customer/customerThunk';
import { customers } from './fuetures/customer/customerSlice';
import CustomerCard from './view/components/CustomerCard';
import CardFood from './view/components/CardFood';


function App() {

  // if we want to know the what we have in our store we can use the "useSeletor"

  const customers = useSelector((state: RootState) => state.customers.value)
  const [customerName, setCustomerName] = useState('');
  
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCustomers());
  }, []);
  // console.log('customers in useEffect ', customers);
  const addReservation = async () => {

    if (!customerName) return;

    // dispatch(addReserveState(customerName));
    dispatch(saveCustomer({ customerName }));
    setCustomerName('');

  }
  return (

    <div className='container'>

      <div className="reservation--container">
        <h3> Reservation </h3>
        <div>
          {customers.map((customer: any) => {
            return <Customer name={customer.name} id={customer._id} />
          })}
        </div>
        <div className='reservation--container__input'>
          <input type="text" name='input-reservation' value={customerName} onChange={(e) => {
            setCustomerName(e.target.value);
          }}
          />

          <button onClick={addReservation} name='button-reservation'>Add</button>
        </div>

      </div>
      <div className='customer--container '>
        <h2>Customers</h2>
        {customers.map((customer: any) => {
          return <CustomerCard customer = {customer} />
        })}
      </div>


    </div>
  );
}

export default App;
