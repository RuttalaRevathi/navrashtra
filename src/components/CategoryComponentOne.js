/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View, Image, Share } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
import { commonstyles, medium_gray } from '../styles/commonstyles';
import moment from 'moment';


const CategoryComponentOne = ({ item, navigation, propsdata }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

 

  const decode = require('html-entities-decoder');
  // Date and time 
  const apiDate = item?.date;
  const formattedDate = moment(apiDate).format("MMM DD, YYYY | hh:mm A");

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
    <View style={{ borderBottomColor: medium_gray, borderBottomWidth: 2, paddingBottom: 10 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            item: item,
            detailsData: propsdata,
          });
        }}>
        <View style={commonstyles.CategoryOneview}>
          <View style={{padding:5,}}>
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <View style={{}}>
          <Text style={commonstyles.CategoryOnetime}>{formattedDate}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          
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
