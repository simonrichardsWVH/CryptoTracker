import React from 'react'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { HomeScreen, FavouritesScreen, TopGainerScreen } from 'screens'
import { Icon } from 'components'

const homeScreen = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerLeft: <Icon name="menu" headerLeft onPress={navigation.toggleDrawer} noFeedback />,
        }),
    },
})

const favouritesScreen = createStackNavigator({
    Favourites: {
        screen: FavouritesScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'My Favorites',
            headerLeft: <Icon name="menu" headerLeft onPress={navigation.toggleDrawer} noFeedback />,
        }),
    },
})

const topGainerScreen = createStackNavigator({
    TopGainer: {
        screen: TopGainerScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Top Gainer',
            headerLeft: <Icon name="menu" headerLeft onPress={navigation.toggleDrawer} noFeedback />,
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
