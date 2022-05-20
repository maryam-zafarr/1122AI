import React, { useRef } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import Constants from "expo-constants";
import { useEffect } from 'react/cjs/react.production.min';
// import { GOOGLE_API_KEY } from '@env';
// import { WebView } from 'react-native-webview';
// import { HERE_APIKEY } from '@env';
// import Geolocation from '@react-native-community/geolocation';


const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

// const hereApikey = Config.HERE_APIKEY;
// const hereApikey = HERE_APIKEY;

class Map extends React.Component {
  state = {
    mapRegion: {
      latitude: 33.687563439131296,
      longitude: 73.09160116434741,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    hasLocationPermissions: false,
    locationResult: null,
    location_: null,
  };

  componentDidMount(){
    this.getLocationAsync();
  };
  // useEffect(() => {
  //   this.getLocationAsync();
  // })

  handleMapRegionChange = (mapRegion) => {
    this.setState({ mapRegion });
  };

  async getLocationAsync() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      this.setState({ hasLocationPermissions: true });
      //  let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      const location = await Location.getCurrentPositionAsync({});
      this.setState({ locationResult: JSON.stringify(location) });
      this.setState({ location_: location.coords });
      console.log(this.state.location_);
      // Center the map on the location we just fetched.
      this.setState({
        mapRegion: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    } else {
      alert("Location permission not granted");
    }
  }
  render() {
    return <View style={styles.mapContainer}>
    <MapView style={styles.map}
      region={this.state.mapRegion}
        onRegionChange={this.handleMapRegionChange}>
        <Marker
      coordinate={{latitude: this.state.mapRegion.latitude, longitude:this.state.mapRegion.longitude}}
      title="Current Location"
    />
    </MapView>
  </View>
  }
  
};

export default Map;
//MONGO_URL = mongodb+srv://maryamzafar29:swihogoc@1122-ai.t9upk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//realm id: 
//1122-ai_realmapp-drsto