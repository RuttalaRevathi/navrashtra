/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import SubHeader from '../../components/SubHeader';
import {
  commonstyles,
} from '../../styles/commonstyles';
import { ContactStyles } from '../../styles/contactScreenStyles';

export default class Complaints extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={commonstyles.container}>
        <SubHeader
          title={'Complaints'}
          leftBtnClick={() => this.props.navigation.goBack()}

        />
        <ScrollView>
          <View style={ContactStyles.mainView}>
            <View style={ContactStyles.subView}>
              <Text style={ContactStyles.title}>COMPLAINTS RELATING TO CONTENT</Text>
              <Text style={ContactStyles.content}>
                S B Multimedia Pvt Ltd, is a member of the News Broadcasters Federation. Our aim is, in all cases, to resolve complaints about the content on the Channel IBC 24 as satisfactorily and quickly as is reasonably possible.

                Any complaint relating to content shall be made by the person aggrieved within a reasonable time not exceeding 30 (thirty) days from the date of first broadcast. Your complaint should include the following:
              </Text>
              <Text style={ContactStyles.content}>
                1.the name/title of the broadcast you are complaining about
              </Text>
              <Text style={ContactStyles.content}>
                2.the date and time of the broadcast and the channel on which it was broadcast
              </Text>
              <Text style={ContactStyles.content}>
                3.the nature of the complaint , giving reasons
              </Text>
              <Text style={ContactStyles.content}>
                4.your name and contact details (anonymous complaints will not normally be considered)
                The complaint needs to be made to the following person
              </Text>
              <Text style={ContactStyles.title}>
              S B Multimedia Private Limited
              </Text>
              <Text style={ContactStyles.text2}>Contact Person</Text>
              <Text style={ContactStyles.text2}>Paramendra Mohan</Text>
              <Text style={ContactStyles.text2}>Executive Editor</Text>

              <Text style={ContactStyles.title}>
              Address:
              </Text>
              <Text style={ContactStyles.text2}>S B Multimedia Pvt Ltd.</Text>
              <Text style={ContactStyles.text2}>IBC 24, 1st Floor, Aarson Motors,</Text>
              <Text style={ContactStyles.text2}>Lodhipara Chowk, Raipur (CG) 492001</Text>
              <Text style={ContactStyles.title}>
              Phone:
              </Text>
              <Text style={ContactStyles.text2}>+91 - 771 - 4008700</Text>
              <Text style={ContactStyles.text2}>E-mail : Paramendra.mohan@ibc24.in</Text>
              <Text style={ContactStyles.text2}>IBC 24, 1st Floor, Aarson Motors,</Text>
              <Text style={ContactStyles.text2}>Lodhipara Chowk, Raipur (CG) 492001</Text>


            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
