import React from 'react';
import { Provider } from "react-redux";
import * as R from "ramda";
import { View } from 'react-native';
import {
  AppLoading,
  registerRootComponent
} from 'expo';
import * as Font from 'expo-font';
import { Root } from "native-base";

import { REQUEST_STATUS } from "./src/RequestStatus";
import AppNav from './src/navigation/AppNavigation'
import store from './src/store'
import NavigatorService from "./src/utilities/navigator";

/*XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
  GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;*/

class App extends React.Component {
  state = {
    isReady: true,
    paramsRequest: {},
  };

  componentDidMount() {
    const { dispatch } = store;
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }
  render() {
    return (
      <Provider store={store}>
        { this.getContent() }
      </Provider>
    );
  }

  getContent() {
    return (
      <Root>
        <AppNav
          ref={navigatorRef => {
            NavigatorService.setContainer(navigatorRef);
          }}/>
      </Root>
    )
  }
}

export default registerRootComponent(App);
