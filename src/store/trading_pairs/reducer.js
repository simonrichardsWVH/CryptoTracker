import { initialState } from './selectors'
import { GET_TRADING_PAIRS_LIST } from "./constants"

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TRADING_PAIRS_LIST:
            return { tradeParList: action.data }
        default:
            return state
    }
}
