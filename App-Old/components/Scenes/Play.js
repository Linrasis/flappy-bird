import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeLifeCycle } from '../../actions/game'
import { LC_WAITING } from '../../constants/game'

import { StyleSheet, View, Text } from 'react-native'
import PauseButton from '../Objects/PauseButton'
import Bird from '../Objects/Bird'
import Hills from '../Objects/Hills'
import Ground from '../Objects/Ground'

class Play extends Component {
    constructor(props) {
        super(props)

        this.pauseGame = this.pauseGame.bind(this)
    }
    pauseGame() {
        let { dispatch } = this.props

        dispatch(changeLifeCycle(LC_WAITING))
    }
    render() {
        let { width, height } = this.props

        const style = StyleSheet.create({
            wrapper: {
                width: width,
                height: height,
                backgroundColor: '#4ba3ff',
                justifyContent: 'center',
                alignItems: 'center'
            }
        })

        return (
            <View
                style={style.wrapper}
            >
                <PauseButton
                    onPress={() => this.pauseGame()}
                />
                <Bird />
                <Hills
                    type="dynamic"
                />
                <Ground
                    type="dynamic"
                />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        game: state.game,
        bird: state.bird
    }
}

export default connect(mapStateToProps)(Play)
