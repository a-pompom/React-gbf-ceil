import { useContext } from 'react'
import { CeilContext } from '../context/CeilContext'

// 石とチケットの変換レート
const JEWELRY_RATE = {'ticket': 300, 'ticket10': 3000}
const TICKET_RATE = {'jewelry': 1/300, 'ticket10': 10}

// 石・チケットの最大値
const CEIL_JEWELRY = 90000
const CEIL_TICKET = 300

/**
 * 計算結果を導出するロジック
 * 
 * @return {Array}
 *     [宝晶石の天井数, チケットの天井数, 石換算の合計値, チケット換算の合計値, 進行度]
 */
export const useCalculateResult = () => {

    const ceilContext = useContext(CeilContext)
    const ceilSaving = ceilContext.ceilSaving

    // 各貯金要素の数量
    const jewelryAmount =  ceilSaving.jewelry
    const ticketAmount =   ceilSaving.ticket
    const ticket10Amount = ceilSaving.ticket10

    /**
     * 石換算の集計値を取得
     * 
     * @return {Number} 宝晶石換算での合計量
     */
    const getJewelrySum = () => {

        const ticketForJewelry = ticketAmount * JEWELRY_RATE['ticket']
        const ticket10ForJewelry = ticket10Amount * JEWELRY_RATE['ticket10']

        return jewelryAmount + ticketForJewelry + ticket10ForJewelry
    }

    /**
     * チケット換算の集計値を取得
     * 
     * @return {Number} チケット換算での合計量
     */
    const getTicketSum = () => {

        const jewelryForTicket = jewelryAmount * TICKET_RATE['jewelry']
        const ticket10ForSingleTicket = ticket10Amount * TICKET_RATE['ticket10']

        return Math.floor(jewelryForTicket + ticketAmount + ticket10ForSingleTicket)
    }

    /**
     * 天井貯金の進行度を取得
     * 
     * @return {Number} パーセント形式の進行度
     */
    const getProgressRate = () => {

        // 少数第二位までを取得したパーセント形式
        const progressCeil = getJewelrySum() / CEIL_JEWELRY
        const progressRate = (progressCeil * 100).toFixed(2)

        // 100%以上は100%に丸める
        return progressRate >= 100 ? 100 : progressRate
    }

    return [CEIL_JEWELRY, CEIL_TICKET, getJewelrySum(), getTicketSum(), getProgressRate()]
}