import React, { Component } from 'react'
import { connect } from 'react-redux'

import { StyleSheet, View, Image } from 'react-native'

class Hills extends Component {
    constructor(props) {
        super(props)

        this.interval = null

        this.update = this.update.bind(this)
    }
    componentDidMount() {
        let { type } = this.props

        setInterval(this.update, 1000/60)
    }
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }
    animate() {
        console.log('updating')
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
    update() {

    }
    render() {
        let { type } = this.props

        return (
            type === 'static' ? this.renderStatic() : this.renderDynamic()
        )
    }
}

function mapStateToProps(state) {
    return state.hills
}

export default connect(mapStateToProps)(Hills)
