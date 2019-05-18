import React from 'react'
import { Text, View } from 'react-native'
import styles from './ValueIndicatorStyle'
import * as constants from 'values/constants'

const ValueIndicator = ({ label, value }) => {
    const style = styles(value)
    return (
        <View style={style.container}>
            <Text style={style.label}>{label}:</Text>
            <Text style={style.value}>{value.toFixed(constants.NUM_DECIMAL_PLACES)}%</Text>
        </View>
    )
}

export default ValueIndicator