'use strict';
import React, { Component } from 'react';
import {
  StyleSheet, View
} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
import DatePicker from 'react-native-datepicker'

import colors from './../../../resources/styles/colors'

export default class DatePickerInput extends Component {
  render() {
    const {holderStyle, valid, style, ...componentProps} = this.props;
    return (
        <View style={[styles.defaultHolder, holderStyle]}>
          <View style={styles.inputHolder}>
            <Icon name="calendar" size={20} style={styles.validIcon}/>
            <DatePicker
                {...componentProps}
                confirmBtnText="Aceptar"
                cancelBtnText="Cancelar"
                style={[styles.default, style || {}]}
            />
            {valid && <Icon name='check' size={20} style={styles.validIcon}/> ||
            <Icon name='issue-opened' size={20} style={styles.validIcon}/>}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 10
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
    backgroundColor: 'transparent',
    paddingLeft: 10
  }
});
