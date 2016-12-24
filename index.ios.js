/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './App/store'

import { AppRegistry } from 'react-native'
import Game from './App/components/Game'

const store = configureStore()

class FloppyBird extends Component {
    render() {
        return (
            <Provider store={store}>
                <Game />
            </Provider>
        )
    }
}

export default FloppyBird

AppRegistry.registerComponent('FloppyBird', () => FloppyBird)
