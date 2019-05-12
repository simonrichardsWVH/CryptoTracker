export const initialState = {
    stackTotal: 0
}

export const getStackTotal = (state) => state.stack.stackTotal ? state.stack.stackTotal : initialState.stackTotal