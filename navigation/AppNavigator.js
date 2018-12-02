import { createStackNavigator,createDrawerNavigator,createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/RegisterScreen';
import ClinicDetailsScreen from '../screens/ClinicDetailsScreen';

export const Stack =  createStackNavigator({
  Home:HomeScreen,
  Details:DetailsScreen,
  Login:LoginScreen,
  Register:RegisterScreen,
  ClinicDetails:ClinicDetailsScreen,
},{
  initialRouteName:"Login",
});

export const Drawer  = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
});

// const MyApp = createAppContainer(MyDrawerNavigator);
// const MyStack = createAppContainer(createStackNavigator);

// export {MyDrawerNavigator, stack}