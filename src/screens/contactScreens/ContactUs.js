/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, SafeAreaView, Linking, Image, ScrollView, TouchableOpacity } from 'react-native';
import SubHeader from '../../components/SubHeader';
import { Dark_Gray, blackcolor, commonstyles, gallerycolor, whitecolor } from '../../styles/commonstyles';
import { ContactStyles } from '../../styles/contactScreenStyles';


export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const Mail = () => {
            Linking.openURL('mailto:admin@tppl.news');
        };

        const Contact = () => {
            Linking.openURL('tel:+91 40 2329 1999');
        };
        const website = () => {
            Linking.openURL('https://telanganatoday.com/');
        };
        const ContactFax = () => {
            Linking.openURL('fax:+91 40 2329 1117');
        };
        return (
            <SafeAreaView style={commonstyles.container}>

                <SubHeader title={'Contact Us'}
                    leftBtnClick={() => this.props.navigation.goBack()}
                    isBook={true}


                />

                <View style={ContactStyles.Container}>
                    <ScrollView style={{}}>
                        <View style={ContactStyles.mainView}>
                            <View style={ContactStyles.subView}>
                                <Text style={ContactStyles.title}>For your questions and media related inquiries you can find our offices at:</Text>
                                <Text style={ContactStyles.underlinetitle}>Registered Office :</Text>
                                <Text style={ContactStyles.text2}>Navabharat Bhavan, Chhatrapati Square,</Text>
                                <Text style={ContactStyles.text2}>Wardha Road, Nagpur – 440015</Text>
                                <Text style={ContactStyles.title}>Please Contact:</Text>

                                <Text style={ContactStyles.title}>News:</Text>
                                <Text style={ContactStyles.content}>sanjay.tiwari@navabharatmedia.com</Text>

                                <Text style={ContactStyles.title}>Business:</Text>
                                <Text style={ContactStyles.content}>arvinder.bhamra@navabharatmedia.com</Text>
                                <Text style={ContactStyles.title}>Administration:</Text>
                                <Text style={ContactStyles.content}>rahul.abhyankar@navabharatmedia.com</Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={ContactStyles.title}>Phone: </Text><Text style={ContactStyles.content}>0712-2284001</Text>
                                </View>
                                <Text style={ContactStyles.underlinetitle}>Corporate Office:</Text>

                                <Text style={ContactStyles.content}>No. 189 – A, Anand Estate,</Text>

                                <Text style={ContactStyles.content}>Sane Guruji Marg, Chinchpokli West,</Text>

                                <Text style={ContactStyles.content}>Mumbai – 400011</Text>

                                <Text style={ContactStyles.title}>Please Contact:</Text>

                                <Text style={ContactStyles.title}>News:</Text>
                                <Text style={ContactStyles.content}>sanjay.tiwari@navabharatmedia.com</Text>

                                <Text style={ContactStyles.title}>Business:</Text>
                                <Text style={ContactStyles.content}>arvinder.bhamra@navabharatmedia.com</Text>

                                <Text style={ContactStyles.title}>Administration:</Text>
                                <Text style={ContactStyles.content}>a.srinivas@navabharatmedia.com</Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={ContactStyles.title}>Phone: </Text>
                                    <Text style={ContactStyles.content}>022- 23018222</Text>
                                </View>
                                <Text style={ContactStyles.underlinetitle}>Branch Office:</Text>

                                <Text style={ContactStyles.content}>UGF -11, Indra Prakash building,</Text>

                                <Text style={ContactStyles.content}>21- Barakhamba Road,</Text>

                                <Text style={ContactStyles.content}>New Delhi – 110001</Text>

                                <Text style={ContactStyles.title}>Please Contact:</Text>

                                <Text style={ContactStyles.title}>News:</Text>
                                <Text style={ContactStyles.content}>sanjay.tiwari@navabharatmedia.com</Text>

                                <Text style={ContactStyles.title}>Business:</Text>
                                <Text style={ContactStyles.content}>gaurav.bisht@navabharatmedia.com</Text>

                                <Text style={ContactStyles.title}>Administration:</Text>
                                <Text style={ContactStyles.content}>arvinder.bhamra@navabharatmedia.com</Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={ContactStyles.title}>Phone:</Text> 
                                    <Text style={ContactStyles.content}>11-23354237</Text>

                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </View>

            </SafeAreaView>
        );
    }
}