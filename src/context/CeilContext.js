import { createContext } from 'react'

import CeilSaving from '../model/CeilSaving'

export const CeilContext =  createContext({

    ceilSaving: CeilSaving,
    isCeilReached: false,
    addSaving: (increase, target) => null,
    reachedCeil: () => null
})