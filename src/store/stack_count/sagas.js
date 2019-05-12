import { takeEvery, put } from 'redux-saga/effects'
import { STACK_SET_TOTAL, STACK_UPDATE_TOTAL } from './constants'

function* updateStackTotal(action) {
    yield put({ type: STACK_SET_TOTAL, data: action.data })
}

export default function* () {
    yield takeEvery(STACK_UPDATE_TOTAL, updateStackTotal)
}