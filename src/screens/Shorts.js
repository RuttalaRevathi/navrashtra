/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  Easing,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { blackcolor, commonstyles, graycolor, off_white, whitecolor } from '../styles/commonstyles';
import ShortsComponent from '../components/ShortsComponent';
import { useSelector } from 'react-redux';
import { BaseUrl, LatestUrl } from '../utilities/urls';

const ShortsScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowHeight = Dimensions.get('window').height;
  const [latestNews, setLatestNewsData] = useState(null);

  const getLatestNewsAction = async () => {
    try {
      const response = await fetch(BaseUrl + LatestUrl);
      const responseJson = await response.json();
      setLatestNewsData(responseJson);
    } catch (error) {
      console.error('Error fetching getLatestNewsAction data:', error);
    }
  };
  const renderItemOne = ({ item, index }) => (
    <ShortsComponent
      item={item}
      index={index}
      propsdata={newlatestdata}
      navigation={navigation}
    />
  );
  useEffect(() => {
    getLatestNewsAction();
  }, []);
  const newlatestdata = Array.isArray(latestNews?.data) ? latestNews?.data : [];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: off_white}}>
     
      <View style={{padding: 12, backgroundColor: off_white}}>
      <Carousel
        data={newlatestdata}
        renderItem={renderItemOne}
        sliderHeight={windowHeight}
        itemHeight={windowHeight}
                vertical={true}
        onSnapToItem={(index) => setCurrentIndex(index)}
        
        animationOptions={{
          duration: 290, // Animation duration for slide transition
          easing: Easing.inOut(Easing.ease),
          isInteraction: false,
          useNativeDriver: true,

        }}

      />
      </View>
    </SafeAreaView>
  );
}


export default ShortsScreen;
