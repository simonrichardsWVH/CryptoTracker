export const initialState = {
    tradingPairs: [],
    errorMessage: '',
}

export const getTradingPairs = (state) => state.tradingPairs ? state.tradingPairs : initialState.tradingPairs
