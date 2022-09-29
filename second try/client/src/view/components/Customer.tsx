import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { deleteCustomerFromTheServer } from '../../fuetures/customer/customerThunk';

interface CustomerName {
    name: string,
    id: string
}
const Customer = ({ name, id }: CustomerName) => {
    const dispatch = useDispatch<AppDispatch>();

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