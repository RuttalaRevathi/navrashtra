/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import {commonstyles} from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';
import HandlePressable from './HandlePressable';

class HomeComponentFour extends React.PureComponent {
  render() {
    const defaultImage = require('../Assets/Images/no_image.jpeg');
    const imageUrl = this.props?.item?.web_featured_image
      ? {uri: this.props?.item?.web_featured_image}
      : defaultImage;
    let decode = require('html-entities-decoder');

    return (
      <View style={{marginRight: 12}}>
        <HandlePressable
          onPress={() => {
            this.props?.navigation.navigate('Details', {
              item: this.props?.item,
              detailsData: this.props?.propsdata,
            });
          }}>
          <View style={commonstyles.HomeFourcategoryView}>
            <FastImage
              resizeMode={FastImage.resizeMode.cover}
              source={imageUrl}
              style={commonstyles.HomeVideosliderImg}
            />
            <Text numberOfLines={2} style={commonstyles.homeFoursliderText}>
              {decode(this.props?.item?.title?.rendered)}
            </Text>
          </View>
        </HandlePressable>
      </View>
    );
  }
}
export default HomeComponentFour;
