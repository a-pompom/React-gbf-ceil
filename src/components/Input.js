import React from 'react'

const input = (props) => (

    <div className="CeilInput">

        <div className="CalcRow">
            <img src={`${process.env.PUBLIC_URL}/Crystal.png`} className="CalcRow__image" alt="宝晶石" />
            <h2 className="CalcRow__count">100個</h2>

            <button className="CalcRow__button button--jewelry">+300</button>
            <button className="CalcRow__button button--jewelry">+1000</button>
            <button className="CalcRow__button button--jewelry">+3000</button>
            <button className="CalcRow__button button--jewelry">+10000</button>

        </div>

        <div className="CalcRow">
            <img src={`${process.env.PUBLIC_URL}/1.png`} className="CalcRow__image" alt="単発チケ" />
            <h2 className="CalcRow__count">10枚</h2>

            <button className="CalcRow__button button--ticket">+1</button>
            <button className="CalcRow__button button--ticket">+5</button>
            <button className="CalcRow__button button--ticket">+10</button>
            <button className="CalcRow__button button--ticket">+50</button>
        </div>
        <div className="CalcRow">
            <img src={`${process.env.PUBLIC_URL}/10.png`} className="CalcRow__image" alt="10連チケ" />
            <h2 className="CalcRow__count">1枚</h2>

            <button className="CalcRow__button button--10ticket">+1</button>
            <button className="CalcRow__button button--10ticket">+5</button>
            <button className="CalcRow__button button--10ticket">+10</button>
        </div>

    </div>

)

export default input