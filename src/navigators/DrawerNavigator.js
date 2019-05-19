import React from 'react'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { HomeScreen, FavouritesScreen, TopGainerScreen } from 'screens'
import { Icon } from 'components'

const homeScreen = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Screen 1',
            headerLeft: <Icon name="menu" headerLeft onPress={navigation.toggleDrawer} />,
        }),
    },
})

const favouritesScreen = createStackNavigator({
    Favourites: {
        screen: FavouritesScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Screen 2',
            headerLeft: <Icon name="menu" headerLeft onPress={navigation.toggleDrawer} />,
        }),
    },
})

const topGainerScreen = createStackNavigator({
    TopGainer: {
        screen: TopGainerScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Screen 3',
            headerLeft: <Icon name="menu" headerLeft onPress={navigation.toggleDrawer} />,
        }),
    },
})

export default createDrawerNavigator({
    Home: {
        screen: homeScreen,
    },
    Favourites: {
        screen: favouritesScreen,
    },
    TopGainer: {
        screen: topGainerScreen,
    },
})
