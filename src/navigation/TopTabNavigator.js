import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getTopMenuDataAction from '../redux/actions/getTopMenuDataAction';
import CategoryScreen from '../screens/Category';
import EmptyScreen from '../components/EmptyScreen';
import Home from '../screens/Home';
import { blackcolor, whitecolor } from '../styles/commonstyles';
import PhotoGallery from '../screens/PhotoGallery';
import Videos from '../screens/Videos';
import Webstories from '../screens/Webstories';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const menuData = useSelector((state) => state.topMenuDataReducer.topMenuData) || [];

  useEffect(() => {
    dispatch(getTopMenuDataAction());
  }, [dispatch]);

  // Flatten menu data with subItems included
  const mergedArray = [];
  menuData.forEach(item => {
    if (item.subItems) {
      // Add the main item
      mergedArray.push(item);

      // Add each subItem as a separate item
      item.subItems.forEach(subItem => {
        mergedArray.push({
          ...subItem, // Include the parent title for reference
        });
      });
    } else {
      // If no subItems, add the main item as is
      mergedArray.push(item);
    }
  });


  return (
    <TopTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: { backgroundColor: blackcolor },
        tabBarActiveTintColor: blackcolor,
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: { fontSize: 16, fontFamily: 'Mandali-Bold' },
        tabBarStyle: {
          backgroundColor: whitecolor,
          height: 50,
        },
        tabBarItemStyle: {
          width: 'auto',
          alignItems: 'flex-start',
        },
      }}
    >
      {/* Home Tab */}
      <TopTab.Screen
        key="Home"
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '', // No label for the Home tab
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
                : () => <CategoryScreen item={item} />
                
                
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

type Props = {
  navigation: any, // Define type if using TypeScript
};

export default TopTabNavigator;
