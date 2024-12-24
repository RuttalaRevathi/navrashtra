/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { commonstyles, graycolor, redcolor, whitecolor } from '../styles/commonstyles';
import moment from 'moment';

class HomeVideosgalleryItemOne extends React.PureComponent {
  render() {
    let decode = require('html-entities-decoder');
    const defaultImage = require('../Assets/Images/no_image.jpeg');
    const imageUrl = this.props?.item?.web_featured_image
      ? { uri: this.props?.item?.web_featured_image }
      : defaultImage;
    const now = moment.utc();
    const date = moment.utc(this.props?.item?.date_gmt || now);
    const diffSeconds = now.diff(date, 'seconds');
    const diffMinutes = now.diff(date, 'minutes');
    const diffHours = now.diff(date, 'hours');

    let formattedDate;
    if (diffSeconds < 60) {
      formattedDate = `${diffSeconds} seconds ago`;
    } else if (diffMinutes < 60) {
      formattedDate = `${diffMinutes} minutes ago`;
    } else {
      formattedDate = `${diffHours} hours ago`;
    }
    return (
      <View style={{ marginRight: 5, marginLeft: 10, }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('VideoArticle', {
              item: this.props.item,
              detailsData: this.props.videosData?.data,
            });
          }}>
          <View style={commonstyles.HomeVideoCategoryview}>
            <View style={{ position: 'relative' }}>
              <Image
                source={{ uri: this.props.item?.web_featured_image }}
                style={commonstyles.HomeVideoImg}
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

        </TouchableOpacity>
      </View>
    );
  }
}
export default HomeVideosgalleryItemOne;
