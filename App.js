import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import  AppLoading from "expo-app-loading";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, ChatIcon, MapIcon } from './src/images/svg-icons';
import {
  useFonts,
  IBMPlexSans_100Thin,
  IBMPlexSans_100Thin_Italic,
  IBMPlexSans_200ExtraLight,
  IBMPlexSans_200ExtraLight_Italic,
  IBMPlexSans_300Light,
  IBMPlexSans_300Light_Italic,
  IBMPlexSans_400Regular,
  IBMPlexSans_400Regular_Italic,
  IBMPlexSans_500Medium,
  IBMPlexSans_500Medium_Italic,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_600SemiBold_Italic,
  IBMPlexSans_700Bold,
  IBMPlexSans_700Bold_Italic,
} from '@expo-google-fonts/ibm-plex-sans';

import Home from './src/screens/home';
import Chat from './src/screens/chat';
import Map from './src/screens/map2';
// import Map2 from './src/screens/map';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabLayout = () => (
  <Tab.Navigator
    style={{paddingTop: 50}}
    initialRouteName='Home'
    screenOptions={{
      tabBarActiveTintColor: '#FF5555',
      tabBarInactiveTintColor: '#000',
      tabBarStyle: {
        backgroundColor: '#F1F0EE',
        paddingTop: 5
      },
    }}>
    <Tab.Screen
      name='Home'
      component={Home}
      options={{
        tabBarIcon: ({color}) => (<HomeIcon fill={color}/>)
      }}
    />
    <Tab.Screen
      name='Chat'
      component={ChatStackLayout}
      options={{
        tabBarIcon: ({color}) => (<ChatIcon fill={color} />)
      }}
    />
    <Tab.Screen
      name='Map'
      component={MapStackLayout}
      options={{
        tabBarIcon: ({color}) => (<MapIcon fill={color} />)
      }}
    />
  </Tab.Navigator>
);
const ChatStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='Talk with 1122-AI' component={Chat} />
  </Stack.Navigator>
);

const MapStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='Locate Assistance' component={Map} />
  </Stack.Navigator>
);

const fonts = {
  IBMPlexSans_100Thin,
  IBMPlexSans_100Thin_Italic,
  IBMPlexSans_200ExtraLight,
  IBMPlexSans_200ExtraLight_Italic,
  IBMPlexSans_300Light,
  IBMPlexSans_300Light_Italic,
  IBMPlexSans_400Regular,
  IBMPlexSans_400Regular_Italic,
  IBMPlexSans_500Medium,
  IBMPlexSans_500Medium_Italic,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_600SemiBold_Italic,
  IBMPlexSans_700Bold,
  IBMPlexSans_700Bold_Italic,
};
export default function App() {
  let [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }else {
    return (
      <NavigationContainer>
        <TabLayout/>
      </NavigationContainer>
    );
  }
};
