import { GET_FAVORITES_LIST, GET_CRYPTO_LIST, CLEAR_CRYPTO_LIST } from './constants'

export function getCryptoList(params) {
    return {  type: GET_CRYPTO_LIST, params }
}
export function getFavourites(symbols) {
    return { type: GET_FAVORITES_LIST, symbols }
}
export function clearCryptoList() {
    return { type: CLEAR_CRYPTO_LIST }
}