export const initialState = {
    cryptoList: [],
    errorMessage: '',
}

export const getCryptoList = (state) => state.cryptocurrencies && state.cryptocurrencies.cryptoList || initialState.cryptoList
