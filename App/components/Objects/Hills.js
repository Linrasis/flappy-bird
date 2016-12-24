import React, { Component } from 'react'
import { connect } from 'react-redux'

import { StyleSheet, View, Image } from 'react-native'

class Hills extends Component {
    render() {
        let { hillsWidth, hillsHeight, hillsX, hillsY } = this.props

        console.log(this.props)

        const style = StyleSheet.create({
            wrapper: {
                position: 'absolute',
                width: hillsWidth / 2,
                height: hillsHeight,
                left: hillsX,
                bottom: 20,
                flexDirection: 'row'
            },
            hills: {
                bottom: hillsY
            }
        })

        return (
            <View
                style={style.wrapper}
            >
                <Image
                    style={style.hills}
                    source={require('../Sprites/Hills@2x.png')}
                />
                <Image
                    style={style.hills}
                    source={require('../Sprites/Hills@2x.png')}
                />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return state.hills
}

export default connect(mapStateToProps)(Hills)
