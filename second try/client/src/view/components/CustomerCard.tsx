
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { deleteFoodFromCustomer, saveFood } from '../../fuetures/customer/customerThunk';

interface CustomerCardProp {

    customer: {
        name: string,
        _id: string
        food: {
            foods: string[]
            id: string,
        }
    }
}
const CustomerCard = ({ customer }: CustomerCardProp) => {
    const [inputCustomerFood, setInputCustomerFood] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    function addFood() {
        dispatch(saveFood({ inputCustomerFood, id: customer._id }));
        setInputCustomerFood('');
    }

    async function handledeleteFood(id: string) {
        dispatch(deleteFoodFromCustomer({ id, customerId: customer._id }))
    }


    return (
        
        <div className="customer--container__card">

            <p className='customer--container__card--name'>{customer.name}</p>
            <div className='customer--container__card--food'>
                <div className='customer--container__card__input'>
                    <input type="text" value={inputCustomerFood} onChange={(e) => setInputCustomerFood(e.target.value)} placeholder='write which food do you want' />
                    <button onClick={addFood}>Add food </button>
                </div>
                {customer.food.foods.map((food: any) => {
                    return (
                        <div key={food.id} className='customer--container__card--food--foods'>

                            <p>{food.item}</p>
                            <button name='deleteFood' onClick={() => handledeleteFood(food.id)} >X</button>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}






export default CustomerCard