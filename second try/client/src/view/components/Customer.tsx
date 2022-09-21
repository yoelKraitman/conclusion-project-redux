import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { deleteCustomerFromTheServer } from '../../fuetures/customer/customerThunk';

interface CustomerName {
    name: string,
    id: string
}
const Customer = ({ name, id }: CustomerName) => {
    const dispatch = useDispatch<AppDispatch>();
    const [flag, setFlag] = useState(true)
    let check = document.getElementById("vMark");
    function handleClick() {
        if (flag) {
            if (check) {
                check.style.display = "inline";
                setFlag(!flag);
            }
        }
        else {
            if (check) {
                check.style.display = "none";
                setFlag(!flag)
            }
        }
    }
    function handleDeleteCustomer() {
        dispatch(deleteCustomerFromTheServer({ id }));
    }
    return (
        <div className='reservation--container__card'>
            <button className='addVReservationCard' id='vMark' onClick={handleClick}>V</button>
            <button className='deleteVReservationCard' onClick={handleDeleteCustomer} >X</button>
            {name}
        </div>

    )
}

export default Customer;