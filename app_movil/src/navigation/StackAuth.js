
import { createStackNavigator } from 'react-navigation-stack';
import Home from "../screens/directory/Home";

export default StackAuth = createStackNavigator(
  {
    Home: { screen: Home,
      navigationOptions: {  headerShown: false },}
  },
  {
    navigationOptions: {   header: null },
    initialRouteName: 'Home',
  }
);
