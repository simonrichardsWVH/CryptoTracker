import React from 'react'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { HomeScreen, FavouritesScreen, TopGainerScreen } from 'screens'
import { Button } from 'react-native'

const homeScreen = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Screen 1',
            headerLeft: (
                <Button onPress={navigation.toggleDrawer} title='Menu'/>
            ),
        }),
    },
})

const favouritesScreen = createStackNavigator({
    Favourites: {
        screen: FavouritesScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Screen 2',
            headerLeft: (
                <Button onPress={navigation.toggleDrawer} title='Menu'/>
            ),
        }),
    },
})

const topGainerScreen = createStackNavigator({
    TopGainer: {
        screen: TopGainerScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Screen 3',
            headerLeft: (
                <Button onPress={navigation.toggleDrawer} title='Menu'/>
            ),
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
