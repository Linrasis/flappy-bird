import React, { Component } from 'react'

import { StyleSheet, Image } from 'react-native'

let count = 0
let max = 20
let up = true

class Logo extends Component {
    constructor(props) {
        super(props)

        this.interval = null

        this.state = {
            source: 'GameLogo0',
            translateY: 0
        }

        this.update = this.update.bind(this)
    }
    componentDidMount() {
        this.interval = setInterval(this.update, 1000/60)
    }
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }
    animate() {
        let { source, translateY } = this.state
        count ++

        if (count === 6) {
            count = 0
            this.setState({
                source: source === 'GameLogo0' ? 'GameLogo1' : 'GameLogo0'
            })
        }

        if (up) {
            this.setState({
                translateY: translateY + 1
            })

            if (translateY === max) up = false
        } else if (!up) {
            this.setState({
                translateY: translateY - 1
            })

            if (translateY === 0) up = true
        }
    }
    update() {
        this.animate()
    }
    render() {
        let { width, height, x, y } = this.props
        let { source, translateY } = this.state

        const style = StyleSheet.create({
            wrapper: {
                position: 'absolute',
                width: width,
                height: height,
                left: x,
                bottom: y,
                transform: [
                    {translateY: translateY}
                ]
            }
        })

        return (
            <Image
                source={source === 'GameLogo0' ? require('../Sprites/GameLogo0@2x.png') : require('../Sprites/GameLogo1@2x.png')}
                style={style.wrapper}
            />
        )
    }
}

export default Logo
