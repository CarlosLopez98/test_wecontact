'use strict';

import React, { Component } from 'react';
import {TextInputMask} from "react-native-masked-text";
import {IconNB, Item, Input as NbInput} from "native-base";
import {StyleSheet, TextInput} from "react-native";
import colors from "../../../resources/styles/colors";

const InputWrapper = ComponentToBeWrapped => class extends Component {
  render() {
    const {input, meta, ...rest} = this.props;
    const showError = meta.touched && meta.error;
    return (
      <Item error={showError}>
        <ComponentToBeWrapped
          {...input}
          {...rest}
          style={[styles.default, rest.style || {}]}
          ref={rest.inputRef}
        />
        {showError &&
        <IconNB name={"ios-close-circle"}/>
        }
      </Item>
    );
  }
};

export const MaskedInput = InputWrapper(
  TextInputMask
);

export const Input = InputWrapper(
  NbInput
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
});
