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


const SupplierMap = ({navigation }) => {

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

});

export default SupplierMap;