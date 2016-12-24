import React, { Component } from 'react'
import { connect } from 'react-redux'

import { LC_PLAYING } from '../../constants/game'
import { changeLifeCycle } from '../../actions/game'

import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import Title from '../Objects/Title'
import Logo from '../Objects/Logo'
import Ground from '../Objects/Ground'
import Hills from '../Objects/Hills'

class MainMenu extends Component {
    constructor(props) {
        super(props)
    }
    startGame() {
        let { dispatch } = this.props

        dispatch(changeLifeCycle(LC_PLAYING))
    }
    render() {
        let { width, height } = this.props
        let { groundWidth, groundHeight, groundX, groundY } = this.props.ground
        let { hillsWidth, hillsHeight, hillsX, hillsY } = this.props.hills

        const style = StyleSheet.create({
            wrapper: {
                width: width,
                height: height,
                backgroundColor: '#4ba3ff',
                justifyContent: 'center',
                alignItems: 'center'
            },
            button: {
                position: 'absolute',
                left: (width / 2) - (116 / 2),
                bottom: hillsHeight + 100
            }
        })

        return (
            <View
                style={style.wrapper}
            >
                <Title
                    width={(512 / 2)}
                    height={(89 / 2)}
                    x={(width / 2) - ((512 / 2) / 2)}
                    y={hillsHeight + 150 + (282 / 2) + 80}
                />
                <Logo
                    width={320 / 2}
                    height={282 / 2}
                    x={(width / 2) - ((320 / 2) / 2)}
                    y={hillsHeight + 150 + 40}
                />
                <TouchableOpacity
                    style={style.button}
                    onPress={() => this.startGame()}
                >
                    <Image
                        source={require('../Sprites/PlayButton.png')}
                    />
                </TouchableOpacity>
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
        ground: state.ground,
        hills: state.hills
    }
}

export default connect(mapStateToProps)(MainMenu)
