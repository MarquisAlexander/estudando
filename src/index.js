import Page1 from './Page1';
import Page2 from './Page2';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createBottomTabNavigator } from 'react-native-tabs';
//import { createMaterialTopTabNavigator } from 'react-native-tabs';

const Routes = createAppContainer(
   createStackNavigator({
    Home: Page1,
    About: Page2,
  })
);

export default Routes;