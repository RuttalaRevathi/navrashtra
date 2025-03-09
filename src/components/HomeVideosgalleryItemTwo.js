/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {
  commonstyles,
  whitecolor,
} from '../styles/commonstyles';
import HandlePressable from './HandlePressable';

class HomeVideosgalleryItemTwo extends React.PureComponent {
  render() {
    let decode = require('html-entities-decoder');
    const defaultImage = require('../Assets/Images/no_image.jpeg');
    const imageUrl = this.props?.item?.web_featured_image
      ? {uri: this.props?.item?.web_featured_image}
      : defaultImage;
    return (
      <View style={{marginRight: 12, width: 190}}>
        <HandlePressable color='rgba(0,0,0,0.15)'
          onPress={() => {
            this.props.navigation.navigate('VideoArticle', {
              item: this.props?.item,
              detailsData: this.props.videosData?.data,
            });
          }}>
          <View style={{position: 'relative'}}>
            <Image source={imageUrl} style={commonstyles.HomeVideosliderImg} />
            <View
              style={{
                bottom: 8,
                right: 10,
                position: 'absolute',
              }}>
              <Image
                source={require('../Assets/Images/video.png')}
                style={{tintColor: whitecolor, height: 20, width: 20}}
              />
            </View>
          </View>
          <Text numberOfLines={2} style={commonstyles.homeVideosliderText}>
            {decode(this.props?.item?.title?.rendered)}
          </Text>
        </HandlePressable>
      </View>
    );
  }
}
export default HomeVideosgalleryItemTwo;
