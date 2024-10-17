/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/redux/store';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import getSliderAction from './src/redux/actions/getSliderAction';
import getLatestNewsAction from './src/redux/actions/getLatestNewsAction';
import getVideoAction from './src/redux/actions/getVideoAction';
import getPhotoGalleryAction from './src/redux/actions/getPhotoGalleryAction';
import getTopMenuDataAction from './src/redux/actions/getTopMenuDataAction';
import SplashScreen from 'react-native-splash-screen';
import { off_white } from './src/styles/commonstyles';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';

const App = () => {
  const [isConnected, setIsConnected] = useState(null);
  const [connectionType, setConnectionType] = useState(null);

  useEffect(() => {
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

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={off_white} />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
