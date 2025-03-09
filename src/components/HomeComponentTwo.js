/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Share, Text, StyleSheet, View} from 'react-native';
import {commonstyles} from '../styles/commonstyles';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import HandlePressable from './HandlePressable';

const HomeComponentTwo = ({item, navigation, propsdata}) => {
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
        <View style={commonstyles.HomeComp2DotView}>
          <View style={commonstyles.cateviewText}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={commonstyles.latestText}>
              {decode(item?.title?.rendered)}
            </Text>
            <View
              style={styles.articleTimeStamp}>
              <Text style={commonstyles.HomeTwotime}>{formattedDate}</Text>
              <HandlePressable
                style={styles.share}
                onPress={() => {
                  sharecall();
                }}>
                <Image
                  style={styles.shareImage}
                  source={require('../Assets/Images/share_black.png')}
                />
              </HandlePressable>
            </View>
          </View>
          <FastImage
              resizeMode={FastImage.resizeMode.cover}
              source={imageUrl}
              style={commonstyles.cateImage}
            />
        </View>
      </HandlePressable>
    </>
  );
};

const styles = StyleSheet.create({
  share: {padding: 4, borderRadius: 10},
  shareImage: {width: 16, height: 16},
  articleTimeStamp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
  }
})
export default HomeComponentTwo;
