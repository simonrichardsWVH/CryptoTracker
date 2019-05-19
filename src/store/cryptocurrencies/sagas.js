import { takeEvery, call, put } from 'redux-saga/effects'
import api from 'services/api'
import * as constants from 'values/constants'
import {
    CRYPTO_GET_LIST,
    GET_FAVORITES_LIST,
    CRYPTO_GET_LIST_SUCCESS,
    GET_FAVORITES_LIST_SUCCESS, CRYPTO_GET_LIST_LOADING, CRYPTO_LIST_END_REACHED, CRYPTO_GET_LIST_ERROR,
} from './constants'

let secureApi = {}
if (api) {
    secureApi = api.create()
}
secureApi.setApiKey()

function* getCryptoList({ offset, limit }) {
    yield put({ type: CRYPTO_GET_LIST_LOADING, data: true })
    console.log('offset and limit: ', offset, limit)
    try {
        return yield call(
            [secureApi, secureApi.get],
            `/v1/cryptocurrency/listings/latest?start=${offset}&limit=${limit}&convert=${constants.BASE_CURRENCY}`
        )
    } catch (error) {
        console.log('ERROR IN API CALL', error)
        yield put({ type: CRYPTO_GET_LIST_ERROR, data: error.message })
        return false
    }
}

function* getFavoritePairsList({ symbols }) {
    // symbols = 'BTC,ETH,XRP,BCH,EOS,LTC,XLM' (for example)
    try {
        return yield call(
            [secureApi, secureApi.get],
            `/v1/cryptocurrency/quotes/latest?symbol=${symbols}&convert=EUR`
        )
    } catch (error) {
        console.log('ERROR IN API CALL', error)
        return false
    }
}

function* getCryptoListFlow({ params }) {
    const results = yield call(getCryptoList, params)
    if (results) {
        const cryptoList = results.data
        if (cryptoList.length > 0) {
            yield put({ type: CRYPTO_GET_LIST_SUCCESS, data: cryptoList })
        } else {
            yield put({ type: CRYPTO_LIST_END_REACHED, data: true })
        }
    }
}

function* getFavoritePairsListFlow(action) {
    const results = yield call(getFavoritePairsList, action)
    if (results) {
        console.log('FAVOURITES LIST: ', data)
        yield put({ type: GET_FAVORITES_LIST_SUCCESS, results })
    }
}

export default function*() {
    yield takeEvery(CRYPTO_GET_LIST, getCryptoListFlow)
    yield takeEvery(GET_FAVORITES_LIST, getFavoritePairsListFlow)
}
