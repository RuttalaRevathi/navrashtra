/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, Text, Platform, StyleSheet} from 'react-native';
import {blackcolor, redcolor, whitecolor} from '../styles/commonstyles';
import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Topics from '../screens/Topics';
import ShortsScreen from '../screens/Shorts';
import PhotoGallery from '../screens/PhotoGallery';
import Videos from '../screens/Videos';
import LatestNews from '../screens/LatestNews';
import PhotoArticle from '../screens/PhotoArticle';
import VideoArticle from '../screens/VideoArticle';
import AuthorScreen from '../screens/Author';
import Details from '../screens/Details';

const Tab = createBottomTabNavigator();
const LNStack = createStackNavigator();
const PTStack = createStackNavigator();
const VDStack = createStackNavigator();

function LNStackScreen() {
  return (
    <LNStack.Navigator>
      <LNStack.Screen name="Latest" component={LatestNews} options={{headerShown: false}} />
      <LNStack.Screen name="Author" component={AuthorScreen} options={{headerShown: false}} />
      <LNStack.Screen name="Details" component={Details} options={{headerShown: false}} />
      <LNStack.Screen name="Topics" component={Topics} options={{headerShown: false}} />
    </LNStack.Navigator>
  );
}

function PhotoStackScreen() {
  return (
    <PTStack.Navigator>
      <PTStack.Screen name="Photos" component={PhotoGallery} options={{headerShown: false}} />
      <PTStack.Screen name="PhotoArticle" component={PhotoArticle} options={{headerShown: false}} />
      <PTStack.Screen name="Author" component={AuthorScreen} options={{headerShown: false}} />
      <PTStack.Screen name="Details" component={Details} options={{headerShown: false}} />
      <PTStack.Screen name="Topics" component={Topics} options={{headerShown: false}} />
    </PTStack.Navigator>
  );
}

function VideoStackScreen() {
  return (
    <VDStack.Navigator>
      <VDStack.Screen name="Videos" component={Videos} options={{headerShown: false}} />
      <VDStack.Screen name="VideoArticle" component={VideoArticle} options={{headerShown: false}} />
      <VDStack.Screen name="Author" component={AuthorScreen} options={{headerShown: false}} />
      <VDStack.Screen name="Details" component={Details} options={{headerShown: false}} />
      <VDStack.Screen name="Topics" component={Topics} options={{headerShown: false}} />
    </VDStack.Navigator>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: redcolor,
        tabBarInactiveTintColor: whitecolor,
        style: {backgroundColor: 'rgba(52, 52, 52, 0.8)'},
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          fontFamily: 'TTLogo',
        },
        tabBarItemStyle: {width: 100, height: Platform.OS === 'android' ? 60 : 85},
        tabBarStyle: {
          backgroundColor: blackcolor,
          height: Platform.OS === 'android' ? 60 : 85,
        },
        tabBarOptions: {
          showLabel: true,
        },
      })}>
      <Tab.Screen
        name="TopTabs"
        component={HomeStackNavigator}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.reset({
              index: 0,
              routes: [{name: 'TopTabs', params: {screen: 'Home'}}],
            });
          },
        })}
        options={{
          headerShown: false,
          tabBarLabel: 'HOME',
          tabBarLabelStyle: styles.tabBottomItemText,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.tabBarIcon,
                {
                  tintColor: focused ? redcolor : whitecolor,
                },
              ]}
              source={require('../Assets/Images/home.png')}
            />
          ),
          tabBarActiveTintColor: redcolor,
          tabBarInactiveTintColor: whitecolor,
        }}
      />

      <Tab.Screen
        name="LNStack"
        component={LNStackScreen}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.reset({
              index: 0,
              routes: [{name: 'LNStack'}],
            });
          },
        })}
        options={{
          headerShown: false,
          tabBarLabel: 'LATEST',
          tabBarLabelStyle: styles.tabBottomItemText,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.tabBarIcon,
                {
                  tintColor: focused ? redcolor : whitecolor,
                },
              ]}
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
          tabBarIcon: () => (
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: whitecolor,
              }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: redcolor,
                  }}
                  source={require('../Assets/Images/favicon1.png')}
                />
                <Text
                  style={{color: redcolor, fontSize: 8.5, fontFamily: 'bold'}}>
                  SHORTS
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PTStack"
        component={PhotoStackScreen}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.reset({
              index: 0,
              routes: [{name: 'PTStack'}],
            });
          },
        })}
        options={{
          headerShown: false,
          tabBarLabel: 'PHOTOS',
          tabBarLabelStyle: styles.tabBottomItemText,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.tabBarIcon,
                {
                  tintColor: focused ? redcolor : whitecolor,
                },
              ]}
              source={require('../Assets/Images/gallery.png')}
            />
          ),
          tabBarActiveTintColor: redcolor,
          tabBarInactiveTintColor: whitecolor,
        }}
      />
      <Tab.Screen
        name="VDStack"
        component={VideoStackScreen}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.reset({
              index: 0,
              routes: [{name: 'VDStack'}],
            });
          },
        })}
        options={{
          headerShown: false,
          tabBarLabel: 'VIDEOS',
          tabBarLabelStyle: styles.tabBottomItemText,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.tabBarIcon,
                {
                  tintColor: focused ? redcolor : whitecolor,
                },
              ]}
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

const styles = StyleSheet.create({
  tabBottomItemText: {
    fontFamily: 'Faustina',
    fontSize: 9,
    marginBottom: 12,
  },
  tabBarIcon: {
    width: 18,
    height: 18,
    marginTop: 6,
  },
});

export default BottomTabNavigator;
