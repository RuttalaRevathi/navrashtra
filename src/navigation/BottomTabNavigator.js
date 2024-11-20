/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text, Platform} from 'react-native';
import { blackcolor, redcolor, whitecolor, } from '../styles/commonstyles';
import ShortsScreen from '../screens/Shorts';
import TopTabNavigator from './TopTabNavigator';
import PhotoGallery from '../screens/PhotoGallery';
import Videos from '../screens/Videos';
import { navigate } from '../navigation/NavigationService';
import LatestNews from '../screens/LatestNews';
import HomeStackNavigator from './stack-navigators/HomeStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const topTabNavigatorRef = React.useRef(null);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: redcolor,
        tabBarInactiveTintColor: whitecolor,
        style: { backgroundColor: 'rgba(52, 52, 52, 0.8)' },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          fontFamily: 'TTLogo',
        },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: {
          backgroundColor: blackcolor,
          height: Platform.OS === 'android' ? 55 : 85,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        tabBarOptions: {
          showLabel: true,
        },
      })}
    >
    <Tab.Screen
  name="TopTabs"
  component={HomeStackNavigator}
  listeners={({ navigation }) => ({
    tabPress: (e) => {
      e.preventDefault(); // Prevent default behavior

      // Reset the TopTabNavigator to the Home screen
      navigation.reset({
        index: 0,
        routes: [{ name: 'TopTabs', params: { screen: 'Home' } }],
      });
    },
  })}
  options={{
    headerShown: false,
    tabBarLabel: 'HOME',
    tabBarLabelStyle: {
      fontFamily: 'Faustina',
      fontSize: 10,
    },
    tabBarIcon: ({ focused }) => (
      <Image
        style={{
          height: 20,
          width: 20,
          tintColor: focused ? redcolor : whitecolor,
          top: 5,
        }}
        source={require('../Assets/Images/home.png')}
      />
    ),
    tabBarActiveTintColor: redcolor,
    tabBarInactiveTintColor: whitecolor,
  }}
/>


      <Tab.Screen
        name="Latest"
        component={LatestNews}

        options={{
          headerShown: false,
          tabBarLabel: 'LATEST',
          tabBarLabelStyle: {
            fontFamily: 'Faustina',
            fontSize: 10,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? redcolor : whitecolor,
                top: 5,
              }}
              source={require('../Assets/Images/paper.png')}
            />
          ),
          tabBarActiveTintColor: redcolor,
          tabBarInactiveTintColor: whitecolor,
        }}
      />
      <Tab.Screen
        name="Shorts"
        component={ShortsScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center',  }}>
              <View style={{
                transform: [{ rotate: '45deg' }],
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <View

                  style={{
                    width: 41,
                    height: 41,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: whitecolor
                  }}
                >
                  <View
                    style={{
                      transform: [{ rotate: '-45deg' }],
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: redcolor,
                      }}
                      source={require('../Assets/Images/favicon1.png')}
                    />
                    <Text style={{ color: redcolor, fontSize: 8.5,fontFamily:'bold' }}>SHORTS</Text>
                  </View>
                </View>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Photos"
        component={PhotoGallery}
        options={{
          headerShown: false,
          tabBarLabel: 'PHOTOS',
          tabBarLabelStyle: {
            fontFamily: 'Faustina',
            fontSize: 10,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? redcolor : whitecolor,
                top: 5,
              }}
              source={require('../Assets/Images/gallery.png')}
            />
          ),
          tabBarActiveTintColor: redcolor,
          tabBarInactiveTintColor: whitecolor,
        }}
      />
      <Tab.Screen
        name="Videos"
        component={Videos}
        options={{
          headerShown: false,
          tabBarLabel: 'VIDEOS',
          tabBarLabelStyle: {
            fontFamily: 'Faustina',
            fontSize: 10,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? redcolor : whitecolor,
                top: 5,
              }}
              source={require('../Assets/Images/video.png')}
            />
          ),
          tabBarActiveTintColor: redcolor,
          tabBarInactiveTintColor: whitecolor,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
