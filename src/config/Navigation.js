import { createStackNavigator,createDrawerNavigator,createSwitchNavigator,createMaterialTopTabNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";

import AuthWithFB from '../screens/AuthWithFB'
import ChatList from '../screens/ChatList';
import ChatScreen from '../screens/ChatScreen'





const stack=createStackNavigator({
  ChatList:{
    screen:ChatList
},
ChatScreen:{
    screen:ChatScreen
}

})

const AppNavigator = createSwitchNavigator({
    AuthWithFB: {
      screen: AuthWithFB
    },
    stacks:{
      screen:stack
    }
   
  });
  



  export default createAppContainer(AppNavigator);