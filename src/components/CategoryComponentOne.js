/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View, Image, Share } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
import { commonstyles, medium_gray } from '../styles/commonstyles';
import moment from 'moment';


const CategoryComponentOne = ({ item, navigation, propsdata }) => {
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

  const decode = require('html-entities-decoder');
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

  const defaultImage = require('../Assets/Images/home.png');
  const imageUrl = item?.web_featured_image
    ? { uri: item?.web_featured_image }
    : defaultImage;

  const sharecall = () => {
    const Link_Url = item?.link;
    Share.share({
      message: Link_Url,
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={{ borderBottomColor: medium_gray, borderBottomWidth: 2, paddingBottom: 10}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            item: item,
            detailsData: propsdata,
          });
        }}>
        <View style={commonstyles.CategoryOneview}>
          <View>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
              source={imageUrl}
              style={commonstyles.CategoryOneImg}
            />
          </View>
          <View style={commonstyles.categoryoneTextView}>
            <Text numberOfLines={3} style={commonstyles.CategoryOnetext}>
              {decode(item?.title?.rendered)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* time view */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',}}>
        <View style={{ left: 10 }}>
          <Text style={commonstyles.CategoryOnetime}>{formattedDate}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              handleBookmark();
            }}>
            <Image
              style={{ width: 15, height: 15, right: 30 }}
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
              style={{ width: 15, height: 15, right: 20 }}
              source={require('../Assets/Images/share_black.png')}
            />
          </TouchableOpacity>


        </View>
        </View>
      </View>

    </View>
  );
};

export default CategoryComponentOne;
