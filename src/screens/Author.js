import React, {useState, useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {
  FlatList,
  View,
  Image,
  ActivityIndicator,
  Text,
} from 'react-native';
import {HeaderStyle} from '../styles/Header.Styles';
import CategoryComponentTwo from '../components/CategoryComponentTwo';
import AuthorComponent from '../components/AuthorComponent';
import {appThemeColor, blackcolor, commonstyles} from '../styles/commonstyles';
import {BaseUrl, authorUrl} from '../utilities/urls';
import Ripple from 'react-native-material-ripple';

const PhotoAuthorListItem = React.lazy(() => import('../components/PhotoAuthorListItem'));
const VideoAuthorListItem = React.lazy(() => import('../components/VideoAuthorListItem'));

const AuthorScreen = ({title}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [parentData, setParentData] = useState([]); // State to hold fetched posts data
  const [authorData, setAuthorData] = useState(null); // State to hold author data
  const [offset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;
  
  

  useEffect(() => {
    fetchAuthorData();
  }, [route]);

  const fetchAuthorData = async (isLoadMore = false) => {
    if (loadingMore || (!hasMore && isLoadMore)) return;
  
    if (isLoadMore) {
      setLoadingMore(true);
    } else {
      setLoading(true);
    }
  
    try {
      const author = route.params?.url?.split(' ').join('');
      const currentOffset = isLoadMore ? parentData.length : 0;
      const url = `${BaseUrl}${authorUrl}?author-name=${author}&limit=${limit}&offset=${currentOffset}`;
  
      const response = await fetch(url);
      const jsonData = await response.json();
  
      if (jsonData?.posts?.length > 0) {
        setParentData(prev => isLoadMore ? [...prev, ...jsonData.posts] : jsonData.posts);
        setHasMore(jsonData.posts.length === limit);
      } else {
        setHasMore(false);
      }
  
      if (jsonData?.author) {
        setAuthorData(jsonData.author);
      } else {
        setError('No author data available.');
      }
    } catch (error) {
      setError('Error fetching author posts.');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };
  

  const renderAuthor = ({item}) => {
    const {screenName} = route.params;
    if (screenName === 'PhotoArticle') {
      return (
        <PhotoAuthorListItem
          item={item}
          propsdata={parentData}
          navigation={navigation}
          categoryName={title}
        />
      );
    } else if (screenName === 'VideoArticle') {
      return (
        <VideoAuthorListItem
          item={item}
          propsdata={parentData}
          navigation={navigation}
          categoryName={title}
        />
      )
    } else {
      return (
        <CategoryComponentTwo
          item={item}
          propsdata={parentData}
          navigation={navigation}
          categoryName={title}
        />
      );
    }
  };
    const renderLoadMoreButton = () => {
      if (loadingMore) {
        return (
          <ActivityIndicator
            style={{marginVertical: 22}}
            size="small"
            color={appThemeColor}
          />
        );
      }
  
      if (!hasMore) {
        return (
          <Text style={commonstyles.noMoreText}>No more data available</Text>
        );
      }
  
      return (
        <Ripple style={commonstyles.loadMoreBtn} onPress={() => fetchAuthorData(true)}>
          <Text style={commonstyles.loadMoreBtnTxt}>Load More</Text>
        </Ripple>
      );
    };

  if (loading) {
    return (
      <View style={commonstyles.loadingContainer}>
        <ActivityIndicator size="large" color={blackcolor} />
      </View>
    );
  } else {
    return (
      <>
        <View style={HeaderStyle.DetailsHeader}>
          <Ripple onPress={() => navigation.goBack()}
            style={commonstyles.iconRipple}>
            <Image
              source={require('../Assets/Images/arrow.png')}
              style={commonstyles.actionIconSize}
            />
          </Ripple>
        </View>
        <>
          {error !== null ? (
            <View style={commonstyles.loadingContainer}>
              <Text>{error}</Text>
            </View>
          ) : (
            <FlatList
              ListHeaderComponent={<AuthorComponent authorData={authorData} />}
              style={{flex: 1, paddingHorizontal: 12}}
              data={parentData}
              renderItem={renderAuthor}
              keyExtractor={item =>
                item.id?.toString() || Math.random().toString()
              }
              ListFooterComponent={renderLoadMoreButton}
            />
          )}
        </>
      </>
    );
  }
};

export default AuthorScreen;
