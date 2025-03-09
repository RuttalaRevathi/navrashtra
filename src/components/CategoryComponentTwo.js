import React from 'react';
import {Image, Share, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import {commonstyles} from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';
import HandlePressable from '../components/HandlePressable';

const CategoryComponentTwo = ({item, navigation, propsdata}) => {
  const sharecall = () => {
    const Link_Url = item?.link;
    Share.share({
      message: Link_Url,
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  const defaultImage = require('../Assets/Images/noimage.png');
  const imageUrl = item?.web_featured_image
    ? {uri: item?.web_featured_image}
    : defaultImage;
  const decode = require('html-entities-decoder');
  const apiDate = item?.date;
  const formattedDate = moment(apiDate).format('MMM DD, YYYY | hh:mm A');

  return (
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
                style={styles.iconPress}
                onPress={() => {
                  sharecall();
                }}>
                <Image
                  style={styles.shareIcon}
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
  );
};

const styles = StyleSheet.create({
  articleTimeStamp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
  },
  shareIcon: {width: 16, height: 16},
  iconPress: {padding: 4, borderRadius: 12}
})
export default CategoryComponentTwo;
