'use strict'
import React, { Component } from 'react'
import {
    TextInput, StyleSheet, Text, View
} from 'react-native'

import colors                   from './../../../resources/styles/colors'
import Icon                     from 'react-native-vector-icons/Octicons'
import {FontAwesome, Entypo, MaterialCommunityIcons, Feather} from '@expo/vector-icons';

class Input extends Component {
    render() {
        const type = this.props.type || {}
        let typeProps
        switch (type) {
            case 'email':
                typeProps = {
                    autoCapitalize: 'none',
                    autoCorrect: false,
                    keyboardType: 'email-address',
                    returnKeyType: 'done'
                }
                break;
            case 'document':
                typeProps = {
                    autoCapitalize: 'none',
                    autoCorrect: false,
                    keyboardType: 'numeric',
                    returnKeyType: 'done'
                }
                break;
            case 'documentType':
                typeProps = {
                    autoCapitalize: 'none',
                    editable: false
                }
                break;
            case 'password':
                typeProps= {
                    keyboardType: 'numeric',
                    secureTextEntry: true,
                    returnKeyType: 'done',
                    maxLength: 4,
                }
                break;
            case 'phone':
                typeProps= {
                    keyboardType: 'phone-pad',
                    returnKeyType: 'done'
                }
                break;
            case 'user':
                typeProps= {
                    keyboardType: 'email-address',
                    returnKeyType: 'done'
                }
                break;
            default:
        }

        const textInputProps = this.props.textInputProps
        let iconInput = null
        if(type == 'document'){
            iconInput = <FontAwesome name='id-card' size={20} style={ styles.validIcon } />
        }else if(type == 'password'){
            iconInput = <Icon name='lock' size={20} style={ styles.validIcon } />            
        }else if(type == 'email'){
            iconInput = <Icon name='mail' size={20} style={ styles.validIcon } />            
        }
        else if(type == 'phone'){
            iconInput = <Icon name='device-mobile' size={20} style={ styles.validIcon } />            
        }
        else if(type == 'user'){
            iconInput = <Icon name='person' size={20} style={ styles.validIcon } />            
        }
        return (
            <View style={[ styles.defaultHolder, this.props.holderStyle || {} ]}>
                {/* <Text style={[ styles.defaultTxt, this.props.titleStyle || {} ]}>{ this.props.title }</Text> */}
                <View style={ styles.inputHolder }>
                    {iconInput}
                    <TextInput
                        onChangeText={ this.props.onChangeText }
                        placeholderTextColor={ this.props.placeholderTextColor || '#000000' }
                        {...typeProps}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        value= {this.props.value || ''}
                        onFocus={ this.props.onFocus }
                        onBlur={ this.props.onBlur }
                        placeholder = {this.props.placeholder}
                        editable = { this.props.editable }
                        style={[ styles.default, styles[type], this.props.style || {} ]} />
                    { this.props.valid && <Icon name='check' size={20} style={ styles.validIcon } />  || <Icon name='issue-opened' size={20} style={ styles.validIcon } /> }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // Border button type by default
    default: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        color: colors.bdBlack,
        fontWeight: '700',
        flex: 1,
        paddingLeft: 20
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
        backgroundColor:'transparent',        
        paddingLeft: 10
    }
})

module.exports = Input
