import React, { useContext } from 'react'
import { CeilContext } from '../context/CeilContext'

import Button from './widgets/Button'

const MAX_TICKET = 30

const Ticket10 = () => {

    const ticketIncrease = [1, 5, 10]

    const ceilContext = useContext(CeilContext)

    const amount = ceilContext.ceilSaving.ticket10
    const isCeilReached = ceilContext.isCeilReached

    const added = (increase) => {

        if (isCeilReached) {
            return
        }

        if (amount === MAX_TICKET) {
            return
        }

        if ((amount + increase) > MAX_TICKET) {

            increase = MAX_TICKET - amount
        }

        ceilContext.addSaving(increase, 'ticket10')

    }

     const ticketButtons =  (

        <React.Fragment>
            {ticketIncrease.map((increase) => {

                    return <Button 
                                key={increase}
                                increase={increase}
                                buttonClassName='button--10ticket'
                                clicked={added}
                            />
                    
                })}

        </React.Fragment>
     )

    return (

            <div className="CalcRow">
                <img src={`${process.env.PUBLIC_URL}/10.png`} className="CalcRow__image" alt="10連チケ" />
                <h2 className="CalcRow__count">{amount}枚</h2>

                {ticketButtons}

            </div>
    )
}

export default Ticket10