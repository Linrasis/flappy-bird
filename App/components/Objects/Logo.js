import React, { Component } from 'react'

import { StyleSheet, Image } from 'react-native'

let count = 0

class Logo extends Component {
    constructor(props) {
        super(props)

        this.interval = null

        this.state = {
            source: 'GameLogo0'
        }

        this.update = this.update.bind(this)
    }
    componentDidMount() {
        setInterval(this.update, 100)
    }
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }
    animate() {
        let { source } = this.state

        this.setState({
            source: source === 'GameLogo0' ? 'GameLogo1' : 'GameLogo0'
        })
    }
    update() {
        this.animate()
    }
    render() {
        let { width, height, x, y } = this.props
        let { source } = this.state

        const style = StyleSheet.create({
            wrapper: {
                position: 'absolute',
                width: width * 2,
                height: height * 2,
                left: x,
                bottom: y
            }
        })

        return (
            <Image
                source={source === 'GameLogo0' ? require('../Sprites/GameLogo0@2x.png') : require('../Sprites/GameLogo1@2x.png')}
            />
        )
    }
}

export default Logo
