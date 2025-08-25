/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Share,
  Dimensions,
  ActivityIndicator, FlatList
} from 'react-native';
import { blackcolor, commonstyles, graycolor, whitecolor } from '../styles/commonstyles';
import { HeaderStyle } from '../styles/Header.Styles';
import moment from 'moment';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { useState } from 'react';
import FastImage from 'react-native-fast-image';
import Ripple from 'react-native-material-ripple';
import HandlePressable from '../components/HandlePressable';
import DetailsComponentTwo from '../components/DetailsComponentTwo';
import DetailsComponentOne from '../components/DetailsComponentOne';
import { BaseUrl, DetailsUrl, RelatedUrl } from '../utilities/urls';
import TopicItems from '../components/TopicItems';

const VideoArticle = ({ navigation, route }) => {
  const source = route?.params?.item?.content?.rendered;
  const [videoAvailable, setVideoAvailable] = useState(true);
  const [showWebView, setShowWebView] = useState(false);
  const [relatedData, setRelatedData] = useState(null);
  const [detailsData, setDetailsData] = useState([]);
  const [detailArticleData, setDetailArticleData] = useState(null);
  const [renderWebView, setRenderWebView] = useState(false);
  const [firstArticle, setFirstArticle] = useState(null);
  const [articleId, setArticleId] = useState(route.params?.item?.id);
    const [tags, setTags] = useState([]);

  var source1 = source?.replace('lazyload', 'text/javascript');

  useEffect(() => {
    getDetailArticleAction(articleId);
    getRelatedAction(articleId);
  }, [articleId]);

  useEffect(() => {
    setTimeout(() => setShowWebView(true), 500);
  }, []);

    useEffect(() => {
    if (route?.params?.detailsData) {
      setDetailsData(route.params.detailsData);
    }
  }, [route?.params?.detailsData]);
    useEffect(() => {
    fetchSingleArticleObj();
  }, [route]);

  useEffect(() => {
    if (
      detailArticleData &&
      detailArticleData.data &&
      detailArticleData.data.length > 0
    ) {
      const firstArticleData = detailArticleData.data[0];
      setFirstArticle(firstArticleData);
      setTags(firstArticleData?.tags);
    }
  }, [detailArticleData]);

  function fetchSingleArticleObj() {
    const articleObj = route.params?.detailsData?.filter(
      item => item.id === route.params?.item?.id,
    )[0];
    setFirstArticle(articleObj);
    setTags(articleObj?.tags);
  }

  useEffect(() => {
    const videoOrIframeRegex = /<video|<iframe|blockquote/g;
    if (!videoOrIframeRegex.test(source1)) {
      setVideoAvailable(false);
    }
  }, [source1]);

  const sharecall = () => {
    const Link_Url = route?.params?.item?.link;
    Share.share({
      message: Link_Url,
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };
  const decode = require('html-entities-decoder');
  const apiDate = route?.params?.item?.date;
  const formattedDate = moment(apiDate).format('MMM DD, YYYY | hh:mm A');

    const publishedapiDate = route?.params?.item?.date_gmt;
    const publishedformattedDate = moment(publishedapiDate).format('MMM DD, YYYY | hh:mm A');
  const authorName = route?.params?.item?.author_slug;
  const defaultImage = require('../Assets/Images/no_image.jpeg');
  const imageUrl = route?.params?.item?.web_featured_image
    ? { uri: route?.params?.item?.web_featured_image }
    : defaultImage;
 // Function to fetch the details of the article
  const getDetailArticleAction = async artId => {
    try {
      const response = await fetch(BaseUrl + DetailsUrl + '?id=' + artId);
      const responseJson = await response.json();
      setDetailArticleData(responseJson);
    } catch (error) {
      console.error('Error fetching article details:', error);
    }
  };
  const getRelatedAction = async artId => {
    try {
      const response = await fetch(BaseUrl + RelatedUrl + '?id=' + artId);
      const responseJson = await response.json();
      setRelatedData(responseJson);
    } catch (error) {
      console.error('Error fetching getRelatedAction data:', error);
    }
  };

  const getIndex = () => {
    var index = detailsData.findIndex(x => x.id === firstArticle?.id);
    return index + 1;
  };

  const renderItemOne = ({ item }) => (
    <DetailsComponentOne
      item={item}
      propsdata={detailsData}
      navigation={navigation}
    />
  );
  const renderItemTwo = ({ item }) => (
    <DetailsComponentTwo
      item={item}
      propsdata={relatedData?.data}
      navigation={navigation}
    />
  );
  return (
    <View style={{ backgroundColor: whitecolor, flex: 1 }}>
      <View style={HeaderStyle.subHeaderviewHeight}>
        <Ripple
          style={commonstyles.iconRipple}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../Assets/Images/arrow.png')}
            style={styles.topActionIcon}
          />
        </Ripple>
        <HandlePressable
          style={commonstyles.iconRipple}
          onPress={sharecall}>
          <Image
            source={require('../Assets/Images/share_black.png')}
            style={styles.topActionIcon}
          />
        </HandlePressable>
      </View>
      <ScrollView style={styles.scrollView} scrollEnabled={true}>
        <View>
          <View style={{ paddingHorizontal: 12, paddingTop: 6 }}>
            <Text style={commonstyles.categoryText}>
              {decode(route?.params?.item?.title?.rendered)}
            </Text>
          </View>
          <View style={commonstyles.DetailTimeMainView}>
            <Ripple
              onPress={() => {
                navigation.push('Author', {
                  url: authorName,
                  screenName: 'VideoArticle',
                });
              }}>
              <Text style={commonstyles.detailauthor}>
                BY{' '}
                <Text style={{ fontWeight: '700' }}>
                  {route?.params?.item?.author_name}
                </Text>
              </Text>
            </Ripple>
            <Text style={commonstyles.detailTime}>
              Updated on: {formattedDate}
            </Text>
          </View>

          <FastImage
            source={imageUrl}
            style={commonstyles.Detailslargecard}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View
            style={{
              justifyContent: 'center',
            }}>
            {(videoAvailable && showWebView) ? (
              <AutoHeightWebView
                javaScriptEnabled={true}
                scalesPageToFit={false}
                allowsFullscreenVideo={true}
                scrollEnabled={false}
                mediaPlaybackRequiresUserAction={false}
                style={{ width: Dimensions.get('window').width, opacity: 0.99 }}
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
                  text-align:left !important; 
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
                source={{ html: source1, baseUrl: 'https://instagram.com' }}
                viewportContent={'width=device-width, user-scalable=yes'}
                onError={error => console.error('WebView Error:', error)}
              />
            ) : (
              <View style={commonstyles.loadingContainer}>
                <ActivityIndicator size={'large'} color={blackcolor} />
              </View>
            )}
          </View>
           {/* Published view */}
          <View style={{
            marginLeft: 12,
            flexDirection: 'row',
            marginTop: 10
          }}>
            <Text style={commonstyles.publishedtext}>Published on: </Text>

            <Text style={commonstyles.detailTime}>{publishedformattedDate}</Text>
          </View>
        </View>
        
 {/* Topics */}
        <TopicItems navigation={navigation} tags={tags} categoryName={firstArticle?.category_name} />
        {/* Next Article */}
        <View
          style={{
            borderBottomColor: graycolor,
            borderBottomWidth: 2,
          }}>
          <View style={[commonstyles.homeOnetextView, commonstyles.sectionTitle]}>
            <Text style={commonstyles.Category}>Next Articles</Text>
          </View>
          {detailsData.length > 0 ? (
            <View style={commonstyles.articleContainer}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                persistentScrollbar={false}
                horizontal={true}
                data={detailsData?.slice(getIndex(), getIndex() + 5)}
                renderItem={renderItemOne}
                keyExtractor={(item) => item.id?.toString()}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={10}
              />
            </View>
          ) : (
            <Text
              style={commonstyles.noNextArticles}>
              No Next Articles
            </Text>
          )}
        </View>

        {/* Related News */}
        <View>
          <View style={[commonstyles.homeOnetextView, commonstyles.sectionTitle]}>
            <Text style={commonstyles.Category}>सम्बंधित ख़बरें</Text>
          </View>
          <View style={{ paddingHorizontal: 12 }}>
            <FlatList
              data={relatedData?.data?.slice(0, 4)}
              renderItem={renderItemTwo}
              keyExtractor={item => item.id.toString()}
              initialNumToRender={5}
              maxToRenderPerBatch={10}
              windowSize={10}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: { flexGrow: 1 },
  webview: {
    width: '100%',
  },
  topActionIcon: { width: 22, height: 22 }
});
export default VideoArticle;
