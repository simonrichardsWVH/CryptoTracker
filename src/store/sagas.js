import { all, fork } from 'redux-saga/effects'
import tradingPairs from './trading_pairs/sagas'

const rootSaga = [
    tradingPairs
]

export default function*() {
    yield all(rootSaga.map(saga => fork(saga)))
}
