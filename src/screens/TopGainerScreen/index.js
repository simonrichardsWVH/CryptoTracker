import React from 'react'
import actions from 'store/actions'
import { connect } from 'react-redux'

class TopGainerScreen extends React.Component {
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return null
    }
}

const mapDispatchToProps = dispatch => ({
    //updateStackTotal: (difference) => dispatch(actions.stackActions.updateStackTotal(difference)),
})

export default connect(
    null,
    mapDispatchToProps,
)(TopGainerScreen)