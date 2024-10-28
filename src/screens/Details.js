import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
  Share,
  Dimensions,
  FlatList,
} from 'react-native';
import {
  blackcolor,
  commonstyles,
  Dark_graycolor,
  graycolor,
  redcolor,
} from '../styles/commonstyles';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { HeaderStyle } from '../styles/Header.Styles';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import DetailsComponentTwo from '../components/DetailsComponentTwo';
import DetailsComponentOne from '../components/DetailsComponentOne';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseUrl, DetailsUrl, LatestUrl, RelatedUrl } from '../utilities/urls';
import FastImage from 'react-native-fast-image';
import { decode } from 'html-entities';

const screenWidth = Dimensions.get('window').width;

const Details = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [detailsData, setDetailsData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isHomeIcon, setIsHomeIcon] = useState(false);
  const Scrollref = useRef();
  const [bookmarked, setBookmarked] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(route.params.index || 0);
  const [fontSize, setFontSize] = useState(18);
  const [activeSlide, setActiveSlide] = useState(0);
  const [latestNews, setLatestNewsData] = useState(null);
  const [relatedData, setRelatedData] = useState(null);
  const [detailArticleData, setDetailArticleData] = useState(null);
  const [renderWebView, setRenderWebView] = useState(false);
  const [firstArticle, setFirstArticle] = useState(null);
  const [articleId, setArticleId] = useState(route.params?.item?.id);

  // Fetch the article when the formatedid changes
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
    }
  }, [detailArticleData]);

  function fetchSingleArticleObj() {
    const articleObj = route.params?.detailsData?.filter(
      item => item.id === route.params?.item?.id,
    )[0];
    setFirstArticle(articleObj);
  }

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
    }, 500); // Delay rendering by 0.5 seconds

    return () => clearTimeout(timer); // Clean up the timer on unmount
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
    checkBookmarkStatus();
  }, [route?.params?.detailsData]);

  const checkBookmarkStatus = async () => {
    try {
      const storedArticles = await AsyncStorage.getItem('bookmarkedArticles');
      if (storedArticles) {
        const bookmarkedArticles = JSON.parse(storedArticles);
        const isBookmarked = bookmarkedArticles.some(
          article => article.id === firstArticle.id,
        );
        setBookmarked(isBookmarked);
      }
    } catch (error) {
      console.error('Error checking bookmark status:', error);
    }
  };

  const sharecall = () => {
    const Link_Url = firstArticle?.link;
    Share.share({
      message: Link_Url,
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  const handleBookmark = async () => {
    try {
      const storedArticles = await AsyncStorage.getItem('bookmarkedArticles');
      let bookmarkedArticles = storedArticles ? JSON.parse(storedArticles) : [];

      const isBookmarked = bookmarkedArticles.some(
        article => article.id === firstArticle.id,
      );

      if (!isBookmarked) {
        bookmarkedArticles.push(firstArticle);
        await AsyncStorage.setItem(
          'bookmarkedArticles',
          JSON.stringify(bookmarkedArticles),
        );
        setBookmarked(true);
        setToastMessage('News added to favorites');
        setShowToast(true);
      } else {
        bookmarkedArticles = bookmarkedArticles.filter(
          article => article.id !== firstArticle.id,
        );
        await AsyncStorage.setItem(
          'bookmarkedArticles',
          JSON.stringify(bookmarkedArticles),
        );
        setBookmarked(false);
        setToastMessage('News removed from favorites');
        setShowToast(true);
      }
    } catch (error) {
      console.error('Error bookmarking article:', error);
      setToastMessage('An error occurred. Please try again later.');
      setShowToast(true);
    }
  };

  const now = moment.utc();
  const date = moment.utc(firstArticle?.date_gmt || now);
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

  const defaultImage = require('../Assets/Images/no_image.jpeg');
  const imageUrl = firstArticle?.web_featured_image
    ? { uri: firstArticle?.web_featured_image }
    : defaultImage;

  // Handle "Read Also" link clicks
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
      setFontSize(16);
    }
  };

  const source = firstArticle?.content?.rendered;
  let source1 = source?.replace('lazyload', 'text/javascript');

  return (
    <View style={commonstyles.container}>
      <View>
        <View style={HeaderStyle.DetailsHeader}>
          <View style={{ display: 'flex', alignItems: 'center', width: '10%' }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ zIndex: 999 }}>
              <Image
                source={require('../Assets/Images/arrow.png')}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '20%',
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: 100,
            }}>
            <View style={{ display: 'flex', alignItems: 'center' }}>
              <TouchableOpacity onPress={toggleFontSize}>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../Assets/Images/font.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', alignItems: 'center' }}>
              <TouchableOpacity onPress={handleBookmark}>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={
                    bookmarked
                      ? require('../Assets/Images/bookmark_filledblack.png')
                      : require('../Assets/Images/bookmark-black.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', alignItems: 'center' }}>
              <TouchableOpacity onPress={sharecall}>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../Assets/Images/share_black.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
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
            <View style={{ paddingLeft: 10, paddingTop: 10 }}>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={commonstyles.categoryText}>
                {decode(firstArticle?.title?.rendered)}

              </Text>
              {/* <Text>{firstArticle?.id}</Text> */}
            </View>
            {/* Time */}
            <View
              style={{ flexDirection: 'row', paddingLeft: 10,paddingBottom:5 }}>
              {/* Author */}
              <View style={{}}>
                <Text style={commonstyles.detailauthor}>
                  {firstArticle?.author_name}
                </Text>
              </View>
              {/* category name */}
              <View style={{}}>
                <Text style={commonstyles.detailsCateName}>
                  {' '}
                  | {firstArticle?.category_name}
                </Text>
              </View>
              {/* Time */}
              <View style={{}}>
                <Text style={commonstyles.detailTime}> | {formattedDate}</Text>
              </View>
            </View>

            {/* image */}
            <View style={{ width: '100%' }}>
              <FastImage
                source={imageUrl}
                style={commonstyles.Detailslargecard}
                resizeMode={FastImage.resizeMode.cover}
              />
            </View>
            {/* content */}
           {/* <Text>{source1}</Text> */}
            <View
              style={{
                justifyContent: 'center',
              }}>
              {renderWebView &&
                <AutoHeightWebView
                  javaScriptEnabled={true}
                  scalesPageToFit={false}
                  allowsFullscreenVideo={true}

                  style={{ opacity: 0.99 }}
                  customStyle={`
                     iframe[src^="https://www.youtube.com/embed/"] {
                                width:100% !important;
                                height:225px
                             
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
      h2 {
      padding-left:15px
      }
    p strong {
      font-size: 18px;
    }
    p, h4 a {
      font-size: 14px;
      text-align:left;
      margin:5px;
      font-family:'Mandali-Regular';
      line-height:2
    }
    h2 a {
      font-size: 18px;
      text-align:left;
      margin:5px;
      font-family:'Mandali-Regular';
      line-height:1.6
    }
    h1{
      font-size: 18px;
      text-align:left;
      margin:5px;
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
      h3{
      padding-left:10px;
      }
      p a{
      width:100%;
      height:inherit
      }
      div[dir="auto"]{
      font-size: 14px;
      text-align:left;
      margin:5px;
      font-family:'Mandali-Regular';
      line-height:1.6
      }
  `}
                  source={{
                    html: `
    ${source1}
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Faustina&display=swap');
      p strong, span, p span { font-family: 'Faustina', sans-serif; }
      p, li { font-family: 'Faustina', sans-serif; line-height: 1.4; padding: 0px 8px; color: #000; font-weight: 500; font-size: ${fontSize}px; }
    </style>
  `,
                    baseUrl: 'https://twitter.com',
                  }}
                  injectedJavaScript={`
                    document.querySelectorAll('a').forEach(a => {
                        a.onclick = function(event) {
                            event.preventDefault();
                        };
                    });
                    true;
                `}
                  onShouldStartLoadWithRequest={handleWebViewRequest}
                  viewportContent={'width=device-width, user-scalable=no'}
                />
              }
            </View>
          </View>
          {/* Next Article */}
          <View
            style={{
              borderBottomColor: graycolor,
              borderBottomWidth: 2,
            }}>
            <View style={[commonstyles.DetailsLatestView]}>
              <Text style={commonstyles.RelatedCategory}>Next Articles</Text>
            </View>
            {detailsData.length > 0 ? (
              <View style={{ paddingLeft: 10 }}>
                <FlatList
                  showsHorizontalScrollIndicator={true}
                  persistentScrollbar={false}
                  horizontal={true}
                  data={detailsData?.slice(getIndex(), getIndex() + 5)}
                  renderItem={renderItemOne}
                />
              </View>
            ) : (
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 18,
                    color: blackcolor,
                    textAlign: 'center',
                  }}>
                  No Next Articles{' '}
                </Text>
              </View>
            )}
          </View>

          {/* Related News */}
          <View>
            <View style={commonstyles.DetailsLatestView}>
              <Text style={commonstyles.RelatedCategory}>सम्बंधित ख़बरें</Text>
            </View>
            <View style={{ paddingLeft: 10 }}>
              <FlatList
                data={relatedData?.data}
                renderItem={renderItemTwo}
                // keyExtractor={item => item.id.toString()}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={10}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
