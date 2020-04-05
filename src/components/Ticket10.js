import React from 'react'

import Button from './widgets/Button'

const Ticket10 = ({amount, added}) => {

    const MAX_TICKET = 30

    const ticketIncrease = [1, 5, 10]

    const ticketAdded = (increase) => {

        if (amount === MAX_TICKET) {
            return
        }

        if ((amount + increase) > MAX_TICKET) {

            increase = MAX_TICKET - amount
        }

        added(increase, 'ticket10')
    }

     const ticketButtons =  (

        <React.Fragment>
            {ticketIncrease.map((increase) => {

                    return <Button 
                                key={increase}
                                increase={increase}
                                buttonClassName='button--10ticket'
                                clicked={ticketAdded}
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