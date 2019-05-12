import React from 'react'
import actions from 'store/actions'
import { connect } from 'react-redux'

class FavouritesScreen extends React.Component {
    componentDidMount() {
        this.props.getFavourites(['ETHBTC', 'LTCBTC', 'BNBBTC', 'NEOBTC'])
    }

    componentWillUnmount() {
        this.props.updateStackTotal(-1)
    }

    render() {
        return null
    }
}

const mapDispatchToProps = dispatch => ({
    getFavourites: (favourites) => dispatch(actions.tradingActions.getFavouritePairs(favourites)),
})

export default connect(
    null,
    mapDispatchToProps,
)(FavouritesScreen)
