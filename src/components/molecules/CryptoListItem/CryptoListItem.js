import React from 'react'
import { View, Text } from 'react-native'
import { ValueIndicator, Icon } from 'components'
import styles from './CryptoListItemStyle'
import * as constants from 'values/constants'

const CryptoListItem = props => {
    const {
        data: {
            name,
            symbol,
            quote: {
                [constants.BASE_CURRENCY]: { price, percent_change_1h, percent_change_24h, percent_change_7d },
            },
        },
    } = props
    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleAndPriceContainer}>
                <View style={styles.cryptoTitleContainer}>
                    <Icon name="heart" />
                    <Text style={styles.symbolText}>{symbol}</Text>
                    <View style={styles.separator}/>
                    <Text>{name}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>{price.toFixed(2)}€</Text>
                </View>
            </View>
            <View style={styles.valueGroupContainer}>
                <View style={styles.valueContainer}>
                    <ValueIndicator label="1h" value={percent_change_1h}/>
                </View>
                <View style={styles.valueContainer}>
                    <ValueIndicator label="24h" value={percent_change_24h}/>
                </View>
                <View style={styles.valueContainer}>
                    <ValueIndicator label="7d" value={percent_change_7d}/>
                </View>
            </View>
        </View>
    )
}

export default CryptoListItem
