import { initialState } from './selectors'
import { GET_TRADING_PAIRS_SUCCESS } from "./constants"

export default (state = initialState, action) => {
    console.log('DATA REACHED REDUCER: ', action.type)
    switch (action.type) {
        case GET_TRADING_PAIRS_SUCCESS:
            return { tradingPairList: action.data }
        default:
            return state
    }
}
