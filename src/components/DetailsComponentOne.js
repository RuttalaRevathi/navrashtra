/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View, Image } from 'react-native';
import moment from 'moment';
import { commonstyles } from '../styles/commonstyles';

class DetailsComponentOne extends React.PureComponent {
  render() {
    let decode = require('html-entities-decoder');
    const now = moment.utc();
    const date = moment.utc(this.props?.item?.date_gmt || now);
    const diffSeconds = now.diff(date, 'seconds');
    const diffMinutes = now.diff(date, 'minutes');
    const diffHours = now.diff(date, 'hours');
    const diffDays = now.diff(date, 'days');

    let formattedDate;
    if (diffSeconds < 60) {
      formattedDate = `${diffSeconds} seconds ago`;
    } else if (diffMinutes < 60) {
      formattedDate = `${diffMinutes} minutes ago`;
    } else if (diffHours < 24) {
      formattedDate = `${diffHours} hours ago`;
    } else {
      formattedDate = `${diffDays} days ago`;
    }
    const defaultImage = require('../Assets/Images/no_image.jpeg');
    const imageUrl = this.props?.item?.web_featured_image
      ? { uri: this.props?.item?.web_featured_image }
      : defaultImage;
    return (
      <View>
        <TouchableOpacity
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
            <View style={commonstyles.homeVideosliderTextView}>
              <Text numberOfLines={2} style={commonstyles.homeFoursliderText}>
                {decode(this.props?.item?.title?.rendered)}
              </Text>
            </View>
            <View style={commonstyles.timeview}>
              <Text style={commonstyles.latesttime}>{formattedDate}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default DetailsComponentOne;
