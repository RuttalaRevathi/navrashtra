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
    Dimensions,
    StyleSheet, // Import ActivityIndicator for loading indicator
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
        console.log(propsdata.length, index)

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
            <View style={styles.wrapper}>
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
                                style={{ width: 30, height: 30 }}
                            />
                        </TouchableOpacity>
                            <Image
                                source={imageUrl}
                                style={{
                                    width: '100%',
                                    minHeight: 200,
                                    maxHeight: 250,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
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
                            <Text numberOfLines={8}
                                ellipsizeMode="tail" style={{ color: blackcolor, fontSize: 16, lineHeight: 26, fontFamily: 'Mukta-Regular' }}>
                                {source1}
                            </Text>
                            <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Details', {
                                    item: item,
                                    detailsData: propsdata,
                                    screenName: "Shorts"
                                });
                            }}>
                            <View style={{
                                padding: 6, borderRadius: 20, backgroundColor: redcolor,
                                 width: 150, marginTop: 12,
                                alignSelf: 'flex-start',
                            }}>
                                <Text style={{ fontSize: 14, color: whitecolor, alignSelf: 'center', fontFamily: 'Mukta-Bold',fontWeight:'700' }}>
                                    Read Full Article
                                </Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                    
                    {(index < 3) && <View style={styles.swipeupWrapper}>
                    <Image
                        style={styles.swipeUpImg}
                        resizeMode='contain'
                        source={require('../Assets/Images/swipeup.png')}
                                />
                    <Text style={styles.swipeUpText}>Swipe up for next shorts</Text>
                    </View>}
                    {index + 1 === propsdata.length && <Text style={styles.noMoreSwipes}>No More Shorts to Swipe</Text>}
            </View>
        );
    }
}

ShortsComponent.defaultProps = {
    items: [], // Ensure items is at least an empty array
    index: 0,  // Default index to 0
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: whitecolor, borderRadius: 10, position: 'relative', 
        height: Dimensions.get('screen').height - 210,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    swipeupWrapper: {
        position: 'absolute', bottom: 10, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'
    },
    swipeUpText: {
        fontSize: 10, fontStyle: 'italic'
    },
    swipeUpImg: {
        width: 16, height: 16, marginRight: 4
    },
    noMoreSwipes: {
        position: 'absolute', bottom: 10, fontSize: 10, fontStyle: 'italic', alignSelf: 'center'
    }
})

export default ShortsComponent;
