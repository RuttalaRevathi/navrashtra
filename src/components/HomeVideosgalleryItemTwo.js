/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import {
    commonstyles,
    redcolor,
} from '../styles/commonstyles';
import moment from 'moment/moment';

class HomeVideosgalleryItemTwo extends React.PureComponent {
    render() {
        let decode = require('html-entities-decoder');
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
        const defaultImage = require('../Assets/Images/no_image.jpeg');
        const imageUrl = this.props?.item?.web_featured_image
            ? { uri: this.props?.item?.web_featured_image }
            : defaultImage;
        return (
            <View style={{ paddingRight: 10 }}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('VideoArticle', {
                            item: this.props.item,
                            detailsData: this.props.videosData?.data,
                        });
                    }}>
                    <View style={{ paddingBottom: 10 }}>
                        <View style={{ position: 'relative' }}>
                            <Image
                                source={imageUrl}
                                style={commonstyles.HomeVideosliderImg}
                            />
                            <View style={{
                bottom: 3,
                right: 10,
                position: 'absolute',
              }}>
                <View style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: [{ translateX: -25 }, { translateY: -25 }],
                  width: 30,
                  height: 20,
                  backgroundColor: redcolor,
                  justifyContent: 'center',
                  alignItems: 'center',

                }}>
                  <Text style={{
                    color: 'black',
                    fontSize: 15,
                    fontWeight: 'bold',
                    bottom: 2
                  }}>
                    ▶
                  </Text>
                </View>
              </View>
                        </View>
                        <View style={commonstyles.homeVideosliderTextView}>
                            <Text numberOfLines={2} style={commonstyles.homeVideosliderText}>
                                {decode(this.props?.item?.title?.rendered)}                        </Text>
                        </View>
                       
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default HomeVideosgalleryItemTwo;
