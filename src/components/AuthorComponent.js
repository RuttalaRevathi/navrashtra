/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Image,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';
import { commonstyles } from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';

const AuthorComponent = ({ item, navigation, propsdata }) => {

  // Share functionality
  const sharecall = () => {
    const Link_Url = item?.link || 'No Link Available';
    Share.share({
      message: Link_Url,
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  // Fallback image if no URL is provided
  const defaultImage = require('../Assets/Images/noimage.png');
  const imageUrl = item?.web_featured_image
    ? { uri: item?.web_featured_image }
    : defaultImage;

  // Decode HTML entities
  const decode = require('html-entities-decoder');

console.log(item,"content");

  
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
          {/* Article Text Section */}
          <View style={commonstyles.cateviewText}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={commonstyles.latestText}>
              {decode(item?.content || 'Untitled')}
            </Text>
           
          </View>
          {/* Article Image Section */}
          <View style={commonstyles.cateviewImg}>
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              source={imageUrl}
              style={commonstyles.cateImage}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AuthorComponent;
