/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, SafeAreaView, Linking, ScrollView, StyleSheet} from 'react-native';
import SubHeader from '../../components/SubHeader';
import {commonstyles, graycolor} from '../../styles/commonstyles';
import {ContactStyles} from '../../styles/contactScreenStyles';

export default class ContactUs extends Component {
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
        <SubHeader
          title={'Contact Us'}
          leftBtnClick={() => this.props.navigation.goBack()}
          isBook={true}
        />
        <View style={ContactStyles.Container}>
          <ScrollView>
            <View style={ContactStyles.mainView}>
              <View style={ContactStyles.subView}>
                <Text style={ContactStyles.text1}>
                  For your questions and media related inquiries you can find
                  our offices at:
                </Text>
                <View style={styles.cntBox}>
                  <Text style={ContactStyles.title}>
                    Registered Office :
                  </Text>
                  <Text style={ContactStyles.text2}>
                    Navabharat Bhavan, Chhatrapati Square,
                  </Text>
                  <Text style={ContactStyles.text2}>
                    Wardha Road, Nagpur – 440015
                  </Text>
                  <View style={{borderTopWidth: 1, borderColor: graycolor,marginVertical: 12}}></View>
                  <Text style={ContactStyles.title}>Contact:</Text>
                  <Text style={ContactStyles.text2}><Text style={{fontWeight: '700'}}>News:</Text> sanjay.tiwari@navabharatmedia.com</Text>
                  <Text style={ContactStyles.text2}><Text style={{fontWeight: '700'}}>Business:</Text> arvinder.bhamra@navabharatmedia.com</Text>
                  <Text style={ContactStyles.text2}><Text style={{fontWeight: '700'}}>Admin:</Text> rahul.abhyankar@navabharatmedia.com</Text>
                  <Text style={ContactStyles.text2}><Text style={{fontWeight: '700'}}>Phone:</Text> 0712-2284001</Text>
                </View>

                <View style={styles.cntBox}>
                  <Text style={ContactStyles.title}>
                  Corporate Office:
                  </Text>
                  <Text style={ContactStyles.text2}>
                  No. 189 – A, Anand Estate, Sane Guruji Marg,
                  </Text>
                  <Text style={ContactStyles.text2}>
                   Chinchpokli West, Mumbai – 400011
                  </Text>
                  <View style={{borderTopWidth: 1, borderColor: graycolor,marginVertical: 12}}></View>
                  <Text style={ContactStyles.title}>Contact:</Text>
                  <Text style={ContactStyles.text2}><Text style={{fontWeight: '700'}}>News:</Text> sanjay.tiwari@navabharatmedia.com</Text>
                  <Text style={ContactStyles.text2}><Text style={{fontWeight: '700'}}>Business:</Text> arvinder.bhamra@navabharatmedia.com</Text>
                  <Text style={ContactStyles.text2}><Text style={{fontWeight: '700'}}>Admin:</Text> a.srinivas@navabharatmedia.com</Text>
                  <Text style={ContactStyles.text2}><Text style={{fontWeight: '700'}}>Phone:</Text> 022- 23018222</Text>
                </View>

                <View style={styles.cntBox}>
                  <Text style={ContactStyles.title}>
                  Branch Office:
                  </Text>
                  <Text style={ContactStyles.text2}>
                  UGF -11, Indra Prakash building,
                  </Text>
                  <Text style={ContactStyles.text2}>
                  21- Barakhamba Road, New Delhi – 110001
                  </Text>
                  <View style={{borderTopWidth: 1, borderColor: graycolor,marginVertical: 12}}></View>
                  <Text style={ContactStyles.title}>Contact:</Text>
                  <Text style={ContactStyles.text2}><Text style={{fontWeight: '700'}}>News:</Text> sanjay.tiwari@navabharatmedia.com</Text>
                  <Text style={ContactStyles.text2}><Text style={{fontWeight: '700'}}>Business:</Text> gaurav.bisht@navabharatmedia.com</Text>
                  <Text style={ContactStyles.text2}><Text style={{fontWeight: '700'}}>Admin:</Text> arvinder.bhamra@navabharatmedia.com</Text>
                  <Text style={ContactStyles.text2}><Text style={{fontWeight: '700'}}>Phone:</Text> 11-23354237</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  cntBox: {borderWidth: 1, borderColor: graycolor, padding: 12, borderRadius: 10, marginBottom: 16}
})
