import { createContext } from 'react'

import CeilSaving from '../model/CeilSaving'

/**
 * アプリ用コンテキスト
 * @property {Object} ceilSaving 貯金
 * @property {Boolean} isCeilReached 天井に到達したか 天井以上に加算しないように制御するために利用
 * @property {Function} addSaving ボタンクリック時の増分に応じて貯金を増やす
 * @property {Function} reachedCeil 天井到達を発火
 */
export const CeilContext =  createContext({

    ceilSaving: CeilSaving,
    isCeilReached: false,

    addSaving: (increase, target) => null,
    reachedCeil: () => null
})