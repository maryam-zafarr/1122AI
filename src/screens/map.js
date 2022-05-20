// import React, { useRef } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { WebView } from 'react-native-webview';
// // import { HERE_APIKEY } from '@env';
// import Geolocation from '@react-native-community/geolocation';

// const styles = StyleSheet.create({
//   mapContainer: {
//     flex: 1
//   }
// });

// // const hereApikey = Config.HERE_APIKEY;
// // const hereApikey = HERE_APIKEY;
// const hereApikey = 'HL6ju694BMIBKyt7buuwpghmiEeba1wkOCtUWZMocxI';

// const Map2 = () => {
//   const webView = useRef(null);

//   const onMessage = (event) => {
//     const message = JSON.parse(event.nativeEvent.data);

//     if (message.status && message.status === 'initialized') {
//       Geolocation.getCurrentPosition((position) => {
//         sendMessage(position);
//       });
//     }
//   };

//   const sendMessage = (data) => {
//     const message =
//       `(function() {
//         document.dispatchEvent(new MessageEvent('message', {data: ${JSON.stringify(data)}}));
//       })()`;

//     webView.current.injectJavaScript(message);
//   }

//   const sourceUri = (Platform.OS === 'android' ? 'file:///android_asset/' : '') + 'Web.bundle/loader.html';
//   const injectedJS = `
//     if (!window.location.search) {
//       var link = document.getElementById('progress-bar');
//       link.href = './site/here.html?apikey=${hereApikey}';
//       link.click();
//     }
//   `;

//   return (
//     <View style={styles.mapContainer}>
//       <WebView
//         injectedJavaScript={injectedJS}
//         source={{ uri: sourceUri }}
//         javaScriptEnabled={true}
//         originWhitelist={['*']}
//         allowFileAccess={true}
//         onMessage={onMessage}
//         ref={webView}
//       />
//     </View>
//   );
// };

// export default Map2;

// import React, { useRef } from 'react';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import * as Location from "expo-location";
// import { Marker } from "react-native-maps";
// import Constants from "expo-constants";
// import { useEffect } from 'react/cjs/react.production.min';
// // import { GOOGLE_API_KEY } from '@env';
// // import { WebView } from 'react-native-webview';
// // import { HERE_APIKEY } from '@env';
// // import Geolocation from '@react-native-community/geolocation';


// const styles = StyleSheet.create({
//   mapContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });

// // const hereApikey = Config.HERE_APIKEY;
// // const hereApikey = HERE_APIKEY;

// class Map extends React.Component {
//   state = {
//     mapRegion: null,
//     hasLocationPermissions: false,
//     locationResult: null,
//   };

//   componentDidMount(){
//     this.getLocationAsync();
//   };
//   // useEffect(() => {
//   //   this.getLocationAsync();
//   // })

//   handleMapRegionChange = (mapRegion) => {
//     this.setState({ mapRegion });
//   };

//   async getLocationAsync() {
//     // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
//     const { status } = await Location.requestForegroundPermissionsAsync();
//     if (status === "granted") {
//       this.setState({ hasLocationPermissions: true });
//       //  let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
//       const location = await Location.getCurrentPositionAsync({});
//       this.setState({ locationResult: JSON.stringify(location) });
//       // Center the map on the location we just fetched.
//       this.setState({
//         mapRegion: {
//           latitude: location.coords.latitude,
//           longitude: location.coords.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         },
//       });
//     } else {
//       alert("Location permission not granted");
//     }
//   }
//   render() {
//     return <View style={styles.mapContainer}>
//     <MapView style={styles.map}
//       region={this.state.mapRegion}
//         onRegionChange={this.handleMapRegionChange}>
//         {/* <Marker coordinate={this.state.mapRegion} /> */}
//     </MapView>
//   </View>
//   }
  
// };

// export default Map;
