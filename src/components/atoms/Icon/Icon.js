import React from 'react'
import PropTypes from 'prop-types'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from 'resources/fonts/selection.json'

const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig)

const Icon = () => {

        const { name, size, color, ...props } = this.props

        return (
            <CustomIcon
                name={name}
                size={size}
                color={color}
                {...props}
            />
        )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
}
Icon.defaultProps = {
    size: 24,
    color: '#4a4a4b',
}

export default Icon