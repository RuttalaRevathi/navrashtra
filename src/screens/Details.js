import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Share,
  FlatList,
  Platform,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  blackcolor,
  commonstyles,
  graycolor,
} from '../styles/commonstyles';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { HeaderStyle } from '../styles/Header.Styles';
import moment from 'moment';
import DetailsComponentTwo from '../components/DetailsComponentTwo';
import DetailsComponentOne from '../components/DetailsComponentOne';
import { BaseUrl, DetailsUrl, RelatedUrl } from '../utilities/urls';
import FastImage from 'react-native-fast-image';
import { decode } from 'html-entities';
import TopicItems from '../components/TopicItems';
import Ripple from 'react-native-material-ripple';

const Details = ({ navigation, route }) => {
  const [detailsData, setDetailsData] = useState([]);
  const Scrollref = useRef();
  const [fontSize, setFontSize] = useState(18);
  const [relatedData, setRelatedData] = useState(null);
  const [detailArticleData, setDetailArticleData] = useState(null);
  const [renderWebView, setRenderWebView] = useState(false);
  const [firstArticle, setFirstArticle] = useState(null);
  const [articleId, setArticleId] = useState(route.params?.item?.id);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getDetailArticleAction(articleId);
    getRelatedAction(articleId);
  }, [articleId]);

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
  const getIndex = () => {
    var index = detailsData.findIndex(x => x.id === firstArticle?.id);
    return index + 1;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderWebView(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const goToTop = () => {
    Scrollref.current.scrollTo({ x: 0, y: 0, animated: true });
  };
  useEffect(() => {
    goToTop();
  },);

  useEffect(() => {
    if (route?.params?.detailsData) {
      setDetailsData(route.params.detailsData);
    }

  }, [route?.params?.detailsData]);



  const sharecall = () => {
    const Link_Url = firstArticle?.link;
    Share.share({
      message: Link_Url,
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  const apiDate = firstArticle?.date;
  const formattedDate = moment(apiDate).format("MMM DD, YYYY | hh:mm A");

  const defaultImage = require('../Assets/Images/no_image.jpeg');
  const imageUrl = firstArticle?.web_featured_image
    ? { uri: firstArticle?.web_featured_image }
    : defaultImage;

  const handleWebViewRequest = request => {
    const url = request?.url;

    if (url.includes('post_id=')) {
      // Extract the post_id from the URL
      let postId = url.split('post_id=')[1];

      setArticleId(postId);
      // Prevent the WebView from opening the URL
      return false;
    }

    // Allow all other requests
    return true;
  };
  const toggleFontSize = () => {
    if (fontSize === 18) {
      setFontSize(20);
    } else if (fontSize === 20) {
      setFontSize(23);
    } else if (fontSize === 23) {
      setFontSize(25);
    } else {
      setFontSize(18);
    }
  };
  const handleTouchStart = (e) => {
    e.preventDefault();
  };
  const handleGoBack = () => {
    if (route.params?.screenName === 'Shorts') {
      navigation.navigate('Shorts');
    } else {
      navigation.goBack();
    }
  };
  const source = firstArticle?.content?.rendered;
  let source1 = source?.replace('lazyload', 'text/javascript');
  const authorName = firstArticle?.author_slug;
  return (
    <View style={commonstyles.container}>
      <View style={HeaderStyle.DetailsHeader}>
        <Ripple
          style={commonstyles.iconRipple}
          onPress={handleGoBack}>
          <Image
            source={require('../Assets/Images/arrow.png')}
            style={styles.iconSize}
          />
        </Ripple>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Ripple onPress={toggleFontSize} style={commonstyles.iconRipple}>
            <Image
              style={styles.iconSize}
              source={require('../Assets/Images/font.png')}
            />
          </Ripple>
          <Ripple onPress={sharecall} style={commonstyles.iconRipple}>
            <Image
              style={styles.iconSize}
              source={require('../Assets/Images/share_black.png')}
            />
          </Ripple>
        </View>
      </View>
      <ScrollView ref={Scrollref}>
        <View>
          <View
            style={{
              borderBottomColor: graycolor,
              borderBottomWidth: 2,
              paddingBottom: 5,
            }}>
            {/* Tittle */}
            <View style={{ paddingHorizontal: 12, paddingTop: 10 }}>
              <Text
                style={commonstyles.categoryText}>
                {decode(firstArticle?.title?.rendered)}
              </Text>
            </View>
            {/* Author and Time */}
            <View
              style={commonstyles.DetailTimeMainView}>
                <Ripple onPress={() => {
                navigation.push('Author', {
                  url: authorName
                })
              }}>
              <Text style={commonstyles.detailauthor}>
                BY <Text style={{fontWeight: '700'}}>{firstArticle?.author_name}</Text>
              </Text>
              </Ripple>
              <Text style={commonstyles.detailTime}>Updated on: {formattedDate}</Text>
            </View>

            {/* image */}
            <FastImage
              source={imageUrl}
              style={commonstyles.Detailslargecard}
              resizeMode={FastImage.resizeMode.cover}
            />
            {/* content */}
            {/* <Text>{source1}</Text> */}
            <View>
              {renderWebView &&
                <AutoHeightWebView
                  javaScriptEnabled={true}
                  scalesPageToFit={false}
                  allowsFullscreenVideo={true}
                  overScrollMode="never"
                  style={{ marginHorizontal: 12, width: Dimensions.get('window').width - 24, opacity: 0.99 }}
                  onTouchStart={handleTouchStart}
                  customStyle={`
                 iframe[title]{
      font-size: 16px;
    }
    * {
      font-family: 'Mandali-Bold';
      line-height: 1.5;
      -webkit-user-select: auto;
      -webkit-touch-callout: default; 
    }
    iframe[src^="https://www.youtube.com/embed/"] {
        width:100%;
        height:225px;
        marginTop: 6px;
        marginBottom: 6px;                     
    }
    h4 {
      margin:5px 0px;
    }
    p strong {
      font-size: 18px;
    }
    p, h4 a {
      font-size: 14px;
      text-align:left;
      margin:5px 0px;
      font-family:'Mandali-Regular';
      line-height:1.6
    }
    h2 a {
      font-size: 18px;
      text-align:left;
      margin:5px 0px;
      font-family:'Mandali-Regular';
      line-height:1.6
    }
    h1{
      font-size: 18px;
      text-align:left;
      margin: 5px 0px;
      font-family:'Mandali-Regular';
      line-height:1.6
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
      p a{
      width:100%;
      height:inherit
      }
  `}
                  source={{
                    html: `
    ${source1}
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Faustina&display=swap');
      p strong, span, p span { font-family: 'Faustina', sans-serif; }
      p, li { font-family: 'Faustina', sans-serif; line-height: 1.4; padding: 0px; color: #000; font-weight: 500; font-size: ${fontSize}px; }
    </style>
  `,
                    baseUrl: Platform.OS === "android" ? 'https://twitter.com' : '',
                  }}
                  injectedJavaScript={`
                    document.querySelectorAll('a').forEach(a => {
                        a.onclick = function(event) {
                            event.preventDefault();
                        };
                    });
                    true;
                `}
                  scrollEnabled={false}
                  onShouldStartLoadWithRequest={handleWebViewRequest}
                  viewportContent={'width=device-width, user-scalable=no'}
                />
              }
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
              <View style={styles.articleContainer}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  persistentScrollbar={false}
                  horizontal={true}
                  data={detailsData?.slice(getIndex(), getIndex() + 5)}
                  renderItem={renderItemOne}
                  keyExtractor={(item)=>item.id?.toString()}
                  initialNumToRender={5}
                  maxToRenderPerBatch={10}
                  windowSize={10}
                />
              </View>
            ) : (<Text
                  style={styles.noNextArticles}>
                  No Next Articles
                </Text>)}
          </View>

          {/* Related News */}
          <View style={[commonstyles.homeOnetextView, commonstyles.sectionTitle]}>
            <Text style={commonstyles.Category}>संबंधित बातम्या</Text>
          </View>
          <View style={{ paddingHorizontal: 12 }}>
            <FlatList
              data={relatedData?.data}
              renderItem={renderItemTwo}
              keyExtractor={item => item?.id?.toString()}
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
  noNextArticles: {
    fontSize: 16,
    color: blackcolor,
    textAlign: 'center',
    marginBottom: 13
  },
  articleContainer: { paddingLeft: 12, flex: 1, alignItems: 'flex-start' },
  iconSize: { width: 22, height: 22 },
});

export default Details;
