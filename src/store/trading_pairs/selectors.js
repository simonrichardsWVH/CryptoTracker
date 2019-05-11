export const initialState = {
    tradingPairList: [],
    errorMessage: '',
}

export const getTradingPairs = (state) => state.trades.tradingPairList ? state.trades.tradingPairList : initialState.tradingPairList
