import React, {useState, createRef, useContext} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import Home from './home';
import Chat from './chat';
// import { Context } from '../../Context';
import AsyncStorage from "@react-native-async-storage/async-storage";
const UserInfo = ({navigation}) => {
    const [userName, setUserName] = useState('');
  // const [name, phoneNumber] = useContext(Context);
    // const [userName, setUserName] = name;
    const [phone, setPhone] = useState('');
    // const [phone, setPhone] = phoneNumber;
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

    const phoneInputRef = createRef();
    const handleSubmitPress = () => {
        setErrortext('');
        if (!userName) {
          alert('Please fill Name');
          return;
        }
        if (!phone) {
          alert('Please add Phone Number');
          return;
        }
        setLoading(true);
        // let dataToSend = {name: userName, phoneNumber: phone};
        // let formBody = [];
        // for (let key in dataToSend) {
        //   let encodedKey = encodeURIComponent(key);
        //   let encodedValue = encodeURIComponent(dataToSend[key]);
        //   formBody.push(encodedKey + '=' + encodedValue);
        // }
        // formBody = formBody.join('&');
     
        // fetch('http://192.168.10.3:3001/user', {
        //   method: 'POST',
        //   body: dataToSend,
        //   headers: {
        //     //Header Defination
        //     'Content-Type':
        //     'application/json',
        //   },
        // })
        //   .then((response) => response.json())
        //   .then((responseJson) => {
        //     //Hide Loader
        //     setLoading(false);
        //     console.log(responseJson);
        //     // If server response message same as Data Matched
        //     if (responseJson.status === 'success') {
        //       AsyncStorage.setItem('user_phone', responseJson.data.phoneNumber);
        //     } else {
        //       setErrortext(responseJson.msg);
        //       console.log('Please check your name or phone number');
        //     }
        //   })
        //   .catch((error) => {
        //     //Hide Loader
        //     setLoading(false);
        //     console.error(error);
        //   });
      AsyncStorage.setItem('user_phone', phone);
      AsyncStorage.setItem('user_name', userName);
      navigation.navigate('Home',{
        data: {
          name: userName, 
        userPhone: phone
        }
        });
      };
      return (
        <View style={styles.mainBody}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <View>
              <KeyboardAvoidingView enabled>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../images/logo.jpg')}
                    style={{
                      width: '50%',
                      height: 100,
                      resizeMode: 'contain',
                      margin: 30,
                    }}
                  />
                </View>
                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(UserName) =>
                      setUserName(UserName)
                    }
                    placeholder="Enter Name" 
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    keyboardType="default"
                    returnKeyType="next"
                    onSubmitEditing={() =>
                        phoneInputRef.current &&
                        phoneInputRef.current.focus()
                    }
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                  />
                </View>
                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(UserPhone) =>
                      setPhone(UserPhone)
                    }
                    placeholder="Enter Phone Number" //12345
                    placeholderTextColor="#8b9cb5"
                    keyboardType="phone-pad"
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                    secureTextEntry={true}
                    underlineColorAndroid="#f000"
                    returnKeyType="next"
                  />
                </View>
                {errortext != '' ? (
                  <Text style={styles.errorTextStyle}>
                    {errortext}
                  </Text>
                ) : null}
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={handleSubmitPress}>
                  <Text style={styles.buttonTextStyle}>SUBMIT</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </View>
      );
    };
    export default UserInfo;
     
    const styles = StyleSheet.create({
      mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignContent: 'center',
      },
      SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
      },
      buttonStyle: {
        backgroundColor: 'red',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
      inputStyle: {
        flex: 1,
        color: 'black',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'black',
      },
      registerTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
      },
      errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
      },
    });