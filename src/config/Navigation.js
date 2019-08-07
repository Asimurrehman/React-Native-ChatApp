import { createStackNavigator,createSwitchNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";
import React, { Component } from 'react';

import AuthWithFB from '../screens/AuthWithFB'
import ChatList from '../screens/ChatList';
import ChatScreen from '../screens/ChatScreen'
import People from '../screens/People'
import Discover from '../screens/Discover'
import Cam from '../screens/Cam'
import Story from '../screens/Story'
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';



const stack=createStackNavigator({
  Chat:{
    screen:createBottomTabNavigator({
      ChatList:{
        screen:ChatList,
        navigationOptions:{
          tabBarIcon:({focused,tintColor})=>(
            <Feather name='message-circle' size={25} color={focused ? 'black' : 'gray'}/>
          )
        }
      },
      Users:{
        screen:People,
              navigationOptions: {
                
                tabBarIcon: ({ tintColor,focused }) => (
                  <SimpleLineIcons name='people' size={25}  color={focused ? 'black' : 'gray'}/>
                )
              }
      },
      Discover:{
        screen:Discover,
        navigationOptions:({
          tabBarIcon:({focused,tintColor})=>(
            <Feather name='compass' size={25} color={focused ? 'black' : 'gray'}/>
        )
        })
        },


    },
    {
      navigationOptions: { header: null }

    })

},


ChatScreen:{
    screen:ChatScreen
},
Cam: {
  screen: Cam,
  navigationOptions: {
    header: null
  }
},
Story: {
  screen:Story,
  navigationOptions: {
    header: null
  }
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