import React from 'react'

import Input from './components/Input'
import CeilResult from './components/CeilResult'

const app = () => (

    <React.Fragment>
        <header className="Header">
            <h1 className="Header__title">
                グラブル天井計算機
            </h1>
            <button className="Header__button button--reset">
                Reset
            </button>
        </header>

        <div className="Container">

            <div className="MainImage">
                <img src={`${process.env.PUBLIC_URL}/Crystal.png`} className="MainImage__crystal" alt="メイン画像-宝晶石" />
                <img src={`${process.env.PUBLIC_URL}/Djeeta.png`} className="MainImage__character" alt="メイン画像-ジータ" />
            </div>

            <div className="CalcArea">

                <Input />

                <CeilResult />

            </div>

        </div>

    </React.Fragment>

)

export default app