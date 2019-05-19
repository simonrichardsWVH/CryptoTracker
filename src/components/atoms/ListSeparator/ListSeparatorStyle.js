import { StyleSheet } from 'react-native'
import * as colors from 'values/colors'
import * as dimens from 'values/dimens'

const { listSeparator: color } = colors
const { listSeparator: dimen } = dimens

export default StyleSheet.create({
    separator: {
        width: dimen.width,
        height: dimen.height,
        backgroundColor: color.color,
        alignSelf: 'center',
    }
})