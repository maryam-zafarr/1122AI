import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import * as Font from "expo-font";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  image: {
    height: '50%',
    width: '50%',
    resizeMode: 'center'
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 18,
    color: '#323232'
  }
});

const customFonts = {
  IBMPlexSans: require("./../assets/fonts/IBMPlexSans-Medium.ttf"),
};

const initLoading = () => (
  <View style={styles.center}>
    <Image style={styles.image}
      source={require('../images/logo-512.png')}
    />
    <Text style={styles.title}>loading...</Text>
  </View>
);
const Loading = ()=> {
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return <AppLoading />;
}
// from the custom App we return the component we assigned to RootApp.
return <initLoading />;
}

export default Loading;
