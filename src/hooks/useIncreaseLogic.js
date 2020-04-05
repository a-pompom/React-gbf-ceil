import { useContext } from 'react'
import { CeilContext } from '../context/CeilContext'

export const useIncreaseLogic = (target, MAX_AMOUNT) => {

    const ceilContext = useContext(CeilContext)

    const amount = ceilContext.ceilSaving[target]

    const getIncrease = (increase) => {

        if (ceilContext.isCeilReached) {
            return 0
        }

        if ((amount + increase) > MAX_AMOUNT) {

            return MAX_AMOUNT - amount

        }

        return increase
    }

    return [amount, getIncrease]

}