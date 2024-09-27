/* eslint-disable prettier/prettier */
import React, { useState, useEffect, Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, Linking } from 'react-native';
import { BaseUrl, Privacy } from '../../utilities/urls';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { blackcolor, commonstyles } from '../../styles/commonstyles';
import SubHeader from '../../components/SubHeader';
import { ContactStyles } from '../../styles/contactScreenStyles';
import { TouchableOpacity } from 'react-native';

export default class Terms extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {


        const handleContactUs = () => {
            Linking.openURL('mailto:feedback@ibc24.in');
        };
        return (
            <SafeAreaView style={commonstyles.container}>

                {/* <SubHeader title={'प्राइवेसी पॉलीसी'}
                    leftBtnClick={() => this.props.navigation.goBack()}
                /> */}
                <ScrollView>
                    <View style={ContactStyles.mainView}>
                        <View style={ContactStyles.subView}>
                            <View style={ContactStyles.headingview}>
                                <Text style={ContactStyles.heading}>Privacy Policy</Text>
                            </View>

                            <Text style={ContactStyles.content}>This privacy policy explains our policy
                                regarding the collection, use, disclosure and transfer of your information by IBC24,
                                which operates website and various apps but not limited to delivery of information
                                and content via any mobile or internet connected device. This privacy policy forms
                                part and parcel of the Terms of Use for the Services. As we update, improve and
                                expand the Services, this policy may change, so please refer back to it periodically.
                                By accessing the Company website or this Application or otherwise using the Services,
                                you consent to collection, storage, and use of the personal information you provide.
                                If you have additional questions or require more information about our Privacy Policy,
                                contact us at
                                <TouchableOpacity onPress={handleContactUs}>
                                    <Text style={{ color: 'blue', top: 4 }}> feedback@ibc24.in</Text>
                                </TouchableOpacity>
                            </Text>

                            <Text style={ContactStyles.title}>Collection</Text>
                            <Text style={ContactStyles.content}>To provide a tailor-made and personalised experience, the information you share maybe processed and analysed by third party services. This will help the App give you the best possible experience by showing content in your language and according to your interests. We collect information from the detail you provide us, information pertaining to your use of service, information of devise used to access the site, location information and information that we receive from cookies and other permitted data collection methods. </Text>
                            <Text style={ContactStyles.title}>Transparency and Choice</Text>
                            <Text style={ContactStyles.content}>We may update our Privacy Policy from time to time. When we change the policy in a material way, a notice will be posted on our website along with the updated Privacy Policy. App can draw over other apps for “live Tv & Access network state.” for connectivity. </Text>
                            <Text style={ContactStyles.title}>User safety and Security</Text>
                            <Text style={ContactStyles.content}>We value all personal information provided by you and we shall ensure the safety and security of information you provide in the App. Your data shall not be sold or rented to anyone and will only be utilised for the functionality of the App and related features, and services. If you have any questions or concerns about our Privacy Policy or data usage, please write to us on
                                <TouchableOpacity onPress={handleContactUs}>
                                    <Text style={{ color: 'blue', top: 4 }}> feedback@ibc24.in</Text>
                                </TouchableOpacity>
                            </Text>
                            <Text style={ContactStyles.title}>Advertisements</Text>
                            <Text style={ContactStyles.content}>Service may include advertisements. Advertisements may be targeted to the content or information stored on the Service, queries made through the Service, or other information. We use following third-party services in the app: </Text>
                            <Text style={ContactStyles.content}>(i) Admob We care about your privacy & data security.We keep this app free by showing Ads, we are using your data to tailor ads for you. Some advertising is “contextual” meaning it is shown due to the particular webpage you are presently viewing.Other advertising, known as “online behavioral advertising” is shown to you based upon your likely interests, which are inferred from your device’s browsing history. This information is collected through the use of cookies and similar technologies. </Text>
                            <Text style={ContactStyles.title}>Contact us</Text>
                            <Text style={ContactStyles.content}>If you have any queries or comments about this Policy or to exercise any of your rights under the GDPR, please contact us by email at: 
                            <TouchableOpacity onPress={handleContactUs}>
                                    <Text style={{ color: 'blue', top: 4 }}> feedback@ibc24.in</Text>
                                </TouchableOpacity></Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    };
}
