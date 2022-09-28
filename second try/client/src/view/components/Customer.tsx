import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { deleteCustomerFromTheServer } from '../../fuetures/customer/customerThunk';
import CustomerCard from './CustomerCard';

interface CustomerName {
    name: string,
    id: string
}
const Customer = ({ name, id }: CustomerName) => {
    const dispatch = useDispatch<AppDispatch>();

    // const [flag, setFlag] = useState(true)
    // let check = document.getElementById("vMark");
    // function handleClick() {
    //     if (flag) {
    //         if (check) {
    //             check.style.display = "none";
    //             setFlag(!flag);
    //             console.log(flag);

    //             <CustomerCard flag = {flag}/>
    //         }
    //     }
    //     else {
    //         if (check) {
    //             console.log(flag);
    //             check.style.display = "inline";
    //             setFlag(!flag)
    //         }
    //     }
    // }
    function handleDeleteCustomer() {
        dispatch(deleteCustomerFromTheServer({ id }));
    }
    return (
        <div className='reservation--container__card'>
            <button className='deleteVReservationCard' onClick={handleDeleteCustomer} >X</button>
            {name}
        </div>

    )
}

export default Customer;