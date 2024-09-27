/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import Details from '../../screens/Details';
import PhotoArticle from '../../screens/PhotoArticle';
import VideoArticle from '../../screens/VideoArticle';
import EmptyScreen from '../../components/EmptyScreen';
import CategoryScreen from '../../screens/Category';
import BookmarkScreen from '../../screens/Bookmark';
import getTopMenuDataAction from '../../redux/actions/getTopMenuDataAction';
import PhotoGallery from '../../screens/PhotoGallery';
import Videos from '../../screens/Videos';
import TopTabNavigator from '../TopTabNavigator';
import DeeplinkingDetails from '../../screens/DeeplinkingDetails';
import Webstories from '../../screens/Webstories';

const Stack = createStackNavigator();

const HomeStackNavigator = ({ menuData }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopMenuDataAction());
  }, [dispatch]);

  menuData = useSelector((state) => state.topMenuDataReducer.topMenuData) || [];

  const mergedArray = [];
  menuData.forEach((item) => {
    if (item.subItems) {
      // Add the main item
      mergedArray.push(item);

      // Add each subItem as a separate item
      item.subItems.forEach((subItem) => {
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
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
    
      {mergedArray.length > 0 ? (
        mergedArray.map((item, index) => (
          <Stack.Screen
            key={item.title}
            name={index === 0 ? 'Home' : item.title}
            component={index === 0 ? TopTabNavigator : () => <CategoryScreen item={item} />}
          />
          
        ))
      ) : (
        <Stack.Screen name="EmptyScreen" component={EmptyScreen} />
      )}
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="DeeplinkingDetails" component={DeeplinkingDetails} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="PhotoArticle" component={PhotoArticle} />
      <Stack.Screen name="VideoArticle" component={VideoArticle} />
      <Stack.Screen name="Bookmark" component={BookmarkScreen} />
      <Stack.Screen name="Webstories" component={Webstories} />
      <Stack.Screen name="Photos" component={PhotoGallery} />
      <Stack.Screen name="Videos" component={Videos} />

    </Stack.Navigator>
  );
};

type Props = {
  menuData: Function,
  loading: Boolean,
};

export default HomeStackNavigator;
