/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {commonstyles} from '../styles/commonstyles';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import HandlePressable from './HandlePressable';

class HomeComponentThree extends React.PureComponent {
  render() {
    let decode = require('html-entities-decoder');
    const defaultImage = require('../Assets/Images/no_image.jpeg');
    const imageUrl = this.props?.item?.web_featured_image
      ? {uri: this.props?.item?.web_featured_image}
      : defaultImage;
    return (
      <>
        <HandlePressable
          onPress={() => {
            this.props.navigation.navigate('Details', {
              item: this.props.item,
              detailsData: this.props?.propsdata,
            });
          }}>
          <View style={commonstyles.HomeThreeCategoryview}>
            <FastImage
              resizeMode={FastImage.resizeMode.cover}
              source={imageUrl}
              style={commonstyles.HomeCategoryImg}
            />
            <View style={commonstyles.homecategoryTextView}>
              <Text
                numberOfLines={2}
                style={commonstyles.HomeThreeCategorytext}>
                {decode(this.props?.item?.title?.rendered)}
              </Text>
            </View>
          </View>
        </HandlePressable>
      </>
    );
  }
}
export default HomeComponentThree;
