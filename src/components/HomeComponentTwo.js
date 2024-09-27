/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  Image,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { commonstyles, redcolor } from '../styles/commonstyles';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';

const HomeComponentTwo = ({ item, navigation, propsdata }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    checkBookmarkStatus();
  }, []);

  const checkBookmarkStatus = async () => {
    try {
      const storedArticles = await AsyncStorage.getItem('bookmarkedArticles');
      if (storedArticles) {
        const bookmarkedArticles = JSON.parse(storedArticles);
        const isBookmarked = bookmarkedArticles.some(article => article.id === item.id);
        setBookmarked(isBookmarked);
      }
    } catch (error) {
      console.error('Error checking bookmark status:', error);
    }
  };

  const handleBookmark = async () => {
    try {
      const storedArticles = await AsyncStorage.getItem('bookmarkedArticles');
      let bookmarkedArticles = storedArticles ? JSON.parse(storedArticles) : [];

      const isBookmarked = bookmarkedArticles.some(article => article.id === item.id);

      if (!isBookmarked) {
        bookmarkedArticles.push(item);
        await AsyncStorage.setItem('bookmarkedArticles', JSON.stringify(bookmarkedArticles));
        setBookmarked(true);
        setToastMessage('News added to favorites');
        setShowToast(true);
      } else {
        bookmarkedArticles = bookmarkedArticles.filter(article => article.id !== item.id);
        await AsyncStorage.setItem('bookmarkedArticles', JSON.stringify(bookmarkedArticles));
        setBookmarked(false);
        setToastMessage('News removed from favorites');
        setShowToast(true);
      }
    } catch (error) {
      console.error('Error bookmarking article:', error);
      setToastMessage('An error occurred. Please try again later.');
      setShowToast(true);
    }
  };

  const sharecall = () => {
    const Link_Url = item?.link;
    Share.share({
      message: Link_Url,
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  let decode = require('html-entities-decoder');
  const now = moment.utc();
  const date = moment.utc(item?.date_gmt || now);
  const diffSeconds = now.diff(date, 'seconds');
  const diffMinutes = now.diff(date, 'minutes');
  const diffHours = now.diff(date, 'hours');
  const diffDays = now.diff(date, 'days');

  let formattedDate;
  if (diffSeconds < 60) {
    formattedDate = `${diffSeconds} seconds ago`;
  } else if (diffMinutes < 60) {
    formattedDate = `${diffMinutes} minutes ago`;
  } else if (diffHours < 24) {
    formattedDate = `${diffHours} hours ago`;
  } else {
    formattedDate = `${diffDays} days ago`;
  }

  const defaultImage = require('../Assets/Images/no_image.jpeg');
  const imageUrl = item?.web_featured_image
    ? { uri: item?.web_featured_image }
    : defaultImage;
 
   
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', {
              item,
              detailsData: propsdata,
            });
          }}>
            <View style={commonstyles.HomeComp2DotView}>
              <View style={commonstyles.cateviewText}>
                <View>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={commonstyles.latestText}>
                  {decode(item?.title?.rendered)}
                </Text>
                </View>
                {/* Time View */}
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:5,}}>
                  <View style={{}}>
                    <Text style={commonstyles.HomeTwotime}>{formattedDate}</Text>
                  </View>
                  <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        handleBookmark();
                      }}>
                      <Image
                        style={{ width: 15, height: 15,right:20 }}
                        source={bookmarked ? require('../Assets/Images/bookmark_filledblack.png') : require('../Assets/Images/bookmark-black.png')}
                        />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        sharecall();
                      }}>
                      <Image
                        style={{ width: 15, height: 15,right:10 }}
                        source={require('../Assets/Images/share_black.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  </View>
                </View>
              </View>
              <View style={commonstyles.cateviewImg}>
              <FastImage
            resizeMode={FastImage.resizeMode.contain} source={imageUrl} style={commonstyles.cateImage} />
              </View>
            </View>
        </TouchableOpacity>
      </View>
    );
  }

export default HomeComponentTwo;

