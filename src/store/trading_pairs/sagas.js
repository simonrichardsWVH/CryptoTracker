import { takeEvery, call, put } from 'redux-saga/effects'
import api from 'services/api'
import Config from 'react-native-config'
import { GET_TRADING_PAIRS_LIST, GET_FAVOURITE_PAIRS_LIST, GET_TRADING_PAIRS_LIST_SUCCESS, GET_FAVOURITE_PAIRS_LIST_SUCCESS } from './constants'

let secureApi = {}
if(api) {
    secureApi = api.create()
}
secureApi.setApiKey()

function* getTradingPairsList() {
    console.log('Config: ', Config)
    try {
        return yield call(
            [secureApi, secureApi.get],
            '/v1/cryptocurrency/listings/latest?start=1&limit=50&convert=USD'
        )
    } catch (error) {
        console.log('ERROR IN API CALL', error)
        return false
    }
}

function* getFavouritePairsList({ symbols }) {
    const data = []
    for (let i = 0; i < symbols.length; i++) {
        const tradePair = yield client.dailyStats({ symbol: symbols[i] })
        data.push(tradePair)
    }
    return data
}

function* getTradingPairsListFlow() {
    const data = yield call(getTradingPairsList)
    if (data) {
        console.log('TRADING LIST: ', data)
        yield put({type: GET_TRADING_PAIRS_LIST_SUCCESS, data})
    }
}

function* getFavouritePairsListFlow(action) {
    const data = yield call(getFavouritePairsList, action)
    if (data) {
        console.log('FAVOURITES LIST: ', data)
        yield put({type: GET_FAVOURITE_PAIRS_LIST_SUCCESS, data})
    }
}

export default function* () {
    yield takeEvery(GET_TRADING_PAIRS_LIST, getTradingPairsListFlow)
    yield takeEvery(GET_FAVOURITE_PAIRS_LIST, getFavouritePairsListFlow)
}
