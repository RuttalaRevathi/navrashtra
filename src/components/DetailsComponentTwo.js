/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {  Text, TouchableOpacity, View, Image, Share } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {commonstyles } from '../styles/commonstyles'; // Ensure these are correctly defined and imported
import { decode } from 'html-entities';
import FastImage from 'react-native-fast-image';

const DetailsComponentTwo = ({ item, navigation, propsdata }) => {
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
