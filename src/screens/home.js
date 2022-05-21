import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, Linking } from 'react-native';
import { ScrollView } from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  scroll: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    paddingTop: 20
  },
  image: {
    alignSelf: 'center',
    height: '50%',
    width:'50%',
    resizeMode: 'contain'
  },
  title: {
    textAlign: 'center',
    fontFamily: 'IBMPlexSans_700Bold_Italic',
    fontSize: 36,
    color: '#FF5555',
    paddingBottom: 15
  },
  subtitle: {
    fontFamily: 'IBMPlexSans_300Light',
    fontSize: 24,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    textDecorationLine: 'underline',
    paddingBottom: 5,
    paddingTop: 20
  },
  content: {
    fontFamily: 'IBMPlexSans_700Bold',
    color: '#323232',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
  buttonGroup: {
    flex: 1,
    paddingTop: 15,
    width: 175
  },
  button: {
    backgroundColor: '#1062FE',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans_500Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    marginTop: 15
  }
});

const Home = ({navigation}) => (
  <View style={styles.center}>
    <ScrollView style={styles.scroll}>
      <Image
        style={styles.image}
        source={require('../images/logo.jpg')}
      />
      <Text style={styles.title}>1122-AI</Text>
      <Text style={styles.content}>
        Stuck in an Emergency? Get help right away!
      </Text>
     
    </ScrollView>
  </View>
);

export default Home;
