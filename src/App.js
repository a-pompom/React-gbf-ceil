import React, { useState } from 'react'

import CeilSaving from './model/CeilSaving'

import Input from './components/Input'
import CeilResult from './components/CeilResult'

const App = () => {

    const [ceilSaving, setCeilSaving] = useState(CeilSaving)
    const [isCeilReached, setCeilReached] = useState(false)

    const addSaving = (increase, target) => {

        const ceilSavingMod = {...ceilSaving}
        ceilSavingMod[target] += increase

        setCeilSaving(ceilSavingMod)
    }

    const reachedCeil = () => {
        setCeilReached(true)
    }

    return (

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

                    <Input 
                        ceilSaving={ceilSaving}
                        isCeilReached={isCeilReached}
                        added={addSaving}
                    />

                    <CeilResult 
                        ceilSaving={ceilSaving}
                        ceilReached={reachedCeil}
                    />

                </div>

            </div>

        </React.Fragment>

    )


}

export default App