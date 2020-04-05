import React from 'react'

const ceilResult = (props) => (

    <div className="CeilResult">
        <img src={`${process.env.PUBLIC_URL}/Lyria.png`}  className="CeilResult__image" alt="ルリア" />

        <div className="CeilResult__Rest">
            <div className="Rest__crystal">
                <img src={`${process.env.PUBLIC_URL}/Crystal.png`}  width="100" alt="宝晶石" />
                <h4>900</h4>
                <h4>&nbsp;/&nbsp;</h4>
                <h4>90000</h4>
            </div>
            <div className="Rest__ticket">
                <img src={`${process.env.PUBLIC_URL}/1.png`}  width="100" alt="ガチャチケット" />
                <h4>10</h4>
                <h4>&nbsp;/&nbsp;</h4>
                <h4>300</h4>
            </div>
            <div className="Rest__percentage">
                <h4>10%</h4>
                <h4>&nbsp;/&nbsp;</h4>
                <h4>100%</h4>
            </div>
        </div>
    </div>
)

export default ceilResult