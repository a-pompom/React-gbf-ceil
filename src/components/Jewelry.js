import React, { useContext } from 'react'
import { CeilContext } from '../context/CeilContext'

import Button from './widgets/Button'

const MAX_JEWELRY = 90000

const Jewelry = () => {

    const ceilContext = useContext(CeilContext)

    const amount = ceilContext.ceilSaving.jewelry
    const isCeilReached = ceilContext.isCeilReached

    const jewelryIncrease = [300, 1000, 3000, 10000]

    const added = (increase) => {

        if (isCeilReached) {
            return
        }

        if ((amount + increase) > MAX_JEWELRY) {
            return
        }

        ceilContext.addSaving(increase, 'jewelry')
    }

     const jewelryButtons =  (

        <React.Fragment>
            {jewelryIncrease.map((increase) => {

                    return <Button 
                                key={increase}
                                increase={increase}
                                buttonClassName='button--jewelry'
                                clicked={added}
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