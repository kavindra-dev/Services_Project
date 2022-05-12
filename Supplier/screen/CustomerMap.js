import React from 'react';
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
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CYCLINDER_LOGO from '../assest/gas_tank.png';
import Supplier_PIC from '../assest/supplier_option.png';


const CustomerMap = ({navigation }) => {

  return (
    <SafeAreaView style={styles.splashFlexGrow}>
      <View style={styles.splashBlueImageContainer}>
          <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}/>
      </View>
      <View style={styles.splashBlueImageContainer2}>
          <View style={styles.splashBlueImageContainer3}>
          <Image source={Supplier_PIC}
        style={styles.bgPic}/>
          </View>
       
      </View>
      <Text style={styles.text1}>Waiting for Supplier to Accept your Order</Text>
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
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF5F6",
    borderRadius: 100,
    marginTop: 10
  },
  splashBlueImageContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 20,
    textAlign: 'left',
    color: "#000000",
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 10,
    
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
    width: 85,
    height: 85,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height:"100%"
  },

});

export default CustomerMap;