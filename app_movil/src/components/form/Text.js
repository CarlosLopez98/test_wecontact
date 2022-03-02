'use strict'
import React, { Component } from 'react'
import {
    Text, StyleSheet
} from 'react-native'

import colors           from './../../../resources/styles/colors'

class TextCustom extends Component {
    render() {
        const type = this.props.type || {}
        const style = {style: [ styles.default, styles[type], this.props.style || {} ]}
        const props = Object.assign({}, this.props, style)
        return (
            <Text {...props}>{ this.props.children }</Text>
        )
    }
}

const h5 = { fontSize: 16 }
const h4 = { fontSize: 18 }
const h3 = { fontSize: 25 }
const h1 = { fontSize: 32 }
const styles = StyleSheet.create({
    default: {
        color: colors.txtDark,
        backgroundColor:'transparent'        
    },
    spanWhite: {
        color: colors.txtWhite
    },
    h5,
    h5White: {
        ...h5,
        color: colors.txtWhite
    },
    h4,
    h4White: {
        ...h4,
        color: colors.txtWhite
    },
    h3,
    h3White: {
        ...h3,
        color: colors.txtWhite
    },
    h1,
    h1White: {
        ...h1,
        color: colors.txtWhite
    },
    h5Black: {
        ...h5,
        color: colors.bdBlack
    },
    h4,
    h4Black: {
        ...h4,
        color: colors.bdBlack
    },
    h3,
    h3Black: {
        ...h3,
        color: colors.bdBlack
    },
    h1,
    h1Black: {
        ...h1,
        color: colors.bdBlack
    },
    h5Orange: {
        ...h5,
        color: colors.txtOrange
    },
    h1Orange: {
        ...h1,
        color: colors.txtOrange
    }
})

module.exports = TextCustom
