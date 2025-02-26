import React, {useState, useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {
  FlatList,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import CategoryComponentTwo from '../components/CategoryComponentTwo';
import AuthorComponent from '../components/AuthorComponent';
import {HeaderStyle} from '../styles/Header.Styles';
import {blackcolor, commonstyles} from '../styles/commonstyles';
import { authorUrl, BaseUrl } from '../utilities/urls';

const AuthorScreen = ({title}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [parentData, setParentData] = useState([]); // State to hold fetched posts data
  const [authorData, setAuthorData] = useState(null); // State to hold author data
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const limit = 10;

  useEffect(() => {
    fetchAuthorData();
  }, [route]);

  // Function to fetch data for authors
  const fetchAuthorData = async () => {
    setLoading(true);
    try {
      const author = route.params?.url;
      const url = `${BaseUrl}${authorUrl}?author-name=${author}&limit=${limit}&offset=${offset}`;


      const response = await fetch(url);
      const jsonData = await response.json();

      if (
        jsonData &&
        jsonData.posts &&
        Array.isArray(jsonData.posts) &&
        jsonData.posts.length > 0
      ) {
        console.log('author.posts:', jsonData.posts);
        setParentData(jsonData.posts); // Update state with the fetched posts
      } else {
        setError('No posts available for this author.');
      }

      if (jsonData && jsonData.author) {
        console.log('authorData', jsonData.author);
        setAuthorData(jsonData.author); // Set author data if present
      } else {
        setError('No author data available.');
      }
    } catch (error) {
      setError('Error fetching author posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItemTwo = ({item}) => (
    <CategoryComponentTwo
      item={item}
      propsdata={parentData}
      navigation={navigation}
      categoryName={title}
    />
  );

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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../Assets/Images/arrow.png')}
              style={{width: 22, height: 22}}
            />
          </TouchableOpacity>
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
              renderItem={renderItemTwo}
              keyExtractor={item =>
                item.id?.toString() || Math.random().toString()
              }
              // ListFooterComponent={renderLoadMoreButton}
            />
          )}
        </>
      </>
    );
  }
};

export default AuthorScreen;
