import { useContext } from 'react'
import { CeilContext } from '../context/CeilContext'

/**
 * 増分処理を行うためのロジック 
 * 
 * @param {String} target 増分を行う元[石・単発チケ・10連チケ]
 * @param {Number} MAX_AMOUNT 増分の最大値 最大値以上に加算すると計算結果が不恰好になるため、制御
 * 
 * @return {Array}
 *     @property {Number} amount 現在値
 *     @property {Function} getIncrease 増分を取得
 */
export const useIncreaseLogic = (target, MAX_AMOUNT) => {

    const ceilContext = useContext(CeilContext)

    // クリック元に応じて現在値を取得
    const amount = ceilContext.ceilSaving[target]

    /**
     * 天井に到達するか否かによって増分を制御し、計算結果を返す
     * 
     * @param {Number} increase 増分
     */
    const getIncrease = (increase) => {

        // 天井に到達していたらそれ以上加算する必要はない
        if (ceilContext.isCeilReached) {
            return 0
        }

        // 最大値に到達するまでの分だけを加算
        if ((amount + increase) > MAX_AMOUNT) {

            return MAX_AMOUNT - amount

        }

        return increase
    }

    return [amount, getIncrease]
}