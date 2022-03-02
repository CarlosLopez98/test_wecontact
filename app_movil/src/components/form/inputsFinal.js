'use strict';

import React, { Component } from 'react';
import {TextInputMask} from "react-native-masked-text";
import {IconNB, Item, Input} from "native-base";

const InputWrapper = ComponentToBeWrapped => class extends Component {
  render() {
    const {valid, inputRef, ...componentProps} = this.props;
    return (
      <Item error={!valid}>
        <ComponentToBeWrapped
          placeholderTextColor={'#E61E52'}
          {...componentProps}
          ref={inputRef}
        />
        {!valid &&
        <IconNB name={"ios-close-circle"}/>
        }
      </Item>
    );
  }
};

export const MaskedInput = InputWrapper(
  TextInputMask
);

export const TextInput = InputWrapper(
  Input
);
