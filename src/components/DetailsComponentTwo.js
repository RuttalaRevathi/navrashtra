/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View, Image, Share, StyleSheet} from 'react-native';
import {commonstyles} from '../styles/commonstyles';
import {decode} from 'html-entities';
import FastImage from 'react-native-fast-image';
import HandlePressable from './HandlePressable';

const DetailsComponentTwo = ({item, navigation, propsdata}) => {

  const sharecall = () => {
    const Link_Url = item?.link;
    Share.share({
      message: Link_Url,
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  const defaultImage = require('../Assets/Images/no_image.jpeg');
  const imageUrl = item?.web_featured_image
    ? {uri: item?.web_featured_image}
    : defaultImage;

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
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingTop: 8,
              }}>
              <HandlePressable onPress={sharecall} style={styles.sharePress}>
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
  shareIcon: {width: 16, height: 16},
  sharePress: {padding: 4, borderRadius: 12}
})

export default DetailsComponentTwo;
