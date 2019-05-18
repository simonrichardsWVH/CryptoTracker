import React from 'react'
import { FlatList, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { ApiConfig, List } from 'values/constants'

class CryptoList extends React.PureComponent {
    static propTypes = {
        getCryptoList: PropTypes.func,
        clearCryptoList: PropTypes.func,
        cryptoList: PropTypes.array,
        isLoading: PropTypes.bool,
        cryptoListEndReached: PropTypes.bool,
    }

    constructor(props) {
        super(props)
        this.state = {
            isRefreshing: false,
            offset: 1, //weird api
            limit: ApiConfig.LIMIT,
        }
    }

    componentDidMount() {
        const { getCryptoList } = this.props
        const { limit, offset } = this.state
        getCryptoList({ offset, limit })
    }

    componentDidUpdate(prevProps, prevState) {
        const { isLoading } = this.props
        if (prevProps.isLoading && !isLoading) {
            this.setState({ isRefreshing: false })
        }
    }

    handleRefresh = () => {
        const { clearCryptoList, getCryptoList } = this.props
        const { limit } = this.state
        clearCryptoList()
        this.setState({ isRefreshing: true, offset: 1 })
        getCryptoList({ offset: 1, limit })
    }

    handleLazyLoad = () => {
        const { getCryptoList } = this.props
        const { offset, limit } = this.state
        getCryptoList({
            offset: offset + limit,
            limit,
        })
        this.setState(prevState => ({
            isRefreshing: false,
            offset: prevState.offset + prevState.limit,
        }))
    }
    renderItem = ({item}) => <Text>{item.name}</Text>

    keyExtractor = (item, index) => item.id.toString()

    render() {
        const { cryptoList, isLoading, cryptoListEndReached } = this.props
        const { isRefreshing } = this.state
        //console.log('CRYPTO LIST: ', cryptoList)
        if (isLoading && cryptoList.length === 0) return <ActivityIndicator/>
        return (
            <FlatList
                data={cryptoList}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                //ItemSeparatorComponent={<View style={{height: 1, flex: 1, color: '#000'}}/>}
                onRefresh={this.handleRefresh}
                refreshing={isRefreshing}
                onEndReached={!cryptoListEndReached && !isLoading && this.handleLazyLoad}
                onEndReachedThreshold={List.END_REACHED_THRESHOLD}
                ListEmptyComponent={
                    !isLoading && <Text>Nothing To Show!</Text>
                }
            />
        )
    }
}

export default CryptoList