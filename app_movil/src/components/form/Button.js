'use strict';

import React, {PureComponent} from 'react'
import { TouchableOpacity, StyleSheet, Text, ViewPropTypes } from 'react-native'
import { PropTypes  } from "prop-types";

import colors from './../../../resources/styles/colors'

class Button extends PureComponent {

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        disabled={this.props.disabled}
        style={[styles.default, this.props.style || {}]}
      >
        <Text style={[styles.defaultTxt, this.props.textStyle]}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
};
Button.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  default: {
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.bdWhite,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15
  },
  defaultTxt: {
    fontSize: 20,
    backgroundColor: 'transparent'
  }
});

export default Button
