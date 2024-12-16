/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, FlatList, Share, Dimensions } from 'react-native';
import { appThemeColor, blackcolor, commonstyles, Header_text, whitecolor, gllery_background } from '../styles/commonstyles';
import AutoHeightWebView from 'react-native-autoheight-webview';
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
  // Remove all anchor tags
  result = result.replace(/<a[^>]*>/g, "").replace(/<\/a>/g, "");
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
          <View style={{}}>
          <TouchableOpacity onPress={() => {
              navigation.navigate(route.params.screenName==="Photos"?"Photos":"Home");
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
      <ScrollView ref={scrollViewRef}
        style={{ backgroundColor: gllery_background, }}
      >
        <View>
          <View style={{ margin: 10, flex: 1, }}>
            <HTMLView
              value={'<p>' + route?.params?.item?.title?.rendered + '</p>'}
              stylesheet={headerStyles}
            />
          </View>
          <View style={{}}>
            <AutoHeightWebView
              javaScriptEnabled={true}
              scalesPageToFit={false}
              customStyle={`
    @font-face {
        font-family: 'Mandali';
        src: url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');
    }
    p {
        font-family: 'Mandali', sans-serif;
        color:#fff;
      
    }
      
  .wp-caption-text {
        font-family: 'Mandali', sans-serif;
        color:#fff;
        padding:10px 10px 0px 10px;
        text-align:left;
      
    }
   
    .gallery img{
        width:95% !important;
        height:auto !important;
        object-fit:fill;
        aspect-ratio:10/7;
    }
    `}
              injectedJavaScript={`
        document.querySelectorAll('a').forEach(a => {
            a.onclick = function(event) {
                event.preventDefault();
            };
        });
        true;
    `}
              source={{ html: result }}
              scrollEnabled={false}
              viewportContent={'width=device-width, user-scalable=no'}
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
  p: { color: whitecolor, fontSize: 22, fontFamily: 'Mandali-Bold', lineHeight: 29, },

});


export default PhotoArticle;
