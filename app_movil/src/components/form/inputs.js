'use strict';
import React from 'react';
import {
  TextInput, StyleSheet, View
} from 'react-native'
import DatePicker from 'react-native-datepicker'

import colors from './../../../resources/styles/colors'
import Icon from 'react-native-vector-icons/Octicons'

let InputWrapper = (ComponentToBeWrapped, typeProps) => props => {
  const {holderStyle, valid, iconName, ...componentProps} = props;
  return (
    <View style={[styles.defaultHolder, holderStyle]}>
      <View style={styles.inputHolder}>
        { iconName &&
        <Icon name={iconName} size={20} style={styles.validIcon}/>
        }
        <ComponentToBeWrapped
          placeholderTextColor={props.placeholderTextColor || '#000000'}
          style={[styles.default, props.style || {}]}
          {...componentProps}
          {...typeProps}
        />
        {valid && <Icon name='check' size={20} style={styles.validIcon}/> ||
        <Icon name='issue-opened' size={20} style={styles.validIcon}/>}
      </View>
    </View>
  );
};

export const NumberInput = InputWrapper(
  TextInput,
  {
    keyboardType: 'numeric',
    returnKeyType: 'done'
  },
  "person"
);

export const NameInput = InputWrapper(
  TextInput,
  {
    autoCapitalize: 'words',
    autoCorrect: false,
    returnKeyType: 'done'
  },
  "person"
);

export const EmailInput = InputWrapper(
  TextInput,
  {
    autoCapitalize: 'none',
    autoCorrect: false,
    keyboardType: 'email-address',
    returnKeyType: 'done'
  },
  "person"
);

export const DateInput = InputWrapper(
  DatePicker,
  {
    format: "DD-MM-YYYY",
    confirmBtnText: "Aceptar",
    cancelBtnText: "Cancelar",
  },
  "person"
);

const styles = StyleSheet.create({
  default: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: colors.bdBlack,
    fontWeight: '700',
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
