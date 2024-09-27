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
            Linking.openURL('mailto:No_Reply@ibc24.com');
        };

        const Contact = () => {
            Linking.openURL('tel:0771-4008700');
        };
        const website = () => {
            Linking.openURL('https://www.ibc24.in/');
        };
        return (
            <SafeAreaView style={commonstyles.container}>

                <SubHeader title={'हमसे संपर्क करें'} isMenu={false} 
                    leftBtnClick={() => this.props.navigation.goBack()}


                />

                <View style={ContactStyles.Container}>
                    <View style={ContactStyles.HeaderviewHeight}>
                        <Text style={{ color: whitecolor, fontSize: 20, fontWeight: 'bold',textAlign:'center' }}>Head Office</Text>
                    </View>
                    <ScrollView style={{}}>
                        <View style={{}}>
                            <View style={ContactStyles.contactheadview}>
                                <View style={ContactStyles.contentview}>
                                    <Image style={ContactStyles.image}
                                        source={require('../../Assets/Images/address.png')} />
                                    <Text style={ContactStyles.text}>Address</Text>
                                </View>
                                <View style={{ width: '80%' }}>
                                    <Text numberOfLines={3}
                                        ellipsizeMode="tail" style={ContactStyles.text2}>Postal Address : S.B MULTIMEDIA PVT LTD First Floor, Lodhipara Chowk, Raipur,
                                        Chhattisgarh, 492001 ( C.G.) </Text>
                                </View>
                            </View>
                            <View style={ContactStyles.contactheadview}>
                                <View style={ContactStyles.contentview}>
                                    <Image style={ContactStyles.image}
                                        source={require('../../Assets/Images/telephone.png')} />
                                    <Text style={ContactStyles.text}>Phone Number</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={Contact}>

                                        <Text numberOfLines={3} ellipsizeMode="tail" style={ContactStyles.text1}>
                                            0771-4008700
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View style={ContactStyles.contactheadview}>
                                <View style={ContactStyles.contentview}>
                                    <Image style={ContactStyles.image}
                                        source={require('../../Assets/Images/mail.png')} />
                                    <Text style={ContactStyles.text}>Email</Text>
                                </View>
                                <TouchableOpacity onPress={Mail}>
                                    <Text style={ContactStyles.text1}>No_Reply@ibc24.com</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={ContactStyles.contactheadview}>
                                <View style={ContactStyles.contentview}>
                                    <Image style={ContactStyles.image}
                                        source={require('../../Assets/Images/click.png')} />
                                    <Text style={ContactStyles.text}>Website</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={website}>

                                        <Text numberOfLines={3}
                                            ellipsizeMode="tail" style={ContactStyles.text1}>https://www.ibc24.in/</Text>

                                    </TouchableOpacity>
                                </View>
                            </View>




                        </View>
                    </ScrollView>
                </View>

            </SafeAreaView>
        );
    }
}