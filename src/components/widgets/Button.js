import React from 'react'

const Button = ({increase, buttonClassName, clicked}) => {

    const buttonClicked = () => {

        clicked(increase)
    }
    return (

        <button 
            onClick={buttonClicked}
            className={`CalcRow__button ${buttonClassName}`}
        >
            +{increase}
        </button>
    )

}

export default Button