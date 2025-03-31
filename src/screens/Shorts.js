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
  ActivityIndicator
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
  const [loading, setLoading] = useState(false);

  const getLatestNewsAction = async () => {
    setLoading(true);
    try {
      const response = await fetch(BaseUrl + LatestUrl);
      const responseJson = await response.json();
      setLatestNewsData(responseJson);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching getLatestNewsAction data:', error);
    } finally{
      setLoading(false);
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
console.log(newlatestdata)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: off_white}}>
      {loading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4' }}>
                    <ActivityIndicator size="large" color={blackcolor} />
                </View> : 
                <View style={{padding: 12, backgroundColor: off_white}}><Carousel
                layout={'stack'} layoutCardOffset={`5`}
        data={newlatestdata}
        renderItem={renderItemOne}
        sliderHeight={windowHeight - 80}
        itemHeight={windowHeight - 80}
        currentIndex={currentIndex}
                vertical={true}
        onSnapToItem={(index) => setCurrentIndex(index)}
        
        animationOptions={{
          duration: 290, // Animation duration for slide transition
          easing: Easing.inOut(Easing.ease),
          isInteraction: false,
          useNativeDriver: true,

        }}
      /></View>}
    </SafeAreaView>
  );
}


export default ShortsScreen;
