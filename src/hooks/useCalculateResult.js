import { useContext } from 'react'
import { CeilContext } from '../context/CeilContext'

const JEWELRY_RATE = {'ticket': 300, 'ticket10': 3000}
const TICKET_RATE = {'jewelry': 1/300, 'ticket10': 10}

const CEIL_JEWELRY = 90000
const CEIL_TICKET = 300

export const useCalculateResult = () => {

    const ceilContext = useContext(CeilContext)
    const ceilSaving = ceilContext.ceilSaving

    const jewelryAmount =  ceilSaving.jewelry
    const ticketAmount =   ceilSaving.ticket
    const ticket10Amount = ceilSaving.ticket10

    const getJewelrySum = () => {

        const ticketForJewelry = ticketAmount * JEWELRY_RATE['ticket']
        const ticket10ForJewelry = ticket10Amount * JEWELRY_RATE['ticket10']

        return jewelryAmount + ticketForJewelry + ticket10ForJewelry
    }

    const getTicketSum = () => {

        const jewelryForTicket = jewelryAmount * TICKET_RATE['jewelry']
        const ticket10ForSingleTicket = ticket10Amount * TICKET_RATE['ticket10']

        return Math.floor(jewelryForTicket + ticketAmount + ticket10ForSingleTicket)
    }

    const getProgressRate = () => {

        const progressCeil = getJewelrySum() / CEIL_JEWELRY
        const progressRate = (progressCeil * 100).toFixed(2)

        return progressRate >= 100 ? 100 : progressRate
    }

    return [CEIL_JEWELRY, CEIL_TICKET, getJewelrySum(), getTicketSum(), getProgressRate()]
}