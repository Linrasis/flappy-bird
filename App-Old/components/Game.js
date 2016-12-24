import React, { Component } from 'react'
import { connect } from 'react-redux'

import { LC_WAITING, LC_PLAYING, LC_ENDED } from '../constants/game'

import { StyleSheet, View, StatusBar, Text } from 'react-native'
import MainMenu from './Scenes/MainMenu'
import Play from './Scenes/Play'

class Game extends Component {
    constructor(props) {
        super(props)

        this.renderScene = this.renderScene.bind(this)
    }
    renderScene() {
        let { lifeCycle, width, height } = this.props.game

        if (this.props.game.lifeCycle === LC_WAITING) {
            return (
                <MainMenu
                    width={width}
                    height={height}
                />
            )
        } else if (this.props.game.lifeCycle === LC_PLAYING) {
            return (
                <Play
                    width={width}
                    height={height}
                />
            )
        }
    }
    render() {
        return (
            <View>
                <StatusBar hidden />
                {this.renderScene()}
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(Game)
