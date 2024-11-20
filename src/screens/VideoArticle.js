/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, FlatList, Share, Dimensions } from 'react-native';
import { appThemeColor, blackcolor, commonstyles, Header_text, red_color, whitecolor, redcolor } from '../styles/commonstyles';
import { HeaderStyle } from '../styles/Header.Styles';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';
import { connect, useDispatch } from 'react-redux';
import getRelatedAction from '../redux/actions/getRelatedAction';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { useState } from 'react';
import FastImage from 'react-native-fast-image';
const screenWidth = Dimensions.get('window').width;

const VideoArticle = ({ navigation, route }: Props) => {
  const [detailsData, setDetailsData] = useState([]);
  const scrollViewRef = useRef(null);
  const dispatch = useDispatch();
  const source = route?.params?.item?.content?.rendered;
  const [videoAvailable, setVideoAvailable] = useState(true);

  var source1 = source?.replace('lazyload', 'text/javascript');

  useEffect(() => {
    // Check if source1 contains a <video> or <iframe> element
    const videoOrIframeRegex = /<video|<iframe|blockquote/g;
    if (!videoOrIframeRegex.test(source1)) {
      setVideoAvailable(false);
    }
    setDetailsData(route?.params?.detailsData);

  }, [source1]);
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
  const decode = require('html-entities-decoder');
  const now = moment.utc();
  const date = moment.utc(route?.params?.item?.date_gmt || now);
  const diffSeconds = now.diff(date, 'seconds');
  const diffMinutes = now.diff(date, 'minutes');
  const diffHours = now.diff(date, 'hours');
  const diffDays = now.diff(date, 'days');

  let formattedDate;
  if (diffSeconds < 60) {
    formattedDate = `${diffSeconds} सेकंड पहले`;
  } else if (diffMinutes < 60) {
    formattedDate = `${diffMinutes} मिनट पहले`;
  } else if (diffHours < 24) {
    formattedDate = `${diffHours} घंटे पहले`;
  } else {
    formattedDate = `${diffDays} दिन पहले`;
  }
  // Image url
  const defaultImage = require('../Assets/Images/no_image.jpeg');
  const imageUrl = route?.params?.item?.web_featured_image
  ? { uri: route?.params?.item?.web_featured_image }
  : defaultImage;
  return (
    <View style={{ backgroundColor: whitecolor, flex: 1 }}>
      <View>
        <View style={HeaderStyle.subHeaderviewHeight}>
          <View style={{}}>
            <TouchableOpacity onPress={() => {
              navigation.navigate(route.params.screenName==="Videos"?"Videos":"Home");
            }} >
              <Image
                source={require('../Assets/Images/arrow.png')}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{

            }}>
            <TouchableOpacity style={{}}
              onPress={() => { sharecall() }}>
              <Image
                source={require('../Assets/Images/share_black.png')}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}
        scrollEnabled={true}>
        <View>
          {/* Title */}
          <View style={{ paddingLeft: 10, paddingTop: 10 }}>

            <Text numberOfLines={3} ellipsizeMode="tail" style={commonstyles.categoryText}>
              {decode(route?.params?.item?.title?.rendered)}
            </Text>

          </View>

          {/* Time */}
          <View style={{ flexDirection: 'row', paddingLeft: 10,paddingBottom:5  }}>
            {/* Author */}
            <View style={{
            }}>
              <Text style={commonstyles.detailauthor}>
                {route?.params?.item?.author_name}
              </Text>
            </View>
            {/* category name */}
            <View style={{}}>
              <Text style={commonstyles.detailsCateName}> | {route?.params?.item?.category_name}</Text>
            </View>
            {/* Time */}
            <View style={{}}>
              <Text style={commonstyles.detailTime}> | {formattedDate}</Text>
            </View>
          </View>
          {/* Image */}
          <View style={{ width: '100%' }}>
              <FastImage
                source={imageUrl}
                style={commonstyles.Detailslargecard}
                resizeMode={FastImage.resizeMode.cover}
              />
            </View>
          {/* Content */}
          <Text>

          </Text>
          <View style={{
            justifyContent: 'center',
          }}>
            {videoAvailable ? (
              <AutoHeightWebView
                javaScriptEnabled={true}
                scalesPageToFit={false}
                allowsFullscreenVideo={true}
                style={{ width: Dimensions.get('window').width, }}
                customStyle={`
                iframe[src^="https://www.youtube.com/embed/"] {
                                width:100%;
                                height:225px;
                                padding-bottom:10px;
                                 
                             
                    }
                iframe[title]{
                  font-size: 16px;
                }
                * {
                  font-family: 'Mandali-Bold';
                  line-height: 1.5;
                  -webkit-user-select: auto;
                    -webkit-touch-callout: default; 
                   }
                 
                  h4 {
                    margin:5px;
                  }
                   p strong {
                    font-size: 18px;  
                   }
                p, h4 a {
                  font-size: 14px;
                  text-align:left; 
                  margin:5px;
                  font-family:'Mandali-Regular';
                  line-height:1.6;
                  padding:0px 5px
                                                }
                                               
                                                 p, h2{
                                                   font-size: 18px;
                                                  text-align:left;
                                                  margin:5px;
                                                  font-family:'Mandali-Regular';
                                                  line-height:1.6
                                                  font-weight:'bold';
                                                  }
                                                  h1{
                                                   font-size: 18px;
                                                  text-align:left;
                                                  margin:5px;
                                                  font-family:'Mandali-Regular';
                                                  line-height:1.6
                                                  font-weight:'bold';
                                                  }
                                                p img{
                                                  width:100%;
                                                  height:inherit
                                                }
                                                p iframe{
                                                  width:100%;
                                                  height:inherit
                                                }
                                                img{
                                                  width:100%;
                                                  height:inherit
                                                }
                                                div[id*=attachment]{
                                                  max-width:100%!important;
                                                  height:inherit
                                                }
                                              
                                              
              `}

                source={{ html: source1, baseUrl: 'https://instagram.com', }}
                viewportContent={'width=device-width, user-scalable=yes'}
                onError={(error) => console.error('WebView Error:', error)}
              />
            ) : (
              <View style={{}}>
                <View>
                  <Text style={{ color: blackcolor, fontWeight: 'bold', fontSize: 18 }}>
                    {route?.params?.item?.title?.rendered}
                  </Text>
                </View>
                <View style={{}}>
                  <Text style={{
                    fontSize: 20, fontWeight: 'bold',
                    color: blackcolor
                  }}>Video not available</Text>

                </View>
              </View>
            )}
          </View>

        </View>

      </ScrollView>
    </View>
  );
};


export default VideoArticle;
const styles = StyleSheet.create({
  scrollView: { flexGrow: 1, },
  webview: {
    width: '100%',
    // Adjust width as needed
  },
});