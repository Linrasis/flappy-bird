import React, { Component } from 'react'
import { connect } from 'react-redux'

import { StyleSheet, Image } from 'react-native'

class Ground extends Component {
    render() {
        let { groundWidth, groundHeight, groundX, groundY } = this.props

        const style = StyleSheet.create({
            wrapper: {
                position: 'absolute',
                width: groundWidth,
                left: groundX,
                bottom: groundY
            }
        })

        return (
            <Image
                style={style.wrapper}
                source={require('../Sprites/Ground@2x.png')}
            />
        )
    }
}

function mapStateToProps(state) {
    return state.ground
}

export default connect(mapStateToProps)(Ground)
