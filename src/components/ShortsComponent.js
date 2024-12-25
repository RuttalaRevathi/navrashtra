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
    ActivityIndicator,
    Dimensions, // Import ActivityIndicator for loading indicator
} from 'react-native';
import moment from 'moment';
import { blackcolor, commonstyles, lightgllery_background, off_white, whitecolor, redcolor } from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';

class ShortsComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { item, index, propsdata, navigation } = this.props;

        const sharecall = () => {
            const Link_Url = item?.link;
            Share.share({
                message: Link_Url,
            })
                .then((result) => console.log(result))
                .catch((error) => console.log(error));
        };
    
       // Date and time 
         const apiDate = item?.date;
         const formattedDate = moment(apiDate).format("MMM DD, YYYY | hh:mm A");

         let decode = require('html-entities-decoder');
        const defaultImage = require('../Assets/Images/home.png');
        const imageUrl = item?.web_featured_image
            ? { uri: item?.web_featured_image }
            : defaultImage;
        const source = item?.excerpt?.rendered || '';
        const source1 = source.replace('lazyload', 'text/javascript');

        const nextItem = propsdata[index + 1] || {};

        return (
            <View style={{ backgroundColor: whitecolor, borderRadius: 20, position: 'relative', height: Dimensions.get('screen').height - 210 }}>
                <ScrollView>
                    <View>
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
                        {/* Title */}
                        <View style={{ paddingHorizontal: 12, paddingTop: 12 }}>
                            <Text style={{
                                color: blackcolor,
                                fontSize: 20,
                                fontFamily: 'Faustina-Bold',
                                lineHeight: 26,
                                fontWeight: 'bold'
                            }}>
                                {decode(item?.title?.rendered)}
                            </Text>
                        </View>
                        {/* Time and Share View */}
                        <View style={{
                            paddingTop: 6, flexDirection: 'row',
                            justifyContent: 'space-between', paddingHorizontal: 12
                        }}>
                            <Text style={commonstyles.shortsTime}>{formattedDate}</Text>
                            <TouchableOpacity onPress={sharecall}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={require('../Assets/Images/share_black.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        {/* Description */}
                        <View style={{ padding: 12 }}>
                            <Text numberOfLines={10}
                                ellipsizeMode="tail" style={{ color: blackcolor, fontSize: 16, lineHeight: 26, fontFamily: 'Mukta-Regular' }}>
                                {source1}
                            </Text>
                        </View>
                        {/* Read full article */}
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Details', {
                                    item: item,
                                    detailsData: propsdata,
                                    screenName: "Shorts"
                                });
                            }}>
                            <View style={{
                                padding: 10, borderRadius: 20, backgroundColor: redcolor,
                                 width: 150, marginTop: 30,
                                alignSelf: 'center',
                            }}>
                                <Text style={{ color: whitecolor, alignSelf: 'center', fontFamily: 'Mukta-Bold',fontWeight:'700' }}>
                                    Read full Article
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

ShortsComponent.defaultProps = {
    items: [], // Ensure items is at least an empty array
    index: 0,  // Default index to 0
};

export default ShortsComponent;
