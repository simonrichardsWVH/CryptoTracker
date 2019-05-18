import { StyleSheet } from 'react-native'
import * as colors from 'values/colors'
import * as dimens from 'values/dimens'

const { valueIndicator } = colors

export default (value) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: dimens.valueIndicator.labelFontWeight,
        color: valueIndicator.labelColor,
        paddingRight: dimens.valueIndicator.labelPaddingRight,
    },
    value: {
        color: value < 0 ? valueIndicator.negativeValue : valueIndicator.positiveValue,
    }
})