import React from 'react'
import { connect } from 'react-redux'
import ActionIconFavorite from './ActionIconFavorite'
import actions from 'store/actions'
import selectors from 'store/selectors'

const ActionIconFavoriteContainer = props => <ActionIconFavorite {...props} />

const mapStateToProps = state => ({
    favoritesList: [{id: 1}, {id: 52}, {id: 2}], //selectors.cryptoSelectors.getCryptoList(state),
})

const mapDispatchToProps = dispatch => ({
    toggleFavorite: params => {}, //dispatch(actions.cryptoActions.getCryptoList(params)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionIconFavoriteContainer)