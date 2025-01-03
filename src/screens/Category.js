import React, { useEffect, useState } from 'react';
import CategoryUI from '../components/CategoryUI';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';
import { blackcolor, commonstyles } from '../styles/commonstyles';

const CategoryScreen = ({ item, isTopNavigation }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const [parentData, setParentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 10; // Define the limit for API calls

  useEffect(() => {
    fetchParentData();
  }, []);

  const fetchParentData = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const category = route.params?.isCategoryClicked ? route.params?.url : item?.url;
      const url = `https://www.navarashtra.com/wp-json/navarashtra/v1/category-posts?category=${category}&limit=${limit}&offset=${offset}`;

      const response = await fetch(url);
      const jsonData = await response.json();

      if (jsonData.status === 'success' && jsonData.data?.length > 0) {
        setParentData((prevData) => [...prevData, ...jsonData.data]);
        setOffset((prevOffset) => prevOffset + limit); // Increment offset for the next fetch
      } else {
        setHasMore(false); // No more data to fetch
      }
    } catch (error) {
      console.error('Error fetching category data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!loading && parentData.length > 0 ? (
        <CategoryUI
          data={parentData}
          navigation={navigation}
          title={item?.title}
          categoryName={item?.title}
          isTopNavigation={isTopNavigation}
          loadMore={fetchParentData} // Load more function for infinite scroll
          loading={loading}
          hasMore={hasMore}
        />
      ) : (
        <View style={commonstyles.spinnerView}>
          <ActivityIndicator color={blackcolor} size="large" />
        </View>
      )}
    </>
  );
};

export default CategoryScreen;
