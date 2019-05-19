import React from 'react'
import { View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from 'resources/fonts/selection.json'

const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig)

const Icon = props => {

    const { name, size, color, headerLeft, headerRight, onPress, noFeedback } = props

    return noFeedback ?
        (
            <TouchableWithoutFeedback onPress={onPress} disabled={!onPress}>
                <View style={{ marginLeft: headerLeft ? 16 : 0, marginRight: headerRight ? 16 : 0 }}>
                    <CustomIcon
                        name={name}
                        size={size}
                        color={color}
                    />
                </View>
            </TouchableWithoutFeedback>
        )
        :
        (
            <TouchableOpacity onPress={onPress} disabled={!onPress}>
                <View style={{ marginLeft: headerLeft ? 16 : 0, marginRight: headerRight ? 16 : 0 }}>
                    <CustomIcon
                        name={name}
                        size={size}
                        color={color}
                    />
                </View>
            </TouchableOpacity>
        )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    headerLeft: PropTypes.bool,
    headerRight: PropTypes.bool,
    onPress: PropTypes.func,
}
Icon.defaultProps = {
    size: 24,
    color: '#4a4a4b',
}

export default Icon
