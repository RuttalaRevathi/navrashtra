/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { commonstyles } from '../styles/commonstyles';
import CategoryComponentTwo from '../components/CategoryComponentTwo';
import CategoryComponentOne from '../components/CategoryComponentOne';
import { BaseUrl, LatestUrl } from '../utilities/urls';

const LatestNews = ({ navigation, route }: Props) => {
  const [latestNews, setLatestNewsData] = useState(null);
  const [loading, setLoading] = useState(false); // State to handle the loader

  const getLatestNewsAction = async () => {
    setLoading(true);
    try {
      const response = await fetch(BaseUrl + LatestUrl);
      const responseJson = await response.json();
      setLatestNewsData(responseJson);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching getLatestNewsAction data:', error);
    } finally {
      setLoading(false); // Stop the loader once the data is fetched
    }
  };

  useEffect(() => {
    getLatestNewsAction();
  }, []);

  const renderItemTwo = ({ item }) => (
    <CategoryComponentTwo
      item={item}
      propsdata={latestNews?.data}
      navigation={navigation}
    />
  );

  const renderItemOne = ({ item }) => (
    <CategoryComponentOne
      item={item}
      propsdata={latestNews?.data}
      navigation={navigation}
    />
  );

  return (
    <SafeAreaView style={commonstyles.container}>
      {loading ? ( 
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
        <Text style={commonstyles.galleryArticlecategorytext}>ताज्या बातम्या</Text>
      <ScrollView style={commonstyles.scroll}>
            <View style={{ padding: 12 }}>
              <FlatList
                style={commonstyles.cateflist}
                data={latestNews?.data}
                renderItem={renderItemTwo}
              />
            </View>
        </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

export default LatestNews;
