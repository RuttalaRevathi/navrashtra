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
      <View style={{ paddingRight: 10 }}>
        
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PhotoArticle', {
              item: this.props?.item,
              detailsData: this.props?.propsdata,
            });
           
          }}>
          <View style={{ paddingBottom: 10 }}>
            <View style={{ position: 'relative' }}>
              <Image
                source={imageUrl}
                style={commonstyles.HomephotosliderImg}
              />
              <View style={{
                bottom: 6,
                left: 30,
                position: 'absolute',
              }}>
                <View style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: [{ translateX: -25 }, { translateY: -25 }],
                  padding: 5,
                  backgroundColor: redcolor,

                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius:5,

                }}>
                    <View style={{flexDirection:'row',top:3}}>
                                 
                                 <View> 
                                     <Image
                                     source={require('../Assets/Images/gallery.png')}
                                     style={{ height: 15, width: 15, }}/>
                                   </View>
                                    <View>
                                     <Text style={{
                                       color: 'black',
                                       fontSize: 14,
                                       bottom: 4,left:3
                                     }}>
                                       { `${  photoCount}`}
                                     </Text>
                                   </View>
                                  
                                 </View>
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
