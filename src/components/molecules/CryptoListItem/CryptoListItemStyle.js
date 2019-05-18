import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 8,
    },
    cryptoTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    symbol: {
        fontWeight: 'bold',
    },
    separator: {
        height: '100%',
        width: 1,
        backgroundColor: '#000',
        marginHorizontal: 4,
    },
    valuesContainer: {
        flex: 1,
        alignItems: 'flex-start'
    }
})