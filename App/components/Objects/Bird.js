import React, { Component } from 'react'
import { connect } from 'react-redux'

import { StyleSheet, Image } from 'react-native'

class Bird extends Component {
    render() {
        let { birdWidth, birdHeight, birdX, birdY } = this.props

        const style = StyleSheet.create({
            wrapper: {
                position: 'absolute',
                width: birdWidth,
                height: birdHeight,
                left: birdX,
                bottom: birdY
            }
        })

        return (
            <Image
                source={require('../Sprites/Player0@2x.png')}
                style={style.wrapper}
            />
        )
    }
}

function mapStateToProps(state) {
    return state.bird
}

export default connect(mapStateToProps)(Bird)
