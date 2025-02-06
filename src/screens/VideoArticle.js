/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Share, Dimensions } from 'react-native';
import { blackcolor, commonstyles, whitecolor } from '../styles/commonstyles';
import { HeaderStyle } from '../styles/Header.Styles';
import moment from 'moment';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { useState } from 'react';
import FastImage from 'react-native-fast-image';

const VideoArticle = ({ navigation, route }: Props) => {
  const [detailsData, setDetailsData] = useState([]);
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
 
  const sharecall = (name) => {
    const Link_Url = route?.params?.item?.link;
    Share.share({
      message: Link_Url,
    })
      .then((result) => console.log(result))
      .then((error) => console.log(error));
  };
  const decode = require('html-entities-decoder');
  // Date and time 
  const apiDate = route?.params?.item?.date;
  const formattedDate = moment(apiDate).format("MMM DD, YYYY | hh:mm A");

  // Image url
  const defaultImage = require('../Assets/Images/no_image.jpeg');
  const imageUrl = route?.params?.item?.web_featured_image
    ? { uri: route?.params?.item?.web_featured_image }
    : defaultImage;
  return (
    <View style={{ backgroundColor: whitecolor, flex: 1 }}>
      <View style={HeaderStyle.subHeaderviewHeight}>
        <TouchableOpacity onPress={() => {
          navigation.navigate(route.params.screenName === "Videos" ? "Videos" : "Home");
        }} >
          <Image
            source={require('../Assets/Images/arrow.png')}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{}}
          onPress={() => { sharecall() }}>
          <Image
            source={require('../Assets/Images/share_black.png')}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}
        scrollEnabled={true}>
        <View>
          {/* Title */}
          <View style={{ paddingHorizontal: 12, paddingTop: 12 }}>
            <Text numberOfLines={3} ellipsizeMode="tail" style={commonstyles.categoryText}>
              {decode(route?.params?.item?.title?.rendered)}
            </Text>
          </View>
          {/* time */}
          <View
            style={commonstyles.DetailTimeMainView}>
            <Text style={commonstyles.detailauthor}>
              BY {route?.params?.item?.author_name}
            </Text>
            <Text style={commonstyles.detailTime}>Updated on: {formattedDate}</Text>
          </View>

          <FastImage
            source={imageUrl}
            style={commonstyles.Detailslargecard}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={{
            justifyContent: 'center',
          }}>
            {videoAvailable ? (
              <AutoHeightWebView
                javaScriptEnabled={true}
                scalesPageToFit={false}
                allowsFullscreenVideo={true}
                scrollEnabled={false}
                mixedContentMode="always"
                mediaPlaybackRequiresUserAction={false}
                style={{ width: Dimensions.get('window').width, }}
                customStyle={`
                iframe[src^="https://www.youtube.com/embed/"] {
                                width:100%;
                                height:225px;
                                padding-bottom:12px;
                                 allowfullscreen: true;
                                 
                             
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
              <>
                <Text style={{ color: blackcolor, fontWeight: 'bold', fontSize: 18 }}>
                  {route?.params?.item?.title?.rendered}
                </Text>
                <Text style={{
                  fontSize: 20, fontWeight: 'bold',
                  color: blackcolor
                }}>Video not available</Text>
              </>
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