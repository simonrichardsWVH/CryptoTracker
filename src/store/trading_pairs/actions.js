import { GET_FAVOURITE_PAIRS_LIST, GET_TRADING_PAIRS_LIST } from './constants'

export function getTradingPairs() {
    return {  type: GET_TRADING_PAIRS_LIST }
}
export function getFavouritePairs(symbols) {
    return { type: GET_FAVOURITE_PAIRS_LIST, symbols }
}
