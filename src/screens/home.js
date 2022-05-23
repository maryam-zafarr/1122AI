import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, Linking } from 'react-native';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
// import * as Linking from "expo-linking";


const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  center: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
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
  },
  content: {
    fontFamily: 'IBMPlexSans_700Bold',
    color: '#323232',
    fontSize: 25,
    marginLeft:35
  },
  CallContent: {
    flex:1,
    fontFamily: 'IBMPlexSans_400Regular',
    color: '#323232',
    margin: 40,
    fontSize: 20,
    justifyContent:'space-around'
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
  },
  PhoneStyle: {
    flexDirection: "row",
    alignItems: 'center',
    // backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#fff',
    alignSelf: 'flex-start',
    marginLeft:20
  },
});

const Home = ({ route, navigation }) => {
  const { data } = route.params;
  console.log(data.name);
  console.log(data.userPhone);
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
  const phoneNumber = '+1 703-691-6924';
  const onCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
    console.log("Call button pressed");
  }
  const goToChat = () => {
    navigation.navigate('Chat');
  }
  return (
    // <View style={{backgroundColor:'white', justifyContent: 'center',alignContent:'center', flex:1}}>
      
    //   <View style={{alignItems: 'center', flex:1}}>
    //     <Image
    //     style={{
    //       width: '50%',
    //       height: 100,
    //       resizeMode: 'contain',
    //       margin: 30,
    //      }}
    //      source={require('../images/logo.jpg')}
    //    />
    //   </View>
    //   <View style={{flex:2}}>
    //     <Text style={styles.title}>1122-AI</Text>
    //     <Text style={styles.content}>
    //      Stuck in an Emergency?</Text>
    //   </View>
    //   <View style={{backgroundColor:'black', flex:6 }}>
    //     <View style={{backgroundColor:'green'}}>
    //     <TouchableOpacity style={styles.PhoneStyle} onPress={onCall}>
    //            <Image source={require('../images/phone4.png')} resizeMode='contain' style={{flex:.4 }}   />
    //         <Text style={styles.CallContent}>Call 1122-AI</Text>
            
    //       </TouchableOpacity>
          
    //     </View>
    //     <View style={{height:50}}><Text>OR</Text></View>
      
    //     <TouchableOpacity style={styles.PhoneStyle} onPress={goToChat}>
    //            <Image source={require('../images/message.png')} resizeMode='contain' style={{flex:.4 }}   />
    //          <Text style={styles.CallContent}>Message 1122-AI</Text>
    //       </TouchableOpacity>
     
    //   </View>
      
    // </View>
   
  <View style={styles.mainBody}>
    <ScrollView contentContainerStyle={{
              justifyContent: 'center',
        alignContent: 'center',
              flexDirection:'column',
            }}>
        <View style={{alignItems: 'center'}}>
        <Image
        style={{
          width: '50%',
          height: 100,
          resizeMode: 'contain',
          margin: 30,
        }}
        source={require('../images/logo.jpg')}
      />
     </View>
      <Text style={styles.title}>1122-AI</Text>
      <Text style={styles.content}>
        Stuck in an Emergency?
        </Text>
        {/* <View style={{marginLeft:20, backgroundColor:'green'}}> */}
        {/* <TouchableOpacity style={styles.PhoneStyle} activeOpacity={0.5} onPress={onCall}>
                <Image
              source={require('../images/phone4.png')}
              style={{
                height: 150,
                resizeMode: 'contain',
              }}
                />
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.PhoneStyle} onPress={onCall}>
              <Image source={require('../images/phone4.png')} resizeMode='contain' style={{flex:.4 }}   />
            <Text style={styles.CallContent}>Call 1122-AI</Text>
          </TouchableOpacity>
         
        {/* </View> */}
        {/* <View style={{marginLeft:20}}> */}
        <TouchableOpacity style={styles.PhoneStyle} onPress={goToChat}>
              <Image source={require('../images/message.png')} resizeMode='contain' style={{flex:.4 }}   />
            <Text style={styles.CallContent}>Message 1122-AI</Text>
          </TouchableOpacity>
        {/* </View> */}
     
    </ScrollView>
  </View>
  );
}

export default Home;
