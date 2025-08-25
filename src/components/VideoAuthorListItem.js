import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {commonstyles, whitecolor} from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';
import HandlePressable from '../components/HandlePressable';

const VideoAuthorListItem = ({item, navigation, propsdata}) => {
  const defaultImage = require('../Assets/Images/noimage.png');
  const imageUrl = item?.web_featured_image
    ? {uri: item?.web_featured_image}
    : defaultImage;
  const decode = require('html-entities-decoder');
  return (
    <HandlePressable
      onPress={() => {
        navigation.push(`${item.post_format === "video" ? 'VideoArticle' : 'Details'}`, {
          item,
          detailsData: propsdata,
          screenName: 'Videos',
        });
      }}>
      <View style={commonstyles.HomeComp2DotView}>
        <View style={commonstyles.cateviewText}>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={commonstyles.latestText}>
            {decode(item?.title?.rendered)}
          </Text>
        </View>
        <View style={{position: 'relative'}}>
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
            source={imageUrl}
            style={commonstyles.cateImage}
          />
          {item.post_format === "video" && <View style={styles.videoIconAbs}>
            <Image
              source={require('../Assets/Images/video.png')}
              style={{tintColor: whitecolor, width: 16, height: 16}}
            />
          </View>}
        </View>
      </View>
    </HandlePressable>
  );
};

const styles = StyleSheet.create({
  videoIconAbs: {
    bottom: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.65)',
    padding: 4,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
});

export default VideoAuthorListItem;
