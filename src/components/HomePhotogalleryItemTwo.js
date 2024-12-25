/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {
  commonstyles,
  light_yellow,
  redcolor,
  whitecolor,
} from '../styles/commonstyles';

class HomePhotogalleryItemTwo extends React.PureComponent {
  getPhotoCount = (content) => {
    const regex = /<dl class='gallery-item'>/g;
    const matches = content.match(regex);
    return matches ? matches.length : 0;
  };

  render() {
    let decode = require('html-entities-decoder');

    const defaultImage = require('../Assets/Images/no_image.jpeg');
    const imageUrl = this.props?.item?.web_featured_image
      ? { uri: this.props?.item?.web_featured_image }
      : defaultImage;

    const photoCount = this.getPhotoCount(this.props?.item?.content?.rendered);




    return (
      <View style={{ marginRight: 12 }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PhotoArticle', {
              item: this.props?.item,
              detailsData: this.props?.propsdata,
            });
          }}>
          <View style={{ paddingBottom: 12 }}>
            <View style={{ position: 'relative' }}>
              <Image
                source={imageUrl}
                style={commonstyles.HomephotosliderImg}
              />
              <View style={{
                bottom: 6,
                right: 12,
                position: 'absolute',
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={require('../Assets/Images/gallery.png')}
                      style={{ height: 15, width: 15, tintColor: whitecolor, }} />
                    <Text style={{
                      color: whitecolor,
                      fontSize: 14,
                      left: 4
                    }}>
                      {`${photoCount}`}
                    </Text>
                </View>
              </View>
            </View>
            <View style={commonstyles.homephotosliderTextView}>
              <Text numberOfLines={2} style={commonstyles.homephotosliderText}>
                {decode(this.props?.item?.title?.rendered)}
              </Text>
            </View>

          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default HomePhotogalleryItemTwo;
