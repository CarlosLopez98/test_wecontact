'use strict'
import React, {Component} from 'react'
import NavigationBar from 'react-native-navbar';
import { NavigationActions } from 'react-navigation';
import {
  Alert,
} from 'react-native'
import {updateForm} from "../services/user/signUp";
import {View} from 'react-native';
import colors from "../../resources/styles/colors";
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class NavBar extends Component {

  render() {
    const { navigation } = this.props;
    return (
        <NavigationBar
            title={{...titleConfig , tintColor:colors.txtWhite }}
            leftButton={{...leftButtonConfig, handler: () => navigation.goBack(), tintColor:colors.txtWhite}}
            rightButton={{...rightButtonConfig, handler: () => {
              Alert.alert(
                  'Salir',
                  '¿Desea terminar el registro?',
                  [
                    {text: 'Seguir'},
                    {
                      text: 'Terminar',
                      onPress: this.onPressHandler,
                      style: 'cancel'
                    },
                  ],
                {cancelable: false}
              )
            },
            tintColor:colors.txtWhite}}
            containerStyle={{
              backgroundColor: colors.bgDarkBlue,
              color: colors.txtWhite
            }}
        />
    )
  }

  onPressHandler = () => {
    const { navigation } = this.props;
    this.props.dispatch(updateForm({}));
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'SignIn'})]
    });
    navigation.dispatch(resetAction);
  };
}

const leftButtonConfig = {
  title: '<',
  tintColor: '#000',
  style: {
    width: 50,
    marginLeft: 10
  },
  handler: () => this.props.navigation.goBack(),
};

const rightButtonConfig = {
  title: 'Salir',
  tintColor: '#000',
  style: {
    width: 50,
    marginLeft: 10,
  },
  handler: () => this.props.navigation.goBack(),
};

const titleConfig = {
  title: 'Monedero',
  tintColor: '#000',
};
