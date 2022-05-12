import React,{useState,useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import CYCLINDER_LOGO from '../assest/customer_pic.png';
import Supplier_PIC from '../assest/on_way.png';
import LOGOUT from '../assest/tab_icon_more.png';


const SupplierMap = ({navigation }) => {

  const mapRef = useRef();
  const [focusedLocation, setFocusedLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const markers = [
    {
      title: "My Location",
      coordinates: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      title: "Location 1",
      coordinates: {
        latitude: 37.5245,
        longitude: -122.4324,
      },
    },
    {
      title: "Location 2",
      coordinates: {
        latitude: 50.78825,
        longitude: -110.4324,
      },
    },
  ];

  return (
    <SafeAreaView style={styles.splashFlexGrow}>
      <View style={styles.splashBlueImageContainer}>
          <MapView
          region={focusedLocation}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsMyLocationButton={true}
          ref={mapRef}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
            {markers.map((marker,index) => (
              <MapView.Marker coordinate={marker.coordinates} title={marker.title} draggable>
                {index === 0 && <Image source={Supplier_PIC} />}
                {index === 1 && <Image source={CYCLINDER_LOGO} />}
                {index === 2 && <Image source={CYCLINDER_LOGO} />}
              </MapView.Marker>
            ))}
             
          </MapView>
          <View style={styles.topBar}>
            <View style={styles.left_align}
            onStartShouldSetResponder={() => navigation.navigate('SupplierLogin')}>
            <TouchableOpacity>
            <Image source={LOGOUT} size={28} />
          </TouchableOpacity> 
            </View>
          
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  splashFlexGrow: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF", 
  },
  splashBlueImageContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashBlueImageContainer3: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "10%",
  },
  splashBlueImageContainer2: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'flex-start',
    marginLeft: "10%",
  },
  text1: {
    fontSize: 35,
    textAlign: 'center',
    color: "#000000",
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: "10%"
  },
  text2: {
    fontSize: 15,
    textAlign: 'center',
    color: "#787878",
  },
  text3: {
    fontSize: 14,
    color: "#808080",
  },
  text4: {
    fontSize: 14,
    color: "#808080",
    marginTop:"10%",
    marginBottom: "15%"
  },
  supplies: {
    width: "45%",
    height: 200,
    backgroundColor: "#FFF5F6",
    margin: 5,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  customer: {
    width: "45%",
    height: 200,
    backgroundColor: "#F3FBFF",
    margin: 5,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  datainput: {
    width:"100%",
    padding: 10,
    alignItems: 'center'
  },
  input: {
    width:"90%",
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#DCDCDC',
    borderRadius: 5,
    color: "#000000",
  },
  button: {
    backgroundColor: '#167FFC',
    borderRadius: 10,
    padding: 12,
    width: 280,
    height: 50,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  bgPic: {
    backgroundColor: "#F3FBFF",
    borderRadius: 100,
    padding: 20,
    margin: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  topBar: {
    position: 'absolute',
    width: "100%",
    top: 10,
    zIndex: 99,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'flex-start'
  },
  left_align: {
    width: 30,
    height: 30,
    backgroundColor: "#FFFFFF",
    padding: 5,
    borderRadius: 100,
  },

});

export default SupplierMap;