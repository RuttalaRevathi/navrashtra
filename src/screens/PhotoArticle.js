/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Share,
  ActivityIndicator,
} from 'react-native';
import {
  commonstyles,
  whitecolor,
  gllery_background,
} from '../styles/commonstyles';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {HeaderStyle} from '../styles/Header.Styles';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import getRelatedAction from '../redux/actions/getRelatedAction';
import Ripple from 'react-native-material-ripple';
import HandlePressable from '../components/HandlePressable';

const PhotoArticle = ({navigation, route}) => {
  const scrollViewRef = useRef(null);
  const dispatch = useDispatch();

  const result1 = route?.params?.item?.content?.rendered;
  var result = result1?.replace('lazyload', 'text/javascript');

  result = result.replace(/<a[^>]*>/g, '').replace(/<\/a>/g, '');
  const [showWebView, setShowWebView] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowWebView(true), 500);
  }, []);

  useEffect(() => {
    dispatch(getRelatedAction());
  }, []);

  // Date and time
  const apiDate = route?.params?.item?.date;
  const formattedDate = moment(apiDate).format('MMM DD, YYYY | hh:mm A');

  const sharecall = () => {
    const Link_Url = route?.params?.item?.link;
    Share.share({
      message: Link_Url,
    })
      .then(result => console.log(result))
      .then(error => console.log(error));
  };

  const authorName = route.params?.item?.author_slug;
  
  return (
    <View style={commonstyles.container}>
      <View style={HeaderStyle.subHeaderviewHeight}>
        <Ripple
          style={commonstyles.iconRipple}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../Assets/Images/arrow.png')}
            style={headerStyles.topActionIcon}
          />
        </Ripple>
        <HandlePressable
        style={commonstyles.iconRipple}
          onPress={() => {
            sharecall();
          }}>
          <Image
            source={require('../Assets/Images/share_black.png')}
            style={headerStyles.topActionIcon}
          />
        </HandlePressable>
      </View>
      <ScrollView
        ref={scrollViewRef}
        style={{backgroundColor: gllery_background}}>
        {/* Tittle */}
        <View style={{padding: 12, flex: 1}}>
          <HTMLView
            value={'<p>' + route?.params?.item?.title?.rendered + '</p>'}
            stylesheet={headerStyles}
          />
        </View>
        {/* time */}
        <View style={commonstyles.DetailTimeMainView}>
          <Ripple
            onPress={() => {
              navigation.push('Author', {
                url: authorName,
                screenName: 'PhotoArticle',
              });
            }}>
            <Text style={commonstyles.detailauthorgallery}>
              BY{' '}
              <Text style={{fontWeight: '600'}}>
                {route?.params?.item?.author_name}
              </Text>
            </Text>
          </Ripple>
          <Text style={commonstyles.detailTimegallery}>
            Updated on: {formattedDate}
          </Text>
        </View>
        <View>
          {showWebView ? (
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
        padding:10px 12px 0px 12px;
        text-align:left;
      
    }
   
    .gallery img{
        width:92% !important;
        height:auto !important;
        object-fit: contain;
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
              source={{html: result}}
              scrollEnabled={false}
              viewportContent={'width=device-width, user-scalable=no'}
            />
          ) : (
            <View style={{paddingTop: 20}}>
              <ActivityIndicator size={'large'} />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  p: {
    color: whitecolor,
    fontSize: 20,
    fontFamily: 'Mandali-Bold',
    lineHeight: 28,
    marginBottom: 0,
    fontWeight: '600',
  },
  topActionIcon: {width: 22, height: 22}
});

export default PhotoArticle;
