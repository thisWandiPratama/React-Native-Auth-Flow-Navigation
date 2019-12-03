import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Image
} from 'react-native'
import {createAppContainer, createSwitchNavigator } from 'react-navigation'
import {  createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'


import AuthLoding from './src/screen/AuthLoding'
import WellcomeScreen from './src/screen/WellcomeScreen'
import SignIn from './src/screen/SignInScreen'
import SignUp from './src/screen/SignUpScreen'
import HomeScreen from './src/screen/HomeScreen'
import SettingsScreen from './src/screen/SettingsScreen'

const Menu = require('./src/assets/menu.png')

const AuthStackNavigator = createStackNavigator({
  Wellcome : WellcomeScreen,
  SignIn : SignIn,
  SignUp : SignUp
})

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen : HomeScreen
  },
  Settings : {
    screen : SettingsScreen
  }
}) 

const AppStackNavigator = createStackNavigator({
  AppTabNavigator :{
    screen : AppTabNavigator,
    navigationOptions : ({ navigation }) => ({
      title: 'Wandi Pratama',
      headerLeft: (
        <TouchableOpacity onPress = { () => navigation.toggleDrawer()}>
          <View style = {{ paddingHorizontal : 10}}>
            <Image source ={ Menu } style ={{ width: 24, height: 24}}/>
          </View>
        </TouchableOpacity>
      )
    })
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Home : AppStackNavigator
})

const AuthSwitch = createSwitchNavigator({
  AuthLoding : AuthLoding,
  Auth : AuthStackNavigator,
  App: AppDrawerNavigator
})

export default createAppContainer(AuthSwitch)