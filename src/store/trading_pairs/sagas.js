import {takeEvery, call, put} from 'redux-saga/effects'
import {GET_TRADING_PAIRS_LIST, GET_TRADING_PAIRS_SUCCESS} from "./constants"

function* getTradingPairs () {
    return ['item1', 'item2', 'item3']
}

function* getTradingPairsFlow () {
    const pairs = yield call(getTradingPairs)
    if (pairs) {
        yield put({type: GET_TRADING_PAIRS_SUCCESS, data: pairs})
    }
}

export default function* () {
    yield takeEvery(GET_TRADING_PAIRS_LIST, getTradingPairsFlow)
}
