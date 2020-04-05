import React, { useState } from 'react'

import { CeilContext } from './context/CeilContext'

import CeilSaving from './model/CeilSaving'

import Input from './components/Input'
import CeilResult from './components/CeilResult'

const App = () => {

    // 天井貯金の状態
    const [ceilSaving, setCeilSaving] = useState(CeilSaving)
    // 天井に到達したか
    const [isCeilReached, setCeilReached] = useState(false)

    /**
     * 天井貯金を加算
     * 
     * @param {Number} increase 増分
     * @param {String} target 増加対象
     */
    const addSaving = (increase, target) => {

        const addedCeilSaving = {...ceilSaving}
        addedCeilSaving[target] += increase

        setCeilSaving(addedCeilSaving)
    }

    /**
     * 天井に到達
     */
    const reachedCeil = () => {
        setCeilReached(true)
    }

    /**
     * 初期化
     */
    const reset = () => {

        const emptySaving = {...CeilSaving}

        setCeilSaving(emptySaving)
        setCeilReached(false)
    }

    return (

        <React.Fragment>

            <CeilContext.Provider 
                value={{
                    ceilSaving,
                    isCeilReached,
                    addSaving,
                    reachedCeil
                }}
            >

                {/* ヘッダ部分 リセット機能を持つ */}
                <header className="Header">
                    <h1 className="Header__title">
                        グラブル天井計算機
                    </h1>
                    <button onClick={reset} className="Header__button button--reset">
                        Reset
                    </button>
                </header>

                <div className="Container">

                    {/* メイン画像 アイキャッチ用 */}
                    <div className="MainImage">
                        <img src={`${process.env.PUBLIC_URL}/Crystal.png`} className="MainImage__crystal" alt="メイン画像-宝晶石" />
                        <img src={`${process.env.PUBLIC_URL}/Djeeta.png`} className="MainImage__character" alt="メイン画像-ジータ" />
                    </div>

                    {/* 計算処理部分 */}
                    <div className="CalcArea">

                        <Input />

                        <CeilResult />

                    </div>

                </div>

            </CeilContext.Provider>
        </React.Fragment>

    )
}

export default App