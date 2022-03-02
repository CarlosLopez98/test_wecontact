'use strict'
import React, { Component } from 'react'
import SelectInput from 'react-native-select-input-ios';
import {
    TextInput, StyleSheet, Text, View, Picker, Dimensions
} from 'react-native'

import colors                   from './../../../resources/styles/colors'
import Icon                     from 'react-native-vector-icons/Octicons'

class Select extends Component {
    state = {documenteType: ''}
    updateDocumentType = (document) => {
       this.setState({ documenteType: document })
    }
    render() {
        const textInputProps = this.props.textInputProps
        return (
            <View style={[ styles.defaultHolder, this.props.holderStyle || {} ]}>
                <Text style={[ styles.defaultTxt, this.props.titleStyle || {} ]}>{ this.props.title }</Text>
                <View style={ styles.inputHolder }>
                    <SelectInput
                        value={this.props.selectedValue}
                        options={this.props.options}
                        onCancelEditing={() => console.log('onCancel')}
                        onSubmitEditing={this.props.onValueChange}
                        style={[styles.default]}
                    />
                </View>
            </View>
        )
    }
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const MARGIN_SMALL = 8;
const MARGIN_LARGE = 16;

const styles = StyleSheet.create({
    // Border button type by default
    default: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // color: colors.txtOrange,
        // fontWeight: '700',
        flex: 1
    },
    defaultTxt: {
        color: colors.bdBlack,
        fontWeight: '700'
    },
    defaultHolder: {
        borderBottomWidth: 1,
        borderColor: colors.bdBlack
    },
    inputHolder: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    validIcon: {
        color: colors.bdBlack,
        paddingLeft: 10
    },
    pickerTxt: {
        color: colors.bdBlack
    },
    selectInput: {
        flexDirection:            'row',
        height:                   36,
        borderWidth:              1,
        borderRadius:             4,
        padding:                  MARGIN_SMALL,
        marginTop:                MARGIN_LARGE,
        backgroundColor:          '#FFFFFF',
    }
})

module.exports = Select
