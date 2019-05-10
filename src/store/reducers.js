import { combineReducers } from "redux"
import * as trades from './trading_pairs/reducer'

export default combineReducers(
    trades
)

