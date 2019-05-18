import { initialState } from './selectors'
import { CLEAR_CRYPTO_LIST, GET_CRYPTO_LIST_SUCCESS } from './constants'

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CRYPTO_LIST_SUCCESS:
            console.log('RESULTS IN REDUCER: ', [...state.cryptoList, ...action.data])
            return { ...state, cryptoList: [...state.cryptoList, ...action.data] }
        case CLEAR_CRYPTO_LIST:
            return { ...state, cryptoList: initialState.cryptoList }
        default:
            return state
    }
}
