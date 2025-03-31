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
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');


  const sharecall = () => {
    const Link_Url = item?.link;
    Share.share({
      message: Link_Url,
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  let decode = require('html-entities-decoder');

  // Date and time 
  const apiDate = item?.date;
  const formattedDate = moment(apiDate).format("MMM DD, YYYY | hh:mm A");

  const defaultImage = require('../Assets/Images/no_image.jpeg');
  const imageUrl = item?.web_featured_image
    ? { uri: item?.web_featured_image }
    : defaultImage;


  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            item,
            detailsData: propsdata,
          });
        }}>
        <View style={commonstyles.HomeComp2DotView}>
          <View style={commonstyles.cateviewText}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={commonstyles.latestText}>
                {decode(item?.title?.rendered)}
              </Text>
            {/* Time View */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8, }}>
            <Text style={commonstyles.HomeTwotime}>{formattedDate}</Text>
            <TouchableOpacity
                    onPress={() => {
                      sharecall();
                    }}>
                    <Image
                      style={{ width: 16, height: 16, }}
                      source={require('../Assets/Images/share_black.png')}
                    />
                  </TouchableOpacity>
            </View>
          </View>
          <View style={commonstyles.cateviewImg}>
            <FastImage
              resizeMode={FastImage.resizeMode.cover} source={imageUrl} style={commonstyles.cateImage} />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default HomeComponentTwo;

