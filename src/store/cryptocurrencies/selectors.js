export const initialState = {
    cryptoList: [],
    errorMessage: '',
    isLoading: false,
    cryptoListEndReached: false,
}

export const getCryptoList = state =>
    (state.cryptocurrencies && state.cryptocurrencies.cryptoList) || initialState.cryptoList
export const getErrorMessage = state =>
    (state.cryptocurrencies && state.cryptocurrencies.errorMessage) || initialState.errorMessage
export const isLoading = state =>
    (state.cryptocurrencies && state.cryptocurrencies.isLoading) || initialState.isLoading
export const cryptoListEndReached = state =>
    (state.cryptocurrencies && state.cryptocurrencies.cryptoListEndReached) || initialState.cryptoListEndReached
