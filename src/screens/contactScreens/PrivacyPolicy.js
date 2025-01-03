/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import SubHeader from '../../components/SubHeader';
import { commonstyles } from '../../styles/commonstyles';
import { blackcolor, ContactStyles } from '../../styles/contactScreenStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class PrivacyPolicy extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };


    render() {


        return (
            <SafeAreaView styles={commonstyles.container}>
                <SubHeader title={'Privacy Policy '} isMenu={false} isShare={false}
                    leftBtnClick={() => this.props.navigation.goBack()}
                    isBook={true}
                />
                <ScrollView>
                    <View style={ContactStyles.mainView}>
                        <View style={ContactStyles.subView}>
                            <Text style={ContactStyles.title}>Who we are</Text>

                            <Text style={ContactStyles.content}>Our website address is:{"\n"} https://www.navarashtra.com.</Text>

                            <Text style={ContactStyles.title}>What personal data we collect and why we collect it</Text>
                            <Text style={ContactStyles.title}>Comments</Text>
                            <Text style={ContactStyles.content}>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.{"\n"}{"\n"}

                                An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</Text>
                            <Text style={ContactStyles.title}>Media</Text>

                            <Text style={ContactStyles.content}>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</Text>
                            <Text style={ContactStyles.title}>Contact forms</Text>
                            <Text style={ContactStyles.title}>Cookies</Text>
                            <Text style={ContactStyles.content}>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.{"\n"}{"\n"}

                                If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.{"\n"}{"\n"}


                                When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.{"\n"}{"\n"}

                                If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</Text>
                            <Text style={ContactStyles.title}>Embedded content from other websites</Text>
                            <Text style={ContactStyles.content}>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.{"\n"}{"\n"}

                                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</Text>
                            <Text style={ContactStyles.title}>Analytics</Text>
                            <Text style={ContactStyles.title}>Who we share your data with</Text>
                            <Text style={ContactStyles.title}>How long we retain your data</Text>
                            <Text style={ContactStyles.content}>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.{"\n"}{"\n"}

                                For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</Text>
                            <Text style={ContactStyles.title}>What rights you have over your data</Text>
                            <Text style={ContactStyles.content}>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</Text>
                            <Text style={ContactStyles.title}>Where we send your data</Text>
                            <Text style={ContactStyles.content}>Visitor comments may be checked through an automated spam detection service.</Text>
                            <Text style={ContactStyles.title}>Your contact information</Text>
                            <Text style={ContactStyles.title}>Additional information</Text>
                            <Text style={ContactStyles.title}>How we protect your data</Text>
                            <Text style={ContactStyles.title}>What data breach procedures we have in place</Text>
                            <Text style={ContactStyles.title}>What third parties we receive data from</Text>
                            <Text style={ContactStyles.title}>What automated decision making and/or profiling we do with user data</Text>
                            <Text style={ContactStyles.title}>Industry regulatory disclosure requirements</Text>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}