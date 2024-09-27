/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {  Text, TouchableOpacity, View, Image, Share } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {commonstyles } from '../styles/commonstyles'; // Ensure these are correctly defined and imported
import { decode } from 'html-entities';
import FastImage from 'react-native-fast-image';

const DetailsComponentTwo = ({ item, navigation, propsdata }) => {
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
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
              <View>
                <TouchableOpacity
                  onPress={handleBookmark}>
                  <Image
                    style={{ width: 15, height: 15, marginRight: 10 }}
                    source={bookmarked ? require('../Assets/Images/bookmark_filledblack.png') : require('../Assets/Images/bookmark-black.png')}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={sharecall}>
                  <Image
                    style={{ width: 15, height: 15, marginRight: 10 }}
                    source={require('../Assets/Images/share_black.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={commonstyles.cateviewImg}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
             source={imageUrl} style={commonstyles.cateImage} />
          </View>
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

export default DetailsComponentTwo;
