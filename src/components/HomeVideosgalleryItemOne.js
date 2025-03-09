/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { commonstyles, whitecolor } from '../styles/commonstyles';
import HandlePressable from './HandlePressable';

class HomeVideosgalleryItemOne extends React.PureComponent {
  render() {
    let decode = require('html-entities-decoder');
    const defaultImage = require('../Assets/Images/no_image.jpeg');
    const imageUrl = this.props?.item?.web_featured_image
      ? { uri: this.props?.item?.web_featured_image }
      : defaultImage;

    return (
      <View style={{ paddingHorizontal: 12 }}>
        <HandlePressable
        color='rgba(0,0,0,0.15)'
          onPress={() => {
            this.props.navigation.navigate('VideoArticle', {
              item: this.props?.item,
              detailsData: this.props.videosData?.data,
            });
          }}>
          <View style={commonstyles.HomeVideoCategoryview}>
            <View style={{ position: 'relative' }}>
              <Image
                source={imageUrl}
                style={commonstyles.HomeVideoImg}
                resizeMode='cover'
              />
              <View style={{
                bottom: 15,
                right: 15,
                position: 'absolute',
              }}>
                <Image
                  source={require('../Assets/Images/video.png')}
                  style={{ tintColor: whitecolor }}
                />
              </View>
            </View>
            <View style={commonstyles.homeVideoTextView}>
              <Text numberOfLines={2} style={commonstyles.HomeVideotext}>
                {decode(this.props?.item?.title?.rendered)}
              </Text>
            </View>
          </View>
        </HandlePressable>
      </View>
    );
  }
}
export default HomeVideosgalleryItemOne;
