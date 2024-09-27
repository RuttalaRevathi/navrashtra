/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
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
import { StatusBar } from 'react-native';
import { off_white } from './src/styles/commonstyles';
import getAutomobileAction from './src/redux/actions/getAutomobileAction';
import getIndiaAction from './src/redux/actions/getIndiaAction';
import getMaharashtraAction from './src/redux/actions/getMaharashtraAction';
import getMumbaiAction from './src/redux/actions/getMumbaiAction';
import { getWorldAction } from './src/redux/actions/getWorldAction';
import getSportsAction from './src/redux/actions/getSportsAction';
import { getLifestyleAction } from './src/redux/actions/getLifestyleAction';
import { getSpecialAction } from './src/redux/actions/getSpecialAction';
import getMoviesAction from './src/redux/actions/getMoviesAction';
import { getViralAction } from './src/redux/actions/getViralAction';
import getBusinessAction from './src/redux/actions/getBusinessAction';
import getTechnologyAction from './src/redux/actions/getTechnologyAction';
import getReligionAction from './src/redux/actions/getReligionAction';
import { getCareerAction } from './src/redux/actions/getCareerAction';
import getPuneAction from './src/redux/actions/getPuneAction';
import NetInfo from '@react-native-community/netinfo';
import getNagpurAction from './src/redux/actions/getNagpurAction';

const App = () => {
  const [isConnected, setIsConnected] = useState(null);
  const [connectionType, setConnectionType] = useState(null);

  useEffect(() => {
    store.dispatch(getSliderAction());
    store.dispatch(getLatestNewsAction());
    store.dispatch(getVideoAction());
    store.dispatch(getPhotoGalleryAction());
    store.dispatch(getTopMenuDataAction());
    store.dispatch(getIndiaAction());
    store.dispatch(getMaharashtraAction());
    store.dispatch(getMumbaiAction());
    store.dispatch(getWorldAction());
    store.dispatch(getSportsAction());
    store.dispatch(getLifestyleAction());
    store.dispatch(getSpecialAction());
    store.dispatch(getMoviesAction());
    store.dispatch(getViralAction());
    store.dispatch(getBusinessAction());
    store.dispatch(getAutomobileAction());
    store.dispatch(getTechnologyAction());
    store.dispatch(getReligionAction());
    store.dispatch(getCareerAction());
    store.dispatch(getPuneAction());
    store.dispatch(getNagpurAction());


 // Network status check
// const unsubscribe = NetInfo.addEventListener(state => {
//   if (state.isConnected && !isConnected) {
//     setIsConnected(true);
//     Alert.alert('Network Connected', 'You are now connected to the internet.');
//   } else if (!state.isConnected && isConnected) {
//     setIsConnected(false);
//     Alert.alert('Network Disconnected', 'Please check your internet connection.');
//   }
// });

// return () => {
//   unsubscribe();
// };
// }, [isConnected]);
  },[]);
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={off_white} />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
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
