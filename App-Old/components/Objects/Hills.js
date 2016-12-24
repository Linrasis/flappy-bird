import React, { Component } from 'react'
import { connect } from 'react-redux'

import { reset, moveLeft } from '../../actions/hills'

import { StyleSheet, View, Image } from 'react-native'

class Hills extends Component {
    constructor(props) {
        super(props)

        let { type } = this.props

        this.interval = null
        this.update = this.update.bind(this)
    }
    componentDidMount() {
        let { type } = this.props

        if (type === 'dynamic') {
            this.interval = setInterval(this.update, 1000/60)
        }
    }
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }
    animate() {
        let { hillsX, dispatch } = this.props

        if (hillsX <= (-1 * 749) / 2) {
            dispatch(reset())
        } else {
            dispatch(moveLeft())
        }
    }
    update() {
        this.animate()
    }
    renderStatic() {
        let { hillsWidth, hillsHeight, hillsX, hillsY } = this.props

        const style = StyleSheet.create({
            wrapper: {
                position: 'absolute',
                width: hillsWidth,
                height: hillsHeight,
                left: 0,
                bottom: 20,
                flexDirection: 'row'
            },
            hills: {
                left: hillsX,
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
            </View>
        )
    }
    renderDynamic() {
        let { hillsWidth, hillsHeight, hillsX, hillsY } = this.props

        const style = StyleSheet.create({
            wrapper: {
                position: 'absolute',
                width: hillsWidth,
                height: hillsHeight,
                bottom: 20,
                flexDirection: 'row'
            },
            hills: {
                left: hillsX,
                bottom: hillsY
            },
            hills2: {
                left: hillsX,
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
                    style={style.hills2}
                    source={require('../Sprites/Hills@2x.png')}
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
    return state.hills
}

export default connect(mapStateToProps)(Hills)
