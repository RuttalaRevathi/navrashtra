/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {commonstyles} from '../styles/commonstyles';
import { Image } from 'react-native';

class HomeSliderComponent extends React.PureComponent {
  
 
  render() {
    let decode = require('html-entities-decoder');
    const defaultImage = require('../Assets/Images/no_image.jpeg');
    const imageUrl = this.props?.item?.web_featured_image
      ? { uri: this.props?.item?.web_featured_image }
      : defaultImage;
    return (
      <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate('Details', {
          item: this.props.item,
          detailsData: this.props.propsdata,
          index: this.props.index,  // Ensure this index matches the article to be displayed
        });
      }}>
        <View style={{padding: 5, position: 'relative',}}>
          
          <Image
            source={imageUrl}
            style={commonstyles.slidercard}
          />
          <View style={commonstyles.sliderGradient}>
            <Text numberOfLines={2} style={commonstyles.slidertext}>
              {decode(this.props.item?.title?.rendered)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default HomeSliderComponent;
