import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { deleteFoodFromCustomer, saveFood } from '../../fuetures/customer/customerThunk';
import CardFood from './CardFood';
interface CustomerCardProp {
    // name: string,
    // food: {
    //     foods: string[]
    //     id: string,
    // }

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
    // const [displayFoodCard, setDisplayFoodCard] = useState('none');
    // const [isOpen, SetIsOpen] = useState(false);
    // const [modalFood , setModalFood] = useState('none');
    useEffect(() => {
        // getFood();
    }, [])
    // useEffect(() => {
    //     let check = document.getElementById('cardFood');
    //     if (displayFoodCard) {
    //         if (check) {
    //             check.style.display = "none";
    //         }
    //     }
    //     else {
    //         if (check) {
    //             check.style.display = "inline";
    //         }
    //     }
    // }, [displayFoodCard])
    function addFood() {
        dispatch(saveFood({ inputCustomerFood, id: customer._id }));
    }

    async function handledeleteFood(id: string) {
        dispatch(deleteFoodFromCustomer({id , customerId:customer._id}))
    }

    return (
        <div className="customer--container__card">

            <p className='customer--container__card--name'>{customer.name}</p>
            <div className='customer--container__card--food'>
                <div>
                    <input type="text" value={inputCustomerFood} onChange={(e) => setInputCustomerFood(e.target.value)} />
                    <button onClick={addFood}>Add food </button>
                </div>
                {customer.food.foods.map((food: any) => {
                    return (
                        <div key={food.id} className='customer--container__card--food--foods'>

                            <p>{food.item}</p>
                            <button onClick={() => handledeleteFood(food.id)} >X</button>
                        </div>
                    )
                })}
            </div>

            {/* <button className='deleteFood' onClick={() => SetIsOpen(true)}>Addd food</button> */}
            {/* {isOpen && <CardFood SetIsOpen={SetIsOpen} />} */}

            {/* <button style={{setModalFood('none')}}>Add food</button> */}
            {/* <div id='cardFood'>yole</div> */}

            {/* <div id ='cardFood'>frf</div> */}
            {/* <button onClick={()=> {SetIsOpen(true)}}>Add food</button> */}
            {/* <button onClick={() => setDisplayFoodCard('inline')} >will work?</button>
            <div style={{ display: displayFoodCard }} id='cardFood'>yo no se </div> */}

        </div >
    )
}






export default CustomerCard