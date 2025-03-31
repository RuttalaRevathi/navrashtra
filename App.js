/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import getSliderAction from './src/redux/actions/getSliderAction';
import getLatestNewsAction from './src/redux/actions/getLatestNewsAction';
import getVideoAction from './src/redux/actions/getVideoAction';
import getPhotoGalleryAction from './src/redux/actions/getPhotoGalleryAction';
import getTopMenuDataAction from './src/redux/actions/getTopMenuDataAction';
import SplashScreen from 'react-native-splash-screen';
import {off_white} from './src/styles/commonstyles';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
import {Login} from './src/screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';

import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();

const App = () => {
  const [isConnected, setIsConnected] = useState(null);
  const [connectionType, setConnectionType] = useState(null);
  const [loginData, setLoginData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Registered screens:', Stack.Navigator);
    const fetchLoingUser = async () => {
      const data = await AsyncStorage.getItem('loginUserData');
      setLoginData(JSON.parse(data));
      setLoading(false);
    };
    fetchLoingUser();

    // Dispatch actions to fetch data
    store.dispatch(getSliderAction());
    store.dispatch(getLatestNewsAction());
    store.dispatch(getVideoAction());
    store.dispatch(getPhotoGalleryAction());
    store.dispatch(getTopMenuDataAction());

    // Subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener(state => {
      const newConnectionType = state.type;
      const newIsConnected = state.isConnected;

      if (!newIsConnected) {
        // Show toast when network is disconnected
        Toast.show({
          type: 'error',
          text1: 'There seems to be internet issues,',
          text2: 'Please check your network connection',
          position: 'bottom',
          bottomOffset: 40,
          autoHide: false, // Prevent auto-hiding to keep it visible
        });
      } else {
        // Hide toast when connected
        Toast.hide();
      }

      // Update state to keep track of the connection status
      setConnectionType(newConnectionType);
      setIsConnected(newIsConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const onGoogleButtonPress = async data => {
    setLoginData(data);
    await AsyncStorage.setItem('loginUserData', JSON.stringify(data));
  };

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={off_white} />
      <NavigationContainer>
      <RootStackNavigator loginData={loginData} onGoogleButtonPress={onGoogleButtonPress} />
        {/* {loading ? (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          <>
            
          </>
        )} */}
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default App;

export const RootStackNavigator = ({loginData, onGoogleButtonPress}) => {
  const isLoggedIn = loginData?.type === 'success';
  const navigation = useNavigation();

  useEffect(() => {
    console.log('Navigation State:', navigation.getState());
  }, [navigation]);

  return (
    <Stack.Navigator initialRouteName="Login">
      {isLoggedIn ? (
        <Stack.Screen name="DrawerNavigator" options={{headerShown: false}} component={DrawerNavigator} />
        ) : (
          <Stack.Screen name="Login" options={{headerShown: false}} 
          children={(props)=>
            <Login {...props} loginUserData={onGoogleButtonPress} />
          } 
          />
      )}
    </Stack.Navigator>
  )
}
