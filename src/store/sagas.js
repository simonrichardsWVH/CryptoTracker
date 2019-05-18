import { all, fork } from 'redux-saga/effects'
import tradingPairs from './cryptocurrencies/sagas'
import stack from './stack_count/sagas'

const rootSaga = [
    tradingPairs,
    stack
]

export default function*() {
    yield all(rootSaga.map(saga => fork(saga)))
}
