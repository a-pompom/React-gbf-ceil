import React, { useContext } from 'react'
import { CeilContext } from '../context/CeilContext'
import { useIncreaseLogic } from '../hooks/useIncreaseLogic'

import Button from './widgets/Button'

const MAX_JEWELRY = 90000
const TARGET = 'jewelry'

/**
 * 貯金の宝晶石部分
 */
const Jewelry = () => {

    const jewelryIncrease = [300, 1000, 3000, 10000]

    const ceilContext = useContext(CeilContext)
    const [amount, getIncrease] = useIncreaseLogic(TARGET, MAX_JEWELRY)

    /**
     * 宝晶石加算
     * 
     * @param {Number} increase 増分
     */
    const added = (increase) => {

        ceilContext.addSaving(getIncrease(increase), TARGET)
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