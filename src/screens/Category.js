import React, { useEffect, useState } from 'react';
import CategoryUI from '../components/CategoryUI';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, ActivityIndicator } from 'react-native';
import { blackcolor, commonstyles } from '../styles/commonstyles';

const CategoryScreen = ({ item }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const [parentData, setParentData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchParentData();
  }, [route.params, item]); // Added dependencies to useEffect

  const fetchParentData = async () => {
    setLoading(true); 
    try {
      const url = route.params?.isCategoryClicked ? route.params?.url : item?.url;
      console.log(url, "URL being fetched");
      const response = await fetch(
        `https://navarashtra.com/wp-json/navarashtra/v1/category-posts/${url}`
      );
      
      const jsonData = await response.json();

      if (jsonData.status === 'success' && Array.isArray(jsonData.data)) {
        setParentData(jsonData.data);
      } else {
        // console.error('Error from API category:', jsonData);
        console.log(JSON.stringify(jsonData, null, 2));

      }
    } catch (error) {
      console.error('Error fetching parent data in category: ', error);
    } finally {
      setLoading(false);
    }
  };

  console.log(parentData, "parentData in category screen");

  return (
    <>
      {loading ? (
        <View style={commonstyles.spinnerView}>
          <ActivityIndicator color={blackcolor} size="large" />
          <Text style={commonstyles.spinnerText}>. . . Loading . . .</Text>
        </View>
      ) : (
        <CategoryUI
          data={parentData}
          navigation={navigation}
          title={item?.title}
          categoryName={item?.title}
        />
      )}
    </>
  );
};

export default CategoryScreen;
