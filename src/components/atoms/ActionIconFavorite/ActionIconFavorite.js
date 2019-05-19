import React from 'react'
import { View } from 'react-native'
import { Icon } from 'components'

const IS_FAVOURITE = 'star'
const NOT_FAVORITE = 'star-outline'

const ActionIconFavorite = props => {
    const { id, size, favoritesList, toggleFavorite } = props
    const isFavorite = favoritesList.some(fav => fav.id === id)
    return (
        <Icon
            name={isFavorite ? IS_FAVOURITE : NOT_FAVORITE}
            color={isFavorite ? 'gold' : '#888'}
            size={isFavorite ? 28 : 24}
            style={{borderWidth: 1, borderColor: '#000'}}
            onPress={() => toggleFavorite(isFavorite)}
        />
    )
}

export default ActionIconFavorite
