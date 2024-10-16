/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, FlatList, Share, Dimensions } from 'react-native';
import { appThemeColor, blackcolor, commonstyles, Header_text, whitecolor } from '../styles/commonstyles';
import AutoHeightWebView from 'react-native-autoheight-webview';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderStyle } from '../styles/Header.Styles';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';
import { connect, useDispatch } from 'react-redux';
import getRelatedAction from '../redux/actions/getRelatedAction';
import { WebView } from 'react-native-webview';


const screenWidth = Dimensions.get('window').width;

const PhotoArticle = ({ navigation, route }: Props) => {
  const [detailsData, setDetailsData] = useState([]);
  const scrollViewRef = useRef(null);
  const dispatch = useDispatch();


  const result1 = route?.params?.item?.content?.rendered;
  var result = result1?.replace('lazyload', 'text/javascript');
  useEffect(() => {
    dispatch(getRelatedAction());
    setDetailsData(route?.params?.detailsData);
  }, []);

  const getIndex = () => {
    var index = detailsData.findIndex(
      x => x.id === route?.params?.item?.id,
    );
    return index + 1;
  };
  const sharecall = (name) => {
    const Link_Url = route?.params?.item?.link;
    Share.share({
      message: Link_Url,
    })
      .then((result) => console.log(result))
      .then((error) => console.log(error));
  };

  return (

    <View style={commonstyles.container}>
      <View >
      <View style={HeaderStyle.subHeaderviewHeight}>
          <View style={{ flex: 0.3 }}>
            <TouchableOpacity onPress={() => {
              navigation.goBack();
            }} style={{ zIndex: 999 }}>
              <Image
                source={require('../Assets/Images/arrow_white.png')}
                style={{}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{

            }}>
            <TouchableOpacity style={{}}
              onPress={() => { sharecall() }}>
              <Image
                source={require('../Assets/Images/share_white.png')}
                style={{}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView ref={scrollViewRef}
        style={{ backgroundColor: blackcolor, }}
      >
        <View>
          <View style={{ margin: 10, flex: 1, }}>
            <HTMLView
              value={'<p>' + route?.params?.item?.title?.rendered + '</p>'}
              stylesheet={headerStyles}
            />
          </View>
          <View>
            <AutoHeightWebView
              javaScriptEnabled={true}
              scalesPageToFit={false}
              customStyle={`
    @font-face {
      font-family: 'Mandali';
      src: url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');
    }
    p,.wp-caption-text {
      font-family: 'Mandali', sans-serif;
      color:#fff
    }
    
    .gallery img{
        width:100% !important;
         height:auto !important;
         object-fit:contain;
         aspect-ratio:10/9;
    }
  `}
              source={{ html: result }}
              viewportContent={'width=device-width, user-scalable=no'}
            />

          </View>
          {/* more gallry */}
          <View>
            <View style={{ margin: 10 }}>
              <Text style={{ color: whitecolor, fontSize: 22, fontWeight: '800' }}>More Gallery</Text>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              persistentScrollbar={false}
              horizontal={true}
              data={detailsData?.slice(getIndex(), getIndex() + 10)}
              renderItem={({ item, index }) => (

                <View style={{ marginRight: 5, marginLeft: 15, marginBottom: 30 }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (scrollViewRef.current) {
                        scrollViewRef.current.scrollTo({ y: 0, animated: true, });
                      }
                      navigation.navigate('PhotoArticle', {
                        item: item,
                        detailsData: route.params.detailsData,
                      });
                    
                    }}>
                    <View
                      style={{
                        width: Dimensions.get('window').width / 1.5,
                        // backgroundColor:whitecolor
                      }}>
                      <View
                        style={{
                          height: 200,
                        }}>
                        <View>
                        {typeof item?.web_featured_image === 'string' && item?.web_featured_image.trim() !== '' ? (
                                 <Image
                                 style={commonstyles.morevideos}
                                 source={{ uri: item?.web_featured_image }}
                             />
                              ) : null}
                        
                        </View>
                        <View>
                          <LinearGradient
                            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.8)', 'rgba(0,0,0,1)']}
                            style={{
                              width: '100%',
                              flex: 1.4,
                              bottom: 0,

                              position: 'absolute',
                              height: 100,
                            }}>
                            <Text
                              numberOfLines={2}
                              ellipsizeMode="tail"
                              style={{
                                color: whitecolor,
                                fontFamily: 'Mandali-Bold',
                                fontSize: 18,
                                marginLeft: 10,
                                marginRight: 10,
                                lineHeight: 29,
                                bottom: 10,
                                position: 'absolute',
                              }}>
                              {item?.title?.rendered}
                            </Text>
                          </LinearGradient>

                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}

            />
          </View>

        </View>


      </ScrollView >

    </View >
  );
};
const styles = StyleSheet.create({
  p: {
    color: '#000',
    fontSize: 22,
    fontFamily: 'Mandali-Regular',
    lineHeight: 30,
  },
});
const headerStyles = StyleSheet.create({
  p: { color: whitecolor, fontSize: 26, fontFamily: 'Mandali-Bold', lineHeight: 37 },

});


export default PhotoArticle;
