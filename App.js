import React,{Component, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Registeration_LoginScreen from "./screens/Registeration_LoginScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
import HomeScreen from "./screens/HomeScreen";
import Chatbot from 'react-chatbot-kit'
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config_bot.js';
import ChatApp from "./ChatApp"





export default class App extends Component {


 render(){

 return( 
   <View>
   <AppContainer />
   <ChatApp/>
   </View>


 )
 }
 
  
}

const switchNavigator = createSwitchNavigator({
  Registeration: { screen: Registeration_LoginScreen },
  Drawer: { screen: AppDrawerNavigator },
  Homescreen : {screen : HomeScreen},

});

const AppContainer = createAppContainer(switchNavigator);

