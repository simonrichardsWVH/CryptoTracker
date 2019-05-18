import { takeEvery, call, put } from 'redux-saga/effects'
import api from 'services/api'
import Config from 'react-native-config'
import {
    GET_CRYPTO_LIST,
    GET_FAVORITES_LIST,
    GET_CRYPTO_LIST_SUCCESS,
    GET_FAVORITES_LIST_SUCCESS,
} from './constants'

let secureApi = {}
if (api) {
    secureApi = api.create()
}
secureApi.setApiKey()

function* getCryptoList({ offset, limit }) {
    console.log('offset and limit: ', offset, limit)
    try {
        return yield call(
            [secureApi, secureApi.get],
            //'/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,XRP,BCH,EOS,LTC,XLM&convert=EUR'
            `/v1/cryptocurrency/listings/latest?start=${offset}&limit=${limit}&convert=EUR`
        )
    } catch (error) {
        console.log('ERROR IN API CALL', error)
        return false
    }
}

function* getFavoritePairsList({ symbols }) {
    const data = []
    for (let i = 0; i < symbols.length; i++) {
        //const tradePair = yield client.dailyStats({ symbol: symbols[i] })
        //data.push(tradePair)
    }
    return data
}

function* getCryptoListFlow({params}) {
    const results = yield call(getCryptoList, params)
    if (results) {
        console.log('RESULTS IN SAGE: ', results)
        yield put({ type: GET_CRYPTO_LIST_SUCCESS, data: results.data })
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
    yield takeEvery(GET_CRYPTO_LIST, getCryptoListFlow)
    yield takeEvery(GET_FAVORITES_LIST, getFavoritePairsListFlow)
}
