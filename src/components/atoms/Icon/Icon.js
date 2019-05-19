import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from 'resources/fonts/selection.json'

const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig)

const Icon = props => {

    const { name, size, color, headerLeft, headerRight, onPress } = props

    return (
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
