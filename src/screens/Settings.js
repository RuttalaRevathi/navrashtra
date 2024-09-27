/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Share, Linking } from 'react-native';
import { blackcolor, commonstyles, graycolor, whitecolor } from '../styles/commonstyles';
import { Image } from 'react-native';
import SubHeader from '../components/SubHeader';

const Settings = ({ navigation }) => {

    const data = [
        {
            id: 1,
            text: "हमसे संपर्क करें",
            img: require('../Assets/Images/call.png'),
            screen: 'Contact',
        },
        {
            id: 2,
            text: "नियम व शर्तें",
            img: require('../Assets/Images/sidemenuIcons/conditions.png'),
            screen: 'Terms',
        },
        {
            id: 3,
            text: "शेयर एप",
            img: require('../Assets/Images/share_black.png'),
            screen: 'ShareApp',
        },
        {
            id: 4,
            text: "प्रतिक्रिया ",
            img: require('../Assets/Images/sidemenuIcons/editpage.png'),
            screen: 'Feedback',
        },
    ];
    const navigateToScreen = async (screenName) => {
        if (screenName === 'ShareApp') {
            try {
                const result = await Share.share({
                    message: 'Check out this awesome app! https://play.google.com/store/apps/details?id=ww.ibc24.in',
                    url: 'https://play.google.com/store/apps/details?id=ww.ibc24.in',
                    title: 'App link',
                });

                if (result.action === Share.sharedAction) {
                    if (result.activityType) {
                        // shared with activity type of result.activityType
                    } else {
                        // shared
                    }
                } else if (result.action === Share.dismissedAction) {
                    // dismissed
                }
            } catch (error) {
                console.error('Error sharing app:', error.message);
            }
        } else if (screenName === 'Feedback') {
            Linking.openURL('mailto:feedback@ibc24.in');
        } else {
            navigation.navigate(screenName);
        }
    };


    return (
        <SafeAreaView style={commonstyles.container}>

            <SubHeader title={'सेटिंग'} isMenu={false} isBook={false} 
                leftBtnClick={() => navigation.goBack()}

            />

            <View style={{}}>
                <FlatList
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigateToScreen(item.screen)}>
                            <View style={commonstyles.settingview}>
                                <Image source={item.img} style={commonstyles.settingimg} />
                                <Text style={commonstyles.settingtext}>{item.text}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default Settings;
