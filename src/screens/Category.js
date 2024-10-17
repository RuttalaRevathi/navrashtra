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
  }, []);

  const fetchParentData = async () => {
    setLoading(true); // Set loading to true before starting the fetch
    try {
      let response = null;
      if (route.params?.isCategoryClicked) {
        response = await fetch(
          'https://navarashtra.com/wp-json/navarashtra/v1/category-posts/' + route.params?.url
        );
      } else {
        response = await fetch(
          'https://navarashtra.com/wp-json/navarashtra/v1/category-posts/' + item?.url
        );
      }
      const jsonData = await response.json();

      if (jsonData.status === 'success') {
        setParentData(jsonData?.data);
        setLoading(false);
      } else {
      }
    } catch (error) {
      console.error('Error fetching parent data in category: ', error);
    } finally {
      setLoading(false); // Ensure loading stops after fetch or error
    }
  };

  return (
    <>{loading? <View style={commonstyles.spinnerView}>
    <ActivityIndicator color={blackcolor} size="large" />
    <Text style={commonstyles.spinnerText}>. . . Loading . . .</Text>
  </View>: <CategoryUI
      data={parentData}
      navigation={navigation}
      title={item?.title}
      categoryName={item?.title}
    />} 
    </>
    
  );
};

export default CategoryScreen;
