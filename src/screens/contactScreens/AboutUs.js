/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';
import SubHeader from '../../components/SubHeader';
import {commonstyles} from '../../styles/commonstyles';
import {ContactStyles} from '../../styles/contactScreenStyles';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView styles={commonstyles.container}>
        <SubHeader
          title={'About Us'}
          isShare={true}
          leftBtnClick={() => this.props.navigation.goBack()}
          isBook={true}
        />
        <ScrollView>
          <View style={ContactStyles.mainView}>
            <View style={ContactStyles.subView}>
              <Text style={ContactStyles.content}>
                In 1934, when India’s struggle for freedom was at the forefront,
                Shri Ramgopal Maheshwari founded the Hindi language newspaper
                Navabharat, in Nagpur. The Navabharat Group, have always taken
                the dream of free India forward and tried to make it as whole.
                Navabharat has a solid foothold in journalism because of its
                unflinching conviction to transform the nation into a ‘New
                India’. Through our analysis, perspective and opinion about the
                subject Navabharat is able to provide an insight on serious
                issues to its diverse and discerning audience. Navabharat never
                wanted to keep language as the hurdle in the path of its dream
                of New India and so breaking the barrier it launched its Marathi
                daily ‘Navarashtra’. Being the new voice of Maharashtra,
                Navarashtra is published from three centers Nagpur, Mumbai and
                Pune along with its spread in the rural areas. The English daily
                of Navabharat Media group is known as ‘Central Chronicle’ which
                was started from Bhopal in the year 1957. Today Navabharat is
                circulated in 5 Indian States – Maharashtra, Madhya Pradesh,
                Chhattisgarh, Orissa and Gujarat – and is considered one of the
                biggest circulated in central India with the 6th highest
                readership according to IRS.
              </Text>
              <Text style={ContactStyles.title}>Our Vision </Text>
              <Text style={ContactStyles.content}>
                Navabharat has been a visionary endeavor right from its
                beginning in the first half of the twentieth century. Our roots
                being in the independence movement, a dream of an India free of
                exploitation and injustice has always been close to us. Now as
                an independent country, India has attained many remarkable
                heights despite numerous setbacks, but there are countless
                aspirations that still remain unfulfilled. Living up to these
                expectations is Navabharat’s steadfast vision, and through all
                our businesses we are for a sustainable environment and an
                unprejudiced socio-economic growth.
              </Text>
              <Text style={ContactStyles.title}>For Latest Update</Text>
              <Text style={ContactStyles.content}>
                For those who don’t have access to our newspapers, for them we
                have Navabharat and Navarashtra e-paper website, where you can
                read the entire newspaper with different editions. Also for
                latest update along with Navabharat and Navarashtra’s Web Portal
                we have three applications namely Navabharat Shorts, Navabharat
                App & Navarashtra App.
              </Text>
              <Text style={ContactStyles.title}>Digital Presence</Text>
              <Text style={ContactStyles.content}>
                Consumption of digital media is growing at a faster rate and
                majority of the world population is there on social media
                platforms like Facebook, Twitter, Instagram, Pinterest and
                YouTube. Navabharat is also available to its users on these
                platforms.{'\n'}
                {'\n'}
                To know more about us kindly visit our website:
                http://www.navabharatmedia.com/
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
