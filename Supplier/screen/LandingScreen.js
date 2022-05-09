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
  TouchableOpacity
} from 'react-native';
import CYCLINDER_LOGO from '../assest/gas_tank.png';

const LandingScreen = ({navigation }) => {
  return (
    <ScrollView style={styles.splashFlexGrow}>
      <View style={styles.splashBlueImageContainer}>
          <Image source={CYCLINDER_LOGO}/>
          <Text style={styles.text1}>Gas App</Text>
          <Text style={styles.text2}>You order it, we deliver it.</Text>
          <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('SelectCustomer')
          }>
            <Text style={styles.buttonText}> Continue </Text>
          </TouchableOpacity>
      </View>
      <View style={styles.flexBottom}>
        <View style={styles.row}>
          <Text style={styles.text3}
          onPress={() => navigation.navigate('SupplierRegister')}>Register as a Supplier{"  "}</Text>
          <Text style={styles.text3}>  |  </Text>
          <Text style={styles.text3}
          onPress={() => navigation.navigate('CustomerRegister')}>{"  "}Register as a Customer</Text>
        </View> 
      </View>
    </ScrollView>
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
    marginTop: "20%",
  },
  text1: {
    fontSize: 50,
    textAlign: 'center',
    color: "#000000",
    fontWeight: 'bold',
    marginTop: 20,
  },
  text2: {
    fontSize: 14,
    textAlign: 'center',
    color: "#787878",
  },
  text3: {
    fontSize: 14,
    textAlign: 'center',
    color: "#808080",
  },
  button: {
    backgroundColor: '#167FFC',
    borderRadius: 10,
    padding: 12,
    width: "60%",
    height: 60,
    marginTop: '20%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  flexBottom:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#FFFFFF",
    padding: 8,
    marginTop: "30%",
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
  },

});

export default LandingScreen;