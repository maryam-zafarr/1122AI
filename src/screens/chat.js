import React from 'react';
import { useEffect, useState, useContext } from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
// import Config from 'react-native-config';
import AsyncStorage from "@react-native-async-storage/async-storage";
const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF'
  },
  innerContainer: {
    width: '100%',
    height: '100%'
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 5
  },
  messageContainer: {
    flexDirection: 'column',
    marginTop: 10,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    borderRadius:10
  },
  waText: {
    fontFamily: 'IBMPlexSans_500Medium',
    backgroundColor: '#E5E5E5',
    padding: 10,
    alignSelf: 'flex-start',
    maxWidth: '85%',
    borderRadius:10
  },
  myText: {
    fontFamily: 'IBMPlexSans_500Medium',
    borderRadius:10,
    backgroundColor: '#FF5555',
    color:'white',
    padding: 10,
    alignSelf: 'flex-end',
    maxWidth: '80%'
  },
  inputContainer: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 10,
    justifyContent: 'flex-end',
    flex:1,
  },
  textInput: {
    fontFamily: 'IBMPlexSans_500Medium',
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 16,
    elevation: 0,
    paddingRight: 10,
    marginBottom: 10,
  },
  // submitButton: {
  //   fontFamily: 'IBMPlexSans_500Medium',
  //   position: 'absolute',
  //   right: 24,
  //   bottom: 47,
  //   width: 80,
  //   height: 100,
  //   top:25,
  // },
  button: {
    backgroundColor: '#FF5555',
    borderRadius: 5,
    width: '100%',
    height:38
  },
  textStyle: {
    color: '#fff',
    fontFamily: 'IBMPlexSans_500Medium',
    position:'absolute',
    right: 22,
    top:6
  }
});

// let serverUrl = Config.STARTER_KIT_SERVER_URL;
// if (serverUrl.endsWith('/')) {
//   serverUrl = serverUrl.slice(0, -1)
// }
// const serverUrl ='https://1122-ai-impressive-hyena-dh.au-syd.mybluemix.net';
// 1122-ai-agile-mandrill-rh.au-syd.mybluemix.net
const serverUrl ='https://1122-ai-agile-mandrill-rh.au-syd.mybluemix.net';

const Message = (props) => {
  const style = props.fromInput ? styles.myText : styles.waText;

  return (
    <View style={styles.messageContainer}>
      <Text style={style}>{props.text}</Text>
    </View>
  );
};

const Chat = function ({route, navigation }) {
  const [input, setInput] = React.useState('');
  const [session, setSession] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const getSession = () => {
    return fetch(`${serverUrl}/api/session`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        } else {
          return response.text();
        }
      })
      .then(sessionId => {
        setSession(sessionId);
        return sessionId;
      })
  };

  const fetchMessage = (payload) => {
    return fetch(`${serverUrl}/api/message`, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  }

  const handleMessageResponse = (response) => {
    if (!response.ok) {
      throw new Error(response.statusText || response.message || response.status);
    } else {
      return response.json().then(response => {
        addMessages(response.generic);
      })
    }
  }

  const sendMessage = () => {
    const payload = {
      text: input.trim(),
      sessionid: session
    };

    addMessages([{ text: input }], true);

    setInput('');

    fetchMessage(payload)
      .then(handleMessageResponse)
      .catch(e => {
        getSession()
          .then((sessionId) => {
            return fetchMessage({
              text: payload.text,
              sessionid: sessionId
            });
          })
          .then(handleMessageResponse)
          .catch(err => {
            console.log(err)
            addMessages([{
              text: 'ERROR: Please try again. If the poblem persists contact an administrator.'
            }]);
          });
      });
  };

  const addMessages = (messages, fromInput) => {
    const result = messages.map((r, i) => {
      return {
        text: r.text,
        fromInput: fromInput
      };
    });

    setMessages(msgs => [
      ...msgs,
      ...result
    ]);
  };

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      getSession();
    })
  }, []);
  let databody = {
    // phoneNumber: '0334-5674422',
    phoneNumber: '0338-5203311',
    name:"Bushra Muqaddas",
    transcript: "Oh my god please help",
    typeOfEmergency:"Fire",
    description: "Fire. smoke",
    livesAtRisk: "2",
    status: "Ongoing",
    time: "11:35 PM",
    latitude: 33.6428116,
    longitude: 72.9904141,
    _id: `anonymous_IBMuid-${session}`
  }
  fetch('http://10.7.150.41:3001/session', {
    method: 'POST',
    body: JSON.stringify(databody),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(res => res.json());
  return (
    
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={styles.outerContainer}>
      {/* <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior='height'
        keyboardVerticalOffset={Platform.select({
          ios: 78,
          android: 80
        })} > */}
        
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        {messages.map((message, i) => {
            message.key = `${(new Date()).getTime()}-${i}`;
            return <Message {...message} />
          })}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={sendMessage}
            returnKeyType='send'
            enablesReturnKeyAutomatically={true}
            placeholder='Type a message...'
            blurOnSubmit={false}
          />
          <View style={styles.submitButton}>
            {/* {input !== '' && <Button style={styles.button} title='Send' onPress={sendMessage} />} */}
            {input !== '' && <TouchableOpacity style={styles.button} onPress={sendMessage}>
              <Text style={styles.textStyle}></Text></TouchableOpacity>}
          </View>
        </View>
      {/* </KeyboardAvoidingView> */}
      </View>
      </ScrollView>
  );
};

export default Chat;
