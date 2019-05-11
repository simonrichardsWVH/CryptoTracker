import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import selectors from 'store/selectors'
import actions from 'store/actions'

class HomeScreen extends React.Component {
    componentDidMount() {
        this.props.getTradingPairs()
    }

    render() {
        if (this.props.tradingPairs.length === 0) return null
        return (
            <View>
                {this.props.tradingPairs.map(pair => {
                    return <Text>{pair}</Text>
                })}
            </View>
        )
    }
}

const mapStateToProps = state => ({
    tradingPairs: selectors.tradingSelectors.getTradingPairs(state),
})

const mapDispatchToProps = dispatch => ({
    getTradingPairs: () => dispatch(actions.tradingActions.getTradingPairs()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)
