import React from 'react'

import Jewelry from './Jewelry'
import Ticket from './Ticket'
import Ticket10 from './Ticket10'

const Input = ({ceilSaving, isCeilReached, added}) => {

    const addedEmit = (increase, target) => {

        if (isCeilReached) {
            return
        }

        added(increase, target)
    }

    return (

        <div className="CeilInput">

            <Jewelry 
                amount={ceilSaving.jewelry}
                added={addedEmit}
            />

            <Ticket
                amount={ceilSaving.ticket}
                added={addedEmit}
            />

            <Ticket10
                amount={ceilSaving.ticket10}
                added={addedEmit}
            />

        </div>

    )
}

export default Input