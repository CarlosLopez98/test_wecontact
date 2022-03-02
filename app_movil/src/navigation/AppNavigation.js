import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import {StackNavigator} from 'react-navigation'

import StackAuth from './StackAuth'
import {
  BaseNavigationOptions,
  profileNavigationOptions,
  notValidNavigationOptions,
} from "./headers";
import Contact from "../screens/directory/contact/Contact";
import Profile from "../screens/profile/Profile";
import TransNoValid from "../screens/temp/TransNoValid";

const WalletNav = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: profileNavigationOptions,
  },
  Contact: {
    screen: Contact,
    navigationOptions: BaseNavigationOptions,
  },
  TransNoValid: {
    screen: TransNoValid,
    navigationOptions: notValidNavigationOptions,
  },
}, {
  headerMode: 'none',
  initialRouteName: 'Profile',
});

const AppNav = createStackNavigator({
  Auth: {screen: StackAuth},
  Wallet: {
    screen: WalletNav,
  },
}, {
  // headerMode: 'none',
  initialRouteName: 'Auth',
  // cardStyle: styles.card
});

export default createAppContainer(AppNav);
