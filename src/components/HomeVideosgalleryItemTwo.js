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
    Dark_Gray,
    graycolor,
    redcolor,
    whitecolor,
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
            <View style={{ paddingRight: 12 }}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('VideoArticle', {
                            item: this.props.item,
                            detailsData: this.props.videosData?.data,
                        });
                    }}>
                        <View style={{ position: 'relative' }}>
                            <Image
                                source={imageUrl}
                                style={commonstyles.HomeVideosliderImg}
                            />
                            <View style={{
                                bottom: 8,
                                right: 10,
                                position: 'absolute',
                            }}>
                                <Image
                                    source={require('../Assets/Images/video.png')}
                                    style={{ tintColor: whitecolor,height:20,width:20 }}
                                />
                            </View>
                        </View>
                        <Text numberOfLines={2} style={commonstyles.homeVideosliderText}>
                                {decode(this.props?.item?.title?.rendered)}
                            </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default HomeVideosgalleryItemTwo;
