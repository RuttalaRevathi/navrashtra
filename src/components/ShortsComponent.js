/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    Image,
    ScrollView,
    Share,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator, // Import ActivityIndicator for loading indicator
} from 'react-native';
import moment from 'moment';
import { blackcolor, commonstyles, lightgllery_background, off_white, whitecolor, redcolor } from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';

class ShortsComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true, // State to track loading status
        };
    }

    componentDidMount() {
        // Simulate loading time, you can replace this with your actual data fetching logic
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 1000); // Simulate a 1 second loading time
    }

    render() {
        const { item, index, propsdata, navigation } = this.props;
        const { isLoading } = this.state;

        const sharecall = () => {
            const Link_Url = item?.link;
            Share.share({
                message: Link_Url,
            })
                .then((result) => console.log(result))
                .catch((error) => console.log(error));
        };

        let decode = require('html-entities-decoder');
        const now = moment.utc();
        const date = moment.utc(item?.date_gmt || now);
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

        const defaultImage = require('../Assets/Images/home.png');
        const imageUrl = item?.web_featured_image
            ? { uri: item?.web_featured_image }
            : defaultImage;
        const source = item?.excerpt?.rendered || '';
        const source1 = source.replace('lazyload', 'text/javascript');

        const nextItem = propsdata[index + 1] || {};

        if (isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={blackcolor} />
                    <Text style={{ color: blackcolor, fontSize: 18 }}>Loading...</Text>
                </View>
            );
        }

        return (
            <View style={{ backgroundColor: off_white, borderRadius: 20, position: 'relative', height: '100%' }}>
                <ScrollView>
                    <View>
                        {/* Close Button */}
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                zIndex: 1, // Ensure button is on top
                                backgroundColor:whitecolor,
                                borderRadius:50
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                source={require('../Assets/Images/cancel.png')} // Your close button image
                                style={{ width: 40, height: 40 }}
                            />
                        </TouchableOpacity>
                        {/* Image */}
                        <View>
                            <Image
                                source={imageUrl}
                                style={{
                                    width: '100%',
                                    minHeight: 200,
                                    maxHeight: 250,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    objectFit:'fill'
                                }}
                            />
                        </View>
                        {/* Title */}
                        <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 5 }}>
                            <Text style={{
                                color: blackcolor,
                                fontSize: 20,
                                fontFamily: 'Faustina-Bold',
                                lineHeight: 27,
                            }}>
                                {decode(item?.title?.rendered)}
                            </Text>
                        </View>
                        {/* Time and Share View */}
                        <View style={{
                            paddingTop: 5, flexDirection: 'row',
                            justifyContent: 'space-between', paddingLeft: 10, paddingRight: 20,
                        }}>
                            <Text style={commonstyles.shortsTime}>{formattedDate}</Text>
                            <TouchableOpacity onPress={sharecall}>
                                <Image
                                    style={{ width: 18, height: 18 }}
                                    source={require('../Assets/Images/share_black.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        {/* Description */}
                        <View style={{ justifyContent: 'center', padding: 10 }}>
                            <Text numberOfLines={5}
                                ellipsizeMode="tail" style={{ color: blackcolor, fontSize: 18, lineHeight: 27, fontFamily: 'Mukta-Regular' }}>
                                {source1}
                            </Text>
                        </View>
                        {/* Read full article */}
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Details', {
                                    item: item,
                                    detailsData: propsdata,
                                });
                            }}>
                            <View style={{
                                padding: 10, borderRadius: 20, backgroundColor: redcolor,
                                justifyContent: 'flex-end', width: 150, marginRight: 20,
                                alignSelf: 'flex-end',
                            }}>
                                <Text style={{ color: whitecolor, alignSelf: 'center', fontFamily: 'Mukta-Bold',fontWeight:'700' }}>
                                    Read full Article
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
                {/* Next article */}

                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 110, }}>
                    {nextItem?.title?.rendered && (
                        <View
                            style={{
                                padding: 10,
                                borderRadius: 10, // Added borderRadius for better appearance
                                marginTop: 10,
                                backgroundColor: lightgllery_background,
                            }}
                        >
                            <Text numberOfLines={2}
                                ellipsizeMode="tail" style={{
                                    color: whitecolor,
                                    fontSize: 18,
                                    fontFamily: 'Mukta-Bold',
                                }}>

                                {decode(nextItem?.title?.rendered)}
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        );
    }
}

ShortsComponent.defaultProps = {
    items: [], // Ensure items is at least an empty array
    index: 0,  // Default index to 0
};

export default ShortsComponent;
