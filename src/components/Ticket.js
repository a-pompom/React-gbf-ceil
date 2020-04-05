import React, { useContext } from 'react'
import { CeilContext } from '../context/CeilContext'
import { useIncreaseLogic } from '../hooks/useIncreaseLogic'

import Button from './widgets/Button'

const MAX_TICKET = 300
const TARGET = 'ticket'

/**
 * 貯金の単発チケット部分
 */
const Ticket = () => {

    const ticketIncrease = [1, 5, 10, 50]

    const ceilContext = useContext(CeilContext)
    const [amount, getIncrease] = useIncreaseLogic(TARGET, MAX_TICKET)

    /**
     * チケット加算
     * 
     * @param {Number} increase 増分
     */
    const added = (increase) => {

        ceilContext.addSaving(getIncrease(increase), TARGET)
    }

    // 加算ボタン
    const ticketButtons =  (

        <React.Fragment>

            {ticketIncrease.map((increase) => {

                    return <Button 
                                key={increase}
                                increase={increase}
                                buttonClassName='button--ticket'
                                clicked={added}
                            />
                    
                })}

        </React.Fragment>
    )

    return (

            <div className="CalcRow">

                <img src={`${process.env.PUBLIC_URL}/1.png`} className="CalcRow__image" alt="単発チケ" />
                <h2 className="CalcRow__count">{amount}枚</h2>

                {ticketButtons}

            </div>
    )
}

export default Ticket