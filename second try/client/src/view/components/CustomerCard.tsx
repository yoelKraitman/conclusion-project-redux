import React, { useState } from 'react'
interface CustomerCardProp {
    name: string,
    flag?:boolean,
    food: {
        foods: string[]
        id: string,
    }
}

const CustomerCard = ({ name, food , flag }: CustomerCardProp) => {

    

    return (
        <div className='customer--container'>
            <h2>Customers</h2>


            {/* <button onClick={handleClick}>  click on me </button> */}

            {flag ? <div className='customer--container__card'>
                <p className='customer--container__card--name'>{name}</p>
                <p className='customer--container__card--food'></p>
                <p className='customer--container__card--image__food'></p>
            </div> : <h4>Waiting for orders</h4>}

        </div>
    )
}






export default CustomerCard