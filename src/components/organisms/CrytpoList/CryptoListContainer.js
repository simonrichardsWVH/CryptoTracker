import React from 'react'
import { connect } from 'react-redux'
import CryptoList from './CryptoList'
import actions from 'store/actions'
import selectors from 'store/selectors'

const CryptoListContainer = props => <CryptoList {...props} />

const mapStateToProps = state => ({
    cryptoList: selectors.cryptoSelectors.getCryptoList(state),
    isLoading: selectors.cryptoSelectors.isLoading(state),
    errorMessage: selectors.cryptoSelectors.getErrorMessage(state),
    cryptoListEndReached: selectors.cryptoSelectors.cryptoListEndReached(state),
})

const mapDispatchToProps = dispatch => ({
    getCryptoList: data => dispatch(actions.cryptoActions.getCryptoList(data)),
    clearCryptoList: () =>
        dispatch(actions.cryptoActions.clearCryptoList()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CryptoListContainer)
