import { initialState } from './selectors'
import { CRYPTO_CLEAR_LIST, CRYPTO_GET_LIST_SUCCESS, CRYPTO_GET_LIST_LOADING, CRYPTO_GET_LIST_ERROR, CRYPTO_LIST_END_REACHED } from './constants'

export default (state = initialState, action) => {
    switch (action.type) {
        case CRYPTO_GET_LIST_SUCCESS:
            return { ...state, cryptoList: [...state.cryptoList, ...action.data], isLoading: initialState.isLoading, errorMessage: initialState.errorMessage }
        case CRYPTO_GET_LIST_LOADING:
            return { ...state, isLoading: action.data, errorMessage: initialState.errorMessage }
        case CRYPTO_GET_LIST_ERROR:
            return { ...state, errorMessage: action.data, isLoading: initialState.isLoading}
        case CRYPTO_CLEAR_LIST:
            return { ...state, cryptoList: initialState.cryptoList }
        case CRYPTO_LIST_END_REACHED:
            return { ...state, cryptoListEndReached: action.data }
        default:
            return state
    }
}
