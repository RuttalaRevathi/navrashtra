/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Share, Text, View} from 'react-native';
import {commonstyles} from '../styles/commonstyles';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import HandlePressable from './HandlePressable';

const HomeComponentOne = ({item, navigation, propsdata}) => {
  const sharecall = () => {
    const Link_Url = item?.link;
    Share.share({
      message: Link_Url,
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };
  let decode = require('html-entities-decoder');

  const apiDate = item?.date;
  const formattedDate = moment(apiDate).format('MMM DD, YYYY | hh:mm A');

  const defaultImage = require('../Assets/Images/no_image.jpeg');
  const imageUrl = item?.web_featured_image
    ? {uri: item?.web_featured_image}
    : defaultImage;

  return (
    <>
      <HandlePressable
        onPress={() => {
          navigation.navigate('Details', {
            item,
            detailsData: propsdata,
          });
        }}>
        <View style={commonstyles.HomeoneCategoryview}>
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
            source={imageUrl}
            style={commonstyles.HomeCategoryImg}
          />
          <LinearGradient
            colors={[
              'rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 0.75)',
              'rgba(0, 0, 0, 1)',
            ]}
            style={commonstyles.HomeonesliderGradient}>
            <Text numberOfLines={2} style={commonstyles.HomeCategorytext}>
              {decode(item?.title?.rendered)}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={commonstyles.latesttime}>{formattedDate}</Text>
              <HandlePressable
                onPress={() => {
                  sharecall();
                }}>
                <Image
                  style={{width: 16, height: 16}}
                  source={require('../Assets/Images/share_white.png')}
                />
              </HandlePressable>
            </View>
          </LinearGradient>
        </View>
      </HandlePressable>
    </>
  );
};

export default HomeComponentOne;
