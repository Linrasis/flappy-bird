import React, { Component } from 'react'
import { connect } from 'react-redux'

import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import Logo from '../Objects/Logo'
import Ground from '../Objects/Ground'
import Hills from '../Objects/Hills'

class MainMenu extends Component {
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
            logo: {

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
                <Logo
                    width={320 * 2}
                    height={282 * 2}
                    x={(width / 2) - 320}
                    y={hillsHeight + 150}
                />
                <TouchableOpacity
                    style={style.button}
                >
                    <Image
                        source={require('../Sprites/PlayButton.png')}
                    />
                </TouchableOpacity>
                <Hills />
                <Ground />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        ground: state.ground,
        hills: state.hills
    }
}

export default connect(mapStateToProps)(MainMenu)
