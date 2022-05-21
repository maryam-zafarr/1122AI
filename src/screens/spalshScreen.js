import { StyleSheet, View, Image, Text, TouchableOpacity, Button, Linking } from 'react-native';
import { ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
const SplashScreen = ({navigation}) => {
    //State for ActivityIndicator animation
    const [animating, setAnimating] = useState(true);
   
    useEffect(() => {
      setTimeout(() => {
          setAnimating(false);
          navigation.navigate('TabLayout');
      }, 2500);
    }, []);
   
    return (
      <View style={styles.container}>
        <Image
          source={require('../images/logo.jpg')}
          style={{width: '90%', resizeMode: 'contain', margin: 30}}
            />
        <Text style={styles.title}>1122-AI</Text>
        <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
    );
  };
   
  export default SplashScreen;
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    activityIndicator: {
      alignItems: 'center',
      height: 80,
      },
      title: {
        textAlign: 'center',
        fontFamily: 'IBMPlexSans_700Bold_Italic',
        fontSize: 36,
        color: '#FF5555',
        paddingBottom: 15
      },
  });
