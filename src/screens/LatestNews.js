/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { commonstyles } from '../styles/commonstyles';
import CategoryComponentTwo from '../components/CategoryComponentTwo';
import CategoryComponentOne from '../components/CategoryComponentOne';
import { BaseUrl, LatestUrl } from '../utilities/urls';

const LatestNews = ({ navigation, route }: Props) => {
  const [latestNews, setLatestNewsData] = useState(null);
  const [loading, setLoading] = useState(true); // State to handle the loader

  const getLatestNewsAction = async () => {
    try {
      const response = await fetch(BaseUrl + LatestUrl);
      const responseJson = await response.json();
      setLatestNewsData(responseJson);
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
      {loading ? ( // Show the loader when loading is true
        <ActivityIndicator size="large" color="#000000" style={{ flex: 1 }} />
      ) : ( // Show the content once loading is false
        <ScrollView style={commonstyles.scroll}>
          <View>
            <View style={{ position: 'relative' }}>
              <FlatList
                style={commonstyles.cateflist}
                data={latestNews?.data}
                renderItem={renderItemTwo}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default LatestNews;
