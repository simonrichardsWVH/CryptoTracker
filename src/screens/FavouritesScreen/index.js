import React from 'react'
import actions from 'store/actions'
import { connect } from 'react-redux'

class FavouritesScreen extends React.Component {
    componentDidMount() {
        this.props.updateStackTotal(1)
    }

    componentWillUnmount() {
        this.props.updateStackTotal(-1)
    }

    render() {
        return null
    }
}

const mapDispatchToProps = dispatch => ({
    updateStackTotal: (difference) => dispatch(actions.stackActions.updateStackTotal(difference)),
})

export default connect(
    null,
    mapDispatchToProps,
)(FavouritesScreen)
