/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image } from 'react-native';
import moment from 'moment';
import { commonstyles } from '../styles/commonstyles';
import HandlePressable from './HandlePressable';

class DetailsComponentOne extends React.PureComponent {
  render() {
    let decode = require('html-entities-decoder');
    const defaultImage = require('../Assets/Images/no_image.jpeg');
    const imageUrl = this.props?.item?.web_featured_image
      ? { uri: this.props?.item?.web_featured_image }
      : defaultImage;
    return (
      <View style={{marginRight: 12}}>
        <HandlePressable
          onPress={() => {
            this.props?.navigation.navigate('Details', {
              item: this.props?.item,
              detailsData: this.props?.propsdata,
            });
          }}>
          <View style={commonstyles.DetailsCompOneView}>
            <View>
              <Image
                source={imageUrl}
                style={commonstyles.HomeVideosliderImg}
              />
            </View>
            <Text numberOfLines={2} style={commonstyles.homeFoursliderText}>
                {decode(this.props?.item?.title?.rendered)}
              </Text>
          </View>
        </HandlePressable>
      </View>
    );
  }
}
export default DetailsComponentOne;
