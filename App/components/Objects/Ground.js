import React, { Component } from 'react'
import { connect } from 'react-redux'

import { reset, moveLeft } from '../../actions/ground'

import { StyleSheet, View, Image } from 'react-native'

class Ground extends Component {
    constructor(props) {
        super(props)

        this.interval = null
        this.update = this.update.bind(this)
    }
    componentDidMount() {
        let { type } = this.props

        if (type === 'dynamic') {
            this.interval = setInterval(this.update, 1000/60 * .25)
        }
    }
    animate() {
        let { groundX, dispatch } = this.props

        if (groundX <= (-1 * 749) / 2) {
            dispatch(reset())
        } else {
            dispatch(moveLeft())
        }
    }
    update() {
        this.animate()
    }
    renderStatic() {
        let { groundWidth, groundX, groundY, type } = this.props

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
    renderDynamic() {
        let { groundWidth, groundX, groundY, type } = this.props

        const style = StyleSheet.create({
            wrapper: {
                position: 'absolute',
                width: groundWidth,
                bottom: groundY,
                flexDirection: 'row'
            },
            ground: {
                left: groundX,
                bottom: groundY
            },
            ground2: {
                left: groundX,
                bottom: groundY
            }
        })

        return (
            <View
                style={style.wrapper}
            >
                <Image
                    style={style.ground}
                    source={require('../Sprites/Ground@2x.png')}
                />
                <Image
                    style={style.ground2}
                    source={require('../Sprites/Ground@2x.png')}
                />
            </View>
        )
    }
    render() {
        let { type } = this.props

        return (
            type === 'dynamic' ? this.renderDynamic() : this.renderStatic()
        )
    }
}

function mapStateToProps(state) {
    return state.ground
}

export default connect(mapStateToProps)(Ground)
