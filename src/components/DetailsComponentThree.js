/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {commonstyles} from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';

class DetailsComponentThree extends React.PureComponent {
  render() {
    let decode = require('html-entities-decoder');
    return (
      <View style={{marginRight: 5, marginLeft: 10}}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Details', {
              item: this.props?.item,
            });
          }}>
          <View style={commonstyles.sliderView}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
              source={{uri: this.props?.item?.web_featured_image}}
              style={commonstyles.photocard}
            />
            <LinearGradient
              colors={['transparent', 'black']}
              style={commonstyles.linearGradient}
              start={{x: 0.5, y: 0.2}}
              locations={[0.2, 0.8]}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={commonstyles.flashtext}>
                {decode(this.props?.item?.title?.rendered)}
              </Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default DetailsComponentThree;
