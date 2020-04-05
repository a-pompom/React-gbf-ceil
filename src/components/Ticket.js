import React from 'react'

import Button from './widgets/Button'

const Ticket = ({amount, added}) => {

    const MAX_TICKET = 300

    const ticketIncrease = [1, 5, 10, 50]

    const ticketAdded = (increase) => {

        if (amount === MAX_TICKET) {
            return
        }

        if ((amount + increase) > MAX_TICKET) {

            increase = MAX_TICKET - amount
        }

        added(increase, 'ticket')
    }

     const ticketButtons =  (

        <React.Fragment>
            {ticketIncrease.map((increase) => {

                    return <Button 
                                key={increase}
                                increase={increase}
                                buttonClassName='button--ticket'
                                clicked={ticketAdded}
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