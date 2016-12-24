import React, { Component } from 'react'

import { StyleSheet, Image } from 'react-native'

class Title extends Component {
    render() {
        let { width, height, x, y } = this.props

        const style = StyleSheet.create({
            wrapper: {
                position: 'absolute',
                width: width,
                height: height,
                left: x,
                bottom: y
            }
        })

        return (
            <Image
                source={require('../Sprites/GameTitle@2x.png')}
                style={style.wrapper}
            />
        )
    }
}

export default Title
