/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {commonstyles} from '../styles/commonstyles';
import CategoryComponentTwo from '../components/CategoryComponentTwo';
import {BaseUrl, LatestUrl} from '../utilities/urls';
import Ripple from 'react-native-material-ripple';
import {appThemeColor, whitecolor} from '../styles/commonstyles';

const LatestNews = ({navigation}) => {
  const [latestNews, setLatestNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  const getLatestNewsAction = async (isLoadMore = false) => {
    if (loadingMore || (!hasMore && isLoadMore)) return;

    if (isLoadMore) {
      setLoadingMore(true);
    } else {
      setLoading(true);
    }

    try {
      const response = await fetch(
        `${BaseUrl}${LatestUrl}?limit=${limit}&offset=${offset}`,
      );
      const responseJson = await response.json();
      
      if (responseJson['1'] === 'success' && responseJson.data?.length > 0) {
        setLatestNewsData(prevData => [...prevData, ...responseJson.data]);
        setOffset(prevOffset => prevOffset + limit);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching getLatestNewsAction data:', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    getLatestNewsAction();
  }, []);

  const renderItemTwo = ({item}) => (
    <CategoryComponentTwo
      item={item}
      propsdata={latestNews}
      navigation={navigation}
    />
  );

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
      <Ripple style={styles.loadMoreBtn} onPress={() => getLatestNewsAction(true)}>
        <Text style={styles.loadMoreBtnTxt}>Load More</Text>
      </Ripple>
    );
  };

  return (
    <SafeAreaView style={commonstyles.container}>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          <View
            style={[
              commonstyles.gallerycategoryView,
              {marginLeft: 12, marginTop: 12},
            ]}>
            <Text style={commonstyles.galleryArticlecategorytext}>
              ताज्या बातम्या
            </Text>
          </View>
          <FlatList
            style={commonstyles.cateflist}
            data={latestNews}
            renderItem={renderItemTwo}
            keyExtractor={item => item.id?.toString() || Math.random().toString()}
            ListFooterComponent={renderLoadMoreButton}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadMoreBtn: {
    alignSelf: 'center',
    marginVertical: 12,
    paddingHorizontal: 18,
    paddingVertical: 8,
    backgroundColor: appThemeColor,
    borderRadius: 30,
    padding: 10,
    overflow: 'hidden',
  },
  loadMoreBtnTxt: {
    color: whitecolor,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LatestNews;
