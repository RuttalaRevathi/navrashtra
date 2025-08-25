import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {commonstyles, whitecolor} from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';
import HandlePressable from '../components/HandlePressable';

const PhotoAuthorListItem = ({item, navigation, propsdata}) => {
  const defaultImage = require('../Assets/Images/noimage.png');
  const imageUrl = item?.web_featured_image
    ? {uri: item?.web_featured_image}
    : defaultImage;
  const decode = require('html-entities-decoder');
  const getPhotoCount = content => {
    if (!content) return 0;
    const regex = /<dl class='gallery-item'>/g;
    const matches = content.match(regex);
    return matches ? matches.length : 0;
  };
  const photoCount = getPhotoCount(item?.content?.rendered);
  return (
    <HandlePressable
      onPress={() => {
        navigation.push(`${item.post_format === 'gallery' ? 'PhotoArticle': 'Details'}`, {
          item: item,
          detailsData: propsdata?.data,
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
          {photoCount > 0 && <View style={styles.countAbs}>
            <View style={styles.photoCountContainer}>
              <Image
                source={require('../Assets/Images/gallery.png')}
                style={styles.photoIcon}
              />
              <Text style={styles.photoCount}>{photoCount}</Text>
            </View>
          </View>}
        </View>
      </View>
    </HandlePressable>
  );
};

const styles = StyleSheet.create({
  photoCount: {
    color: whitecolor,
    fontSize: 14,
    marginLeft: 4,
  },
  photoIcon: {
    height: 14,
    width: 14,
    tintColor: whitecolor,
  },
  photoCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countAbs: {
    bottom: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.65)',
    padding: 4,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
});

export default PhotoAuthorListItem;
