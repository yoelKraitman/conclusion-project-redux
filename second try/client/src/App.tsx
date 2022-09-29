
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './app/store';
import Customer from './view/components/Customer';
import './view/style/global.scss';
import { getCustomers, saveCustomer } from './fuetures/customer/customerThunk';
import CustomerCard from './view/components/CustomerCard';



function App() {


  const customers = useSelector((state: RootState) => state.customers.value)
  const [customerName, setCustomerName] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCustomers());
  }, []);
  const addReservation = async () => {

    if (!customerName) return;

    dispatch(saveCustomer({ customerName }));
    setCustomerName('');

  }
  return (

    <div className='container'>

      <div className="reservation--container">
        <h3> Reservation </h3>
        <div className='reservation--container__scroll'>
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
          return <CustomerCard customer={customer} />
        })}
      </div>


    </div>
  );
}

export default App;
