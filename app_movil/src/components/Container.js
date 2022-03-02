'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, View, Platform
} from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import colors           from '../../resources/styles/colors'

class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={true}
            keyboardOpeningTime	= {0}
          >
            <View style={[styles.container, this.props.style || {}]}>
                {/* Replace status on iOS */}
                { Platform.OS == 'ios' && <View style={[ this.props.statusBarStyle || {}, { height: 20 }]}></View>}
                { this.props.children }
            </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: colors.bgWhite,
        alignItems: 'stretch',
        flex: 1
    },
    shoppingCart: {
        position: 'absolute',
        top: 13,
        right: 15,
        color: colors.txtDescription,
        zIndex: 1,
        backgroundColor: 'transparent'
    }
})

module.exports = Container
