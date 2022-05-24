import React from 'react';  
import { SafeAreaView,View } from 'react-native';  
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './screen/LandingScreen';
import SelectOption from './screen/SelectCustomer';
import CLogin from './screen/CustomerLogin';
import CRegister from './screen/CustomerRegister';
import SLogin from './screen/SupplierLogin';
import SRegister from './screen/SupplierRegister';
import SMAP from './screen/SupplierMap';
import DAddress from './screen/DeliverAddress';
import CMAP from './screen/CustomerMap';
import FPASS from './screen/ForgotPassword';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Landing}/>
        <Stack.Screen name="SelectCustomer" component={SelectOption} />
        <Stack.Screen name="CustomerLogin" component={CLogin} />
        <Stack.Screen name="CustomerRegister" component={CRegister} />
        <Stack.Screen name="SupplierLogin" component={SLogin} />
        <Stack.Screen name="SupplierRegister" component={SRegister} />
        <Stack.Screen name="SupplierMap" component={SMAP} />
        <Stack.Screen name="DeliverAddress" component={DAddress} />
        <Stack.Screen name="CustomerMap" component={CMAP} />
        <Stack.Screen name="ForgotPass" component={FPASS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
