import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from './src/store'
import { HomeScreen } from 'screens'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HomeScreen />
            </Provider>
        )
    }
}

