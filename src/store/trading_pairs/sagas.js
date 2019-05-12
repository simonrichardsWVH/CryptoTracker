import { takeEvery, call, put } from 'redux-saga/effects'
import Binance from 'binance-api-react-native'
import { GET_TRADING_PAIRS_LIST, GET_FAVOURITE_PAIRS_LIST, GET_TRADING_PAIRS_LIST_SUCCESS, GET_FAVOURITE_PAIRS_LIST_SUCCESS } from './constants'

const client = Binance()

function* getTradingPairsList() {
    return yield client.dailyStats()
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
        console.log('FAVOURITES LIST: ', data)
        yield put({type: GET_TRADING_PAIRS_LIST_SUCCESS, data})
    }
}

function* getFavouritePairsListFlow(action) {
    const data = yield call(getFavouritePairsList, action)
    if (data) {
        console.log('TRADING LIST: ', data)
        yield put({type: GET_FAVOURITE_PAIRS_LIST_SUCCESS, data})
    }
}

export default function* () {
    yield takeEvery(GET_TRADING_PAIRS_LIST, getTradingPairsListFlow)
    yield takeEvery(GET_FAVOURITE_PAIRS_LIST, getFavouritePairsListFlow)
}
