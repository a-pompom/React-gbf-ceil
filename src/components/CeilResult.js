import React, { useContext } from 'react'
import { CeilContext } from '../context/CeilContext'

const JEWELRY_RATE = {'ticket': 300, 'ticket10': 3000}
const TICKET_RATE = {'jewelry': 1/300, 'ticket10': 10}

const CEIL_JEWELRY = 90000
const CEIL_TICKET = 300

const CeilResult = () => {

    const ceilContext = useContext(CeilContext)
    const ceilSaving = ceilContext.ceilSaving

    const jewelryAmount =  ceilSaving.jewelry
    const ticketAmount =   ceilSaving.ticket
    const ticket10Amount = ceilSaving.ticket10

    const jewelrySum = jewelryAmount + (ticketAmount * JEWELRY_RATE['ticket']) + (ticket10Amount * JEWELRY_RATE['ticket10'])
    const ticketSum = Math.floor((jewelryAmount * TICKET_RATE['jewelry']) + ticketAmount + (ticket10Amount * TICKET_RATE['ticket10']))

    let progressRate = ((jewelrySum / CEIL_JEWELRY) * 100).toFixed(2)
    progressRate = progressRate >= 100 ? 100 : progressRate

    if (progressRate === 100) {
        ceilContext.reachedCeil()
    }

    return (

        <div className="CeilResult">
            <img src={`${process.env.PUBLIC_URL}/Lyria.png`}  className="CeilResult__image" alt="ルリア" />

            <div className="CeilResult__Rest">

                <div className="Rest__crystal">
                    <img src={`${process.env.PUBLIC_URL}/Crystal.png`}  width="100" alt="宝晶石" />
                    <h4>{jewelrySum}</h4>
                    <h4>&nbsp;/&nbsp;</h4>
                    <h4>{CEIL_JEWELRY}</h4>
                </div>

                <div className="Rest__ticket">
                    <img src={`${process.env.PUBLIC_URL}/1.png`}  width="100" alt="ガチャチケット" />
                    <h4>{ticketSum}</h4>
                    <h4>&nbsp;/&nbsp;</h4>
                    <h4>{CEIL_TICKET}</h4>
                </div>

                <div className="Rest__percentage">
                    <h4>{progressRate}%</h4>
                    <h4>&nbsp;/&nbsp;</h4>
                    <h4>100%</h4>
                </div>

            </div>
        </div>

    )
}

export default CeilResult