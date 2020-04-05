import React from 'react'

import Button from './widgets/Button'

const Jewelry = ({amount, added}) => {

    const MAX_JEWELRY = 90000

    const jewelryIncrease = [300, 1000, 3000, 10000]

    const jewelryAdded = (increase) => {

        if ((amount + increase) > MAX_JEWELRY) {
            return
        }

        added(increase, 'jewelry')
    }

     const jewelryButtons =  (

        <React.Fragment>
            {jewelryIncrease.map((increase) => {

                    return <Button 
                                key={increase}
                                increase={increase}
                                buttonClassName='button--jewelry'
                                clicked={jewelryAdded}
                            />
                    
                })}

        </React.Fragment>
     )

    return (

            <div className="CalcRow">
                <img src={`${process.env.PUBLIC_URL}/Crystal.png`} className="CalcRow__image" alt="宝晶石" />
                <h2 className="CalcRow__count">{amount}個</h2>

                {jewelryButtons}

            </div>
    )
}

export default Jewelry