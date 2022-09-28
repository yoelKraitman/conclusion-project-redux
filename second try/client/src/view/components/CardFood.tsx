import React from 'react'

interface CardFoodProp {
    SetIsOpen: Function
}
const FOOD = {
    
    style: 'inline',
    position: 'relative',
    width: '100%',
    height: '60vh',
    // left: '20%',
    top: '-21vh',
    backgroundColor: 'red'
} as React.CSSProperties
const CardFood = (SetIsOpen: CardFoodProp) => {
    return (
        <>
            <div style={FOOD}>fr</div>
            <button className='deletedModalFood' onClick={() => SetIsOpen.SetIsOpen(false)}>deleted food</button>
        </>

    )
}

export default CardFood