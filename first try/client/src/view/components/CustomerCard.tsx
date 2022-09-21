import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFoodToCustomer } from '../../feature/customer/customersSlice';
import { v4 as uuid } from "uuid";
import { AppDispatch, RootState } from '../../app/store';
import { getCustomers } from '../../feature/customer/customerThunk';
import { removeReservation } from '../../feature/reservation/reservationThunk';
import { removeName } from '../../feature/reservation/reservationSlice';


interface CustomerType {
    customerCard:string,
    food: string[]
    name: string,
    id: string
    index: number,
    reserve: any
}
const CustomerCard = ({customerCard,  id, food, name, index, reserve }: CustomerType) => {
    const dispatch = useDispatch<AppDispatch>();

    
    // useEffect(() => {
    //     dispatch(getCustomers())
    // }, [])

    // const id4 = uuid();
    const [customerFoodInput, setCustomerFoodInput] = useState("");
    // const reservation = reserve

    return (
        /*
        <form onSubmit={....}>
            <input>.....
            <button type="submit">send</button>
        </form>
        */
        <div className="customer-food-card-container"  style={{display:customerCard}}>
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {/* but is in the class */}
                    {/* {food.map((food) => { */}
                        {/* return <p>{food}</p>; */}
                    {/* })} */}
                </div>
                <div className="customer-food-input-container">
                    <input value={customerFoodInput} onChange={(e) => setCustomerFoodInput(e.target.value)} />
                    <button
                        onClick={() => {
                            dispatch(
                                addFoodToCustomer({
                                    id,
                                    food: customerFoodInput,
                                })
                            );
                            setCustomerFoodInput("");
                        }}
                    >
                        Add
                    </button>
                    <button key={index} onClick={() => {

                        dispatch(removeReservation({ reserve }))
                        dispatch(removeName(index))
                    }} className='nameButton' >X</button>


                </div>
            </div>
            <div>


            </div>
        </div >
    )
}

export default CustomerCard;