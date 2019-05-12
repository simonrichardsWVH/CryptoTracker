import { STACK_UPDATE_TOTAL } from './constants'

export function updateStackTotal(difference) {
    return { type: STACK_UPDATE_TOTAL, data: difference }
}