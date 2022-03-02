import React from 'react';
import { NavigationActions } from 'react-navigation';
import { HeaderBackButton } from 'react-navigation-stack';
import {Alert, Button, Text} from "react-native";
import colors from '../../resources/styles/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const navigationOptions = ({navigation}, props) => {
  const showHeaderLeft = props.showHeaderLeft === undefined ? true : showHeaderLeft;
  return ({
    ...props,
    headerLeft: showHeaderLeft && <HeaderBackButton tintColor={colors.bdBlack} onPress={() => navigation.goBack(null)}/>,
    headerRight:
      <Text
        style={{ ...props.headerStyleRigth, fontSize: 18 }}
        onPress={onExitHandler}
      >Salir</Text>,
    headerStyle: {
      ...props.headerStyle,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      ...props.headerTitleStyle,
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: 18,
    },
  });

  function onExitHandler() {
    Alert.alert(
      'Alerta',
      '¿Desea cerrar sesión? ',
      [
        {text: 'Cancelar', style: 'cancel'},
        {
          text: 'Salir', onPress: () => {
            const resetAction = NavigationActions.reset({
              index: 0,
              key: null,
              actions: [NavigationActions.navigate({routeName: 'Auth'})]
            });
            navigation.dispatch(resetAction);
          }
        },
      ],
      {cancelable: false}
    );
  }
};

function transparentWrapping(f, props) {
  return function() {
    return f.apply(props, [arguments[0], props]);
  };
}

export const BaseNavigationOptions = transparentWrapping(
  navigationOptions,
  {
    tabBarLabel: 'Contact',
    headerStyle: {
      backgroundColor: colors.bdWhite,
    },
    headerTitleStyle: {
      textAlign: 'center',
      color: colors.bgDarkBlue,
    },
    headerStyleRigth: {
      paddingRight: 15,
      color: colors.bgDarkBlue,
    },
  }
);

export const profileNavigationOptions = transparentWrapping(
  navigationOptions,
  {
    tabBarLabel: 'My Profile',
    headerStyle: {
      backgroundColor: colors.bgMagenta,
    },
    headerTitleStyle: {
      textAlign: 'center',
      color: colors.bdWhite,
    },
    headerStyleRigth: {
      paddingRight: 15,
      color: colors.bdWhite,
    },
  }
);

export const notValidNavigationOptions = transparentWrapping(
  navigationOptions,
  {
    tabBarLabel: 'My directory',
    headerStyle: {
      backgroundColor: colors.bdDarkGray,
    },
    headerTitleStyle: {
      textAlign: 'center',
      color: colors.bdWhite,
    },
    headerStyleRigth: {
      paddingRight: 15,
      color: colors.bdWhite,
    },
  }
);
