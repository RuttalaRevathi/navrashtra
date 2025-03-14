/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import Details from '../../screens/Details';
import VideoArticle from '../../screens/VideoArticle';
import EmptyScreen from '../../components/EmptyScreen';
import CategoryScreen from '../../screens/Category';
import getTopMenuDataAction from '../../redux/actions/getTopMenuDataAction';
import PhotoGallery from '../../screens/PhotoGallery';
import Videos from '../../screens/Videos';
import TopTabNavigator from '../TopTabNavigator';
import Webstories from '../../screens/Webstories';
import AuthorScreen from '../../screens/Author';
import PhotoArticle from '../../screens/PhotoArticle';
import Settings from '../../screens/Settings';
import AboutUs from '../../screens/contactScreens/AboutUs';
import ContactUs from '../../screens/contactScreens/ContactUs';
import PrivacyPolicy from '../../screens/contactScreens/PrivacyPolicy';
import Terms from '../../screens/contactScreens/Terms';
import Topics from '../../screens/Topics';

const Stack = createStackNavigator();

const HomeStackNavigator = ({menuData}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopMenuDataAction());
  }, [dispatch]);

  menuData = useSelector(state => state.topMenuDataReducer.topMenuData) || [];

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
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      {mergedArray.length > 0 ? (
        mergedArray.map((item, index) => (
          <Stack.Screen
            key={item.title}
            name={index === 0 ? 'Home' : item.title}
            component={
              index === 0
                ? TopTabNavigator
                : () => <CategoryScreen item={item} />
            }
          />
        ))
      ) : (
        <Stack.Screen name="EmptyScreen" component={EmptyScreen} />
      )}
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Webstories" component={Webstories} />
      <Stack.Screen name="Author" component={AuthorScreen} />
      <Stack.Screen name="Videos" component={Videos} />
      <Stack.Screen name="VideoArticle" component={VideoArticle} />
      <Stack.Screen name="Photos" component={PhotoGallery} />
      <Stack.Screen name="PhotoArticle" component={PhotoArticle} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="About" component={AboutUs} />
      <Stack.Screen name="Contact" component={ContactUs} />
      <Stack.Screen name="Privacy" component={PrivacyPolicy} />
      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="Topics" component={Topics} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
