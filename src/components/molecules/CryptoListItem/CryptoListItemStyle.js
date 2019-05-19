import { StyleSheet } from 'react-native'
import * as dimens from 'values/dimens'

const { cryptoListItem: dimen } = dimens

export default StyleSheet.create({
    mainContainer: {
        paddingHorizontal: dimen.componentContainer.paddingHorizontal,
        paddingVertical: dimen.componentContainer.paddingVertical,
    },
    titleAndPriceContainer: {
        flexDirection: 'row',
        marginBottom: dimen.titleAndPriceContainer.marginBottom,
    },
    cryptoTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 2,
        paddingLeft: dimen.cryptoTitleContainer.paddingLeft,
    },
    priceContainer: {
        flex: 1,
        paddingLeft: dimen.priceContainer.paddingLeft,
    },
    symbolText: {
        fontWeight: 'bold',
    },
    priceText: {
        fontWeight: 'bold',
    },
    separator: {
        height: '100%',
        width: dimen.symbolAndNameSeparator.width,
        backgroundColor: '#000',
        marginHorizontal: dimen.symbolAndNameSeparator.marginHorizontal,
    },
    valueGroupContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    valueContainer: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: dimen.valueContainer.paddingLeft,
    }
})