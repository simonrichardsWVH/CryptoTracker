import { STACK_SET_TOTAL } from './constants'
import { initialState } from './selectors'

export default (state = initialState, action) => {
    switch (action.type) {
        case STACK_SET_TOTAL:
            console.log('STACK TOTAL: ', state.stackTotal + action.data)
            return { stackTotal: state.stackTotal + action.data }
        default:
            return state

    }
}