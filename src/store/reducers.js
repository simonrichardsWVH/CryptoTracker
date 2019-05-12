import { combineReducers } from "redux"
import trades from './trading_pairs/reducer'
import stack from './stack_count/reducer'

export default combineReducers({
    trades,
    stack
})

