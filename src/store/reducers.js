import { combineReducers } from "redux"
import cryptocurrencies from './cryptocurrencies/reducer'
import stack from './stack_count/reducer'

export default combineReducers({
    cryptocurrencies,
    stack
})

