import React, { Component } from 'react'

import { StyleSheet, TouchableOpacity, Image } from 'react-native'

class PauseButton extends Component {
    render() {
        let { onPress } = this.props

        const style = StyleSheet.create({
            wrapper: {
                position: 'absolute',
                width: 64 / 2,
                height: 64 / 2,
                top: 5,
                right: 5
            }
        })

        return (
            <TouchableOpacity
                style={style.wrapper}
                onPress={() => onPress()}
            >
                <Image
                    source={require('../Sprites/PauseButton@2x.png')}
                />
            </TouchableOpacity>
        )
    }
}

export default PauseButton
