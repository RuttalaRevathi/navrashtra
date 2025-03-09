import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getTopMenuDataAction from '../redux/actions/getTopMenuDataAction';
import CategoryScreen from '../screens/Category';
import EmptyScreen from '../components/EmptyScreen';
import Home from '../screens/Home';
import { whitecolor, redcolor } from '../styles/commonstyles';
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

  return (
    <TopTab.Navigator
      initialRouteName="Home"
      screenOptions={{
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
      {mergedArray.length > 0 ? (
        mergedArray.map((item) => (
          <TopTab.Screen
            key={item.title}
            name={item.title}
            component={
              item.title === 'व्हिडिओ'
                ? Videos:
                item.title === 'फोटो'
                ? PhotoGallery:
                item.title ==='वेब स्टोरीज'
                ? Webstories
                : () => <CategoryScreen isTopNavigation={true} item={item} />
            }
            options={{
              tabBarLabel: item.title,
            }}
          />
        ))
      ) : (
        <TopTab.Screen
          name="Home"
          component={EmptyScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../Assets/Images/home.png')} 
                style={{ width: 20, height: 20, top: 5 }}
              />
            ),
          }}
        />
      )}
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
