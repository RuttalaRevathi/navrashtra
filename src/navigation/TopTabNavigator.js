import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, View, ActivityIndicator} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getTopMenuDataAction from '../redux/actions/getTopMenuDataAction';
import CategoryScreen from '../screens/Category';
import EmptyScreen from '../components/EmptyScreen';
import Home from '../screens/Home';
import { whitecolor, redcolor, commonstyles, blackcolor } from '../styles/commonstyles';
import PhotoGallery from '../screens/PhotoGallery';
import Videos from '../screens/Videos';
import Webstories from '../screens/Webstories';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const dispatch = useDispatch();
  const menuData = useSelector((state) => state.topMenuDataReducer.topMenuData) || [];

  useEffect(() => {
    dispatch(getTopMenuDataAction());
  }, [dispatch]);

  const mergedArray = [];
  menuData.forEach(item => {
    if (item.subItems) {
      mergedArray.push(item);
      item.subItems.forEach(subItem => {
        mergedArray.push({
          ...subItem,
        });
      });
    } else {
      mergedArray.push(item);
    }
  });

  function CategoryWrapper({ route }) {
    const { item } = route.params;
    return (
      <CategoryScreen isTopNavigation={true} item={item} />
    )
  }

  if (mergedArray.length === 0) {
    return <EmptyScreen message="No categories available" />;
  }

  return (
    <TopTab.Navigator
      initialRouteName="Home"
      detachInactiveScreens={false}
      screenOptions={{
        lazy: true,
        lazyPlaceholder: () => <View style={commonstyles.spinnerView}><ActivityIndicator size={'small'} color={blackcolor} /></View>,
        lazyPreloadDistance: 0,
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: { backgroundColor: redcolor },
        tabBarActiveTintColor: redcolor,
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: { fontSize: 16, fontFamily: 'Mandali-Bold', fontWeight: '700' },
        tabBarStyle: {
          backgroundColor: whitecolor,
          height: 50,
        },
        tabBarItemStyle: {
          width: 'auto',
          alignItems: 'flex-start',
          paddingHorizontal: 5,
        },
      }}
    >
      {/* Home Tab */}
      <TopTab.Screen
        key="Home"
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../Assets/Images/home.png')} 
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />

      {/* Other Tabs */}
      {mergedArray.map((item) => (
          <TopTab.Screen
            key={item.title}
            name={item.title}
            initialParams={{ item }}
            component={
              item.title === 'व्हिडिओ'
                ? Videos:
                item.title === 'फोटो'
                ? PhotoGallery:
                item.title ==='वेब स्टोरीज'
                ? Webstories
                : CategoryWrapper
            }
            options={{
              tabBarLabel: item.title,
            }}
          />
        ))}
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
