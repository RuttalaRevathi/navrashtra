/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {commonstyles} from '../styles/commonstyles';
import {Image} from 'react-native';
import Ripple from 'react-native-material-ripple';

class HomeSliderComponent extends React.PureComponent {
  render() {
    let decode = require('html-entities-decoder');
    const defaultImage = require('../Assets/Images/no_image.jpeg');
    const imageUrl = this.props?.item?.web_featured_image
      ? {uri: this.props?.item?.web_featured_image}
      : defaultImage;
    return (
      <Ripple
        onPress={() => {
          this.props.navigation.navigate('Details', {
            item: this.props?.item,
            detailsData: this.props?.propsdata,
            index: this.props?.index,
          });
        }}
        style={{marginRight: 12}}>
        <View style={{position: 'relative'}}>
          <Image source={imageUrl} style={commonstyles.slidercard} />
          <View style={commonstyles.sliderGradient}>
            <Text numberOfLines={2} style={commonstyles.slidertext}>
              {decode(this.props.item?.title?.rendered)}
            </Text>
          </View>
        </View>
      </Ripple>
    );
  }
}
export default HomeSliderComponent;
