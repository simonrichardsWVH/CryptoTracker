import React from 'react'
import { View, Text } from 'react-native'
import { ValueIndicator } from 'components'
//import styles from './CryptoListItemStyle'
//import * as constants from 'values/constants'

const CryptoListItem = (props) => {
    const { data: { name, symbol, quote: { EUR: { price, percent_change_1h, percent_change_24h, percent_change_7d } } } } = props
    return (
        <View>
            <Text style={{fontWeight: 'bold'}}>{name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <ValueIndicator label='1h' value={percent_change_1h} />
                <ValueIndicator label='24h' value={percent_change_24h} />
                <ValueIndicator label='7d' value={percent_change_7d} />
            </View>
        </View>
    )
}

export default CryptoListItem