import React, { useContext } from 'react'
import { CeilContext } from '../context/CeilContext'
import { useCalculateResult } from '../hooks/useCalculateResult'

const CeilResult = () => {

    const ceilContext = useContext(CeilContext)

    const [CEIL_JEWELRY, CEIL_TICKET, jewelrySum, ticketSum, progressRate] = useCalculateResult()

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