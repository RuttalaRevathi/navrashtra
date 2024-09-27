/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Text,
  View,

  ScrollView,
  SafeAreaView,
  Linking,
} from 'react-native';
import SubHeader from '../../components/SubHeader';
import {
  commonstyles,
} from '../../styles/commonstyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { blackcolor, ContactStyles } from '../../styles/contactScreenStyles';
import { TouchableOpacity } from 'react-native';

export default class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={commonstyles.container}>
        {/* <SubHeader title={'नियम व शर्तें'} leftBtnClick={() => this.props.navigation.goBack()}/> */}

        <ScrollView>
          <View style={ContactStyles.mainView}>
            <View style={ContactStyles.subView}>
            <View style={ContactStyles.headingview}>
                                <Text style={ContactStyles.heading}>Conditions</Text>
                            </View>
              <Text style={ContactStyles.content}>
                By accessing  <TouchableOpacity onPress={() => Linking.openURL('http://www.ibc24.in/')}>
                  <Text style={{ textDecorationLine: 'underline', color: 'blue', top: 3 }}>www.ibc24.in</Text>
                </TouchableOpacity> which you have read, understood and agree to
                be legally bound by the terms of the following disclaimer and user agreement:
                This Site is owned and operated by SB Multimedia Pvt Ltd ("IBC24") and contains
                material which is derived in whole or in part from material supplied by the Company,
                various new agencies and other sources, and is protected by trademark laws.
                The restrictions on use of the material and content on this IBC24 Site by
                the Subscriber are specified below. Except where specifically authorised,
                the Subscriber may not modify, copy, reproduce, republish, upload, post,
                transmit or distribute in any way any material from this site including
                code and software. IBC24 has taken due care and caution in
                compilation of data for its web site. The Company shall have the right at
                any time to change or modify the terms and conditions applicable to Subscriber's
                use of the IBC24 Site. Such changes, modifications, additions or deletions shall
                be effective immediately upon notice thereof, which may be given by means including
                but not limited to, posting on the IBC24 Site, or by electronic or conventional mail, or by any other means by which Subscriber obtains notice thereof.
              </Text>
              <Text style={ContactStyles.title}>
                Terms of Use
              </Text>
              <Text style={ContactStyles.content}>
                By visiting our site you are agreeing to be bound by the following terms and conditions.
                We may change these terms and conditions at any time. Your continued use of IBC24 means
                that you accept any new or modified terms and conditions that we come up with. Please
                re-visit the `Terms of Use'
                link at our site from time to time to stay abreast of any changes that we may introduce.
                The term ` IBC24' is used through this entire Terms of Use document to refer to the
                website, its owners and the employees.
              </Text>
              <Text style={ContactStyles.title}>Indemnification</Text>
              <Text style={ContactStyles.content}>
                You shall indemnify, hold harmless and defend us, our subsidiaries and affiliates,
                licensors and all our members, directors, officers, employees, agents and
                representatives, from or against any liabilities, claims, demands, penalties, fines,
                lawsuits, judgments, losses and expenses (including any direct or indirect consequential
                losses, loss of profit, loss of reputation and all interest, penalties and legal and
                other professional costs and expenses) resulting in any way from the use of this
                website or any allegation of infringement or misappropriation of any patent, copyright,
                trade secret, trademark, or other intellectual property right under this Agreement
              </Text>
              <Text style={ContactStyles.title}>
                Licenses
              </Text>
              <Text style={ContactStyles.content}>IBC24 grants you a non-exclusive, non-transferable
                license, revocable at any time at IBC24 sole discretion, to access and use the Service
                strictly in accordance with the Terms. Use of the Service does not grant you any
                intellectual property
                rights in or to any information or content in the Service.</Text>
              <Text style={ContactStyles.title}>
                DISCLAIMER
              </Text>
              <Text style={ContactStyles.content}>4.1. We have taken due care and caution in
                compilation of the Content for our website. The Content includes facts, views, and
                opinions, which are of individuals and not that of the website or its management.
                Our Content licensors and we do not give any investment advice, tax advice, legal
                advice, or other professional advice. Our Content licensors and we do not guarantee
                or warrant the accuracy, completeness or timeliness of, or otherwise endorse these
                views, and opinions. We especially state that we have no financial
                liability whatsoever to you on account of the use of information provided on our website.</Text>
              <Text style={ContactStyles.content}>
                4.2. Neither we, nor any of our employees are responsible for any errors, omissions,
                or representations on any of our pages or on any links on any of our pages.
                We advise you to verify the veracity of all information before undertaking any alliance.
              </Text>
              <Text style={ContactStyles.title}>
              LAW AND JURISDICTION
              </Text>
              <Text style={ContactStyles.content}>
                The terms of this agreement are exclusively based on and subject to Indian law. You hereby consent to the exclusive jurisdiction and venue of courts in Raipur, Chhattisgarh, India in all disputes arising out of or relating to the use of this website. Use of this website is unauthorized in any jurisdiction that does not give effect to all provisions of these terms and conditions, including without limitation this paragraph.
              </Text>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
