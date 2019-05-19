import { GET_FAVORITES_LIST, CRYPTO_GET_LIST, CRYPTO_CLEAR_LIST } from './constants'

export function getCryptoList(params) {
    return {  type: CRYPTO_GET_LIST, params }
}
export function getFavourites(symbols) {
    return { type: GET_FAVORITES_LIST, symbols }
}
export function clearCryptoList() {
    return { type: CRYPTO_CLEAR_LIST }
}